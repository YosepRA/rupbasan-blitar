const Barang = require('./models/Barang');
const { generateBarang } = require('./data');

module.exports = function () {
  Barang.deleteMany({})
    .then(() => generateBarang(120))
    .then(barang => Barang.create(barang))
    .then(() => console.log('Seeding is completed'))
    .catch(err => console.error(err.message));
};
