const express = require('express');
const router = express.Router();
const Barang = require('../models/Barang');
const { getFilterKeys } = require('../helpers');

router.get('/', async (req, res) => {
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
