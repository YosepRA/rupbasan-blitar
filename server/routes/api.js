const express = require('express');
const router = express.Router();

// MODELS
const Barang = require('../models/barang');

const {
  cleanWhitespace,
  insensitiveRegex,
  getFiltersFromQuery,
  getFilterKeys,
} = require('../helpers');

// BARANG
router.get('/barang', async (req, res) => {
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

router.get('/filters', async (req, res) => {
  try {
    let filterFields = [
      'tindakPidana',
      'instansi',
      'klasifikasi',
      'golongan',
      'kondisi',
    ];
    let filterData = await Barang.find({}, filterFields.join(' '));
    let filterKeys = getFilterKeys(filterFields, filterData);

    res.json(filterKeys);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
