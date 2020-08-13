const express = require('express');
const router = express.Router();
const multer = require('multer');
const cloudinary = require('cloudinary').v2;

// Multer configurations.
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './tmp/uploads');
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const imageFilter = (req, file, cb) => {
  // accept image files only
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/i)) {
    return cb(new Error('Only image files are allowed!'), false);
  }
  cb(null, true);
};
const upload = multer({ storage, fileFilter: imageFilter });

// Cloudinary congfigurations.
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// MODELS
const Barang = require('../models/Barang');

const {
  cleanWhitespace,
  insensitiveRegex,
  getFiltersFromQuery,
} = require('../helpers');

// BARANG

// Index route.
router.get('/', async (req, res) => {
  try {
    /**** 
     * Server will receive validated and sanitized data from React. 
      - page: '1'
      - pageSize: '10'
      - sort: '-nama'
      - search: 'foobar'
    ****/
    const { page, pageSize, sort, search } = req.query;

    const nomorRegisterPattern = /\w+\.\d+\/\d+\/\w+\/\d+/i;

    // Build up the query.
    let query = {};

    // ' Rbb.2 / 262 / V / 2006   ' → Trim it because there won't be any whitespaces stored in the DB.
    // '   Sleek Car  ' → No need to trim and the system won't care about not finding this kind of query.
    // If there is a search key, then add that according to either "nomorRegister" or "nama".
    // If not, then find all documents.
    if (search) {
      let trimmedSearchKey = cleanWhitespace(search);
      let isNomorRegister = nomorRegisterPattern.test(trimmedSearchKey);
      let searchFieldType = isNomorRegister ? 'nomorRegister' : 'nama';

      query[searchFieldType] = {
        $regex: insensitiveRegex(isNomorRegister ? trimmedSearchKey : search),
      };
    }

    // Everything but search, page, pageSize, and sort.
    const filters = getFiltersFromQuery(req.query, [
      'search',
      'page',
      'pageSize',
      'sort',
    ]);

    // Query consists of search key and a series of filters.
    query = { ...query, ...filters };

    // "mongoose-paginate" options.
    let paginationOptions = {
      sort,
      page: Number(page),
      limit: Number(pageSize),
    };
    // Main database query command. This is the goal of the route.
    let foundBarang = await Barang.paginate(query, paginationOptions);

    res.json(foundBarang);
  } catch (err) {
    console.log(err);
  }
});

// Document route.
router.get('/count', async (req, res) => {
  try {
    let allData = await Barang.find({}, 'nomorRegister instansi');

    let nomorRegisterRecord = [];
    let result = allData.reduce(
      (acc, { nomorRegister, instansi }) => {
        // One "nomorRegister" can be a value of many "barang" item.
        if (nomorRegisterRecord.includes(nomorRegister)) return acc;

        let instansiTotal =
          typeof acc.instansi[instansi] === 'number'
            ? acc.instansi[instansi]
            : 0;
        nomorRegisterRecord.push(nomorRegister);
        return {
          instansi: {
            ...acc.instansi,
            [instansi]: instansiTotal + 1,
          },
          total: acc.total + 1,
        };
      },
      { instansi: {}, total: 0 }
    );

    res.json(result);
  } catch (err) {
    console.error(err);
  }
});

// Create.
router.post('/', upload.array('gambar'), async (req, res) => {
  try {
    const { body, files } = req;
    let trimmedNomorRegister = cleanWhitespace(body.nomorRegister);
    let gambar = await uploadImages(files);
    let newBarang = {
      ...body,
      nomorRegister: trimmedNomorRegister,
      gambar,
    };

    let created = await Barang.create(newBarang);

    res.status(200).json(created);
  } catch (err) {
    console.error(err);
  }
});

// Show.
router.get('/:id', async (req, res) => {
  try {
    let foundBarang = await Barang.findById(req.params.id);
    res.json(foundBarang);
  } catch (err) {
    console.error(err);
  }
});

// Update.
router.put('/:id', upload.array('gambar'), async (req, res) => {
  try {
    let newData = req.body;
    // "newGambar" is an array of NEW image files that haven't been uploaded to Cloudinary yet.
    let newGambar = req.files;
    // "oldGambar" is an array of pictures that will remain in the next update.
    let oldGambar = JSON.parse(newData.oldGambar);

    // Only get "gambar" field as reference for filtering data from the ones which will be deleted in both ~
    // ~ Cloudinary and Database, and the others which will stay in the next update.
    let barang = await Barang.findById(req.params.id, 'gambar');

    // Get all pictures that won't remain in the next update.
    let deletedGambar = barang.gambar.filter(
      g => !oldGambar.find(old => g.public_id === old.name)
    );
    // Delete from Cloudinary.
    await deleteImages(deletedGambar);

    // Update phase.
    let uploadedNewGambar = await uploadImages(newGambar);
    let fields = filterFields(newData, ['id', 'oldGambar']);
    // From unchanged DB's old data, only take gambar that aren't deleted by the user, and include it ~
    // ~ in the next update. We can't use the data that we got from front-end because they have a ~
    // ~ structure that conform to front-end's needs. We need to use the native data for this one.
    let includedGambar = barang.gambar.filter(
      g => !deletedGambar.find(d => g.public_id === d.public_id)
    );
    // Build up the update data that consist of all fields and "gambar" which consists of an array of ~
    // OLD BUT INCLUDED data and the freshly uploaded ones.
    let updateData = {
      ...fields,
      gambar: [...includedGambar, ...uploadedNewGambar],
    };
    // Finally, update it.
    await Barang.findByIdAndUpdate(req.params.id, updateData);
    // And tell the front-end that changes have been made.
    res.send({ success: true });
  } catch (err) {
    console.error(err);
  }
});

// Destroy.
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    // Remove from DB and it will returned the deleted data.
    let deletedData = await Barang.findByIdAndDelete(id);
    // Remove images from Cloudinary.
    await deleteImages(deletedData.gambar);

    res.send({ success: true });
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;

// ======================================================================================================== //

// Helpers.
async function uploadImages(images) {
  let gambar = [];
  for (const img of images) {
    let result = await cloudinary.uploader.upload(img.path);
    gambar.push({
      public_id: result.public_id,
      url: result.secure_url,
    });
  }
  return gambar;
}

async function deleteImages(images) {
  for (const img of images) {
    await cloudinary.uploader.destroy(img.public_id);
  }
}

function filterFields(object, excluded) {
  let result = {};
  for (const [key, value] of Object.entries(object)) {
    if (!excluded.includes(key)) result[key] = value;
  }
  return result;
}
