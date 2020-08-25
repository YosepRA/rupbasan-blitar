const Barang = require('./models/Barang');
const { cleanWhitespace } = require('./helpers');

function modifyDate(dateString) {
  let trimmed = cleanWhitespace(dateString);
  let datePattern = /(\d*)[/-](\d*)[-/](\d*)/;

  return trimmed.replace(datePattern, '$3-$2-$1');
}

exports.adaptCSVImport = async () => {
  let allData = await Barang.find({});
  for (const data of allData) {
    const { nomorRegister, tanggalRegister } = data;
    data.nomorRegister = cleanWhitespace(nomorRegister);
    data.tanggalRegister = modifyDate(tanggalRegister);
    await data.save();
  }
};
