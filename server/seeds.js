const Barang = require('./models/barang');
const { barang } = require('./data');

module.exports = function () {
  Barang.deleteMany({})
    .then(() => {
      Barang.create(barang).then(() => console.log('Seeding completed.'));
    })
    .catch(err => console.error(err.message));
};
