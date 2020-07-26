const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const barangSchema = new mongoose.Schema({
  tindakPidana: String,
  nomorRegister: String,
  tanggalRegister: Date,
  nama: String,
  instansi: String,
  jumlah: Number,
  satuan: String,
  klasifikasi: String,
  golongan: String,
  kondisi: String,
  gambar: [String],
});

barangSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Barang', barangSchema);
