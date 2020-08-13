const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const barangSchema = new mongoose.Schema({
  tindakPidana: String,
  nomorRegister: { type: String, trim: true },
  tanggalRegister: Date,
  nama: String,
  instansi: String,
  jumlah: Number,
  satuan: String,
  klasifikasi: String,
  golongan: String,
  kondisi: String,
  gambar: [{ public_id: String, url: String }],
});

barangSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Barang', barangSchema);
