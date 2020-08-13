const faker = require('faker');
const { romanize } = require('@ionaru/romanize');
const util = require('util');
const crypto = require('crypto');

const randomBytes = util.promisify(crypto.randomBytes);

faker.seed(100);

const tindakPidana = ['Umum', 'Khusus'];
const instansi = ['Kejari Blitar', 'Polres Blitar Kota', 'Polres Blitar'];
const satuan = ['Unit', 'Buah', 'Batang'];
const klasifikasi = ['Umum Terbuka', 'Berbahaya', 'Berharga'];
const golongan = ['KBM', 'Elektronik', 'KTBM'];
const kondisi = ['Rusak Berat', 'Rusak', 'Baik'];
// 'Rbb.2 / 262 / V / 2006'

function randNum(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function regNum() {
  let kodeInstansi = `RBB.${faker.random.number(5)}`;
  let nomorEntri = faker.random.number(100);
  let bulan = romanize(faker.random.number(12) + 1);
  let tahun = randNum(2010, 2020);

  return `${kodeInstansi}/${nomorEntri}/${bulan}/${tahun}`;
}

function makeid(length) {
  let result = '';
  // let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function platNomor() {
  return `${makeid(2)}-${randNum(1000, 2000)}-${makeid(2)}`;
}

async function generateRandomID(length) {
  return await randomBytes(length).then(buf => buf.toString('hex'));
}

async function generatePictures(amount) {
  let pictures = [];
  for (let i = 0; i < amount; i++) {
    pictures.push({
      public_id: await generateRandomID(20),
      url: faker.image.image(640, 480),
    });
  }
  return pictures;
}

async function generateBarang(amount) {
  let barang = [];
  for (let i = 0; i < amount; i++) {
    barang.push({
      id: i,
      tindakPidana: faker.helpers.randomize(tindakPidana),
      nomorRegister: regNum(),
      tanggalRegister: faker.date.past(10, new Date()),
      nama: `${faker.commerce.productName()}${
        faker.random.boolean() ? ` ${platNomor()}` : ''
      }`,
      instansi: faker.helpers.randomize(instansi),
      jumlah: randNum(1, 10),
      satuan: faker.helpers.randomize(satuan),
      klasifikasi: faker.helpers.randomize(klasifikasi),
      golongan: faker.helpers.randomize(golongan),
      kondisi: faker.helpers.randomize(kondisi),
      gambar: await generatePictures(randNum(1, 5)),
    });
  }
  return barang;
}

module.exports = { generateBarang };
