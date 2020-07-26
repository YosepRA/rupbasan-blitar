const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

const seedDB = require('./seeds');
const {
  cleanWhitespace,
  insensitiveRegex,
  getFiltersFromQuery,
} = require('./helpers');

// MODELS
const Barang = require('./models/barang');

// DB setup.
mongoose.connect('mongodb://localhost:27017/rupbasan_blitar', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Database connection error: '));
db.on('open', () => console.log('Successfully connected to the Database.'));

// Middlewares and configurations.
app.set('port', process.env.PORT || 3500);
app.use(cors());
app.use(morgan('dev'));

// DB seeding
// seedDB();

// ROUTES
app.get('/', async (req, res) => {
  try {
    res.send('Root');
  } catch (err) {
    console.error(err);
  }
});

// BARANG
app.get('/api/barang', async (req, res) => {
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

app.listen(app.get('port'), () => {
  console.log(`Server is listen on port ${app.get('port')}...`);
});
