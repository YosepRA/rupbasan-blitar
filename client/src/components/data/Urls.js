import { DataTypes } from './Types';

// const protocol = 'http';
// const hostname = 'localhost';
// const port = 3500;

const { protocol, hostname } = window.location;

export const Urls = {
  [DataTypes.BARANG]: `${protocol}//${hostname}:3500/api/barang`,
  [DataTypes.ARTIKEL]: `${protocol}//${hostname}:3500/api/artikel`,
  [DataTypes.FILTERS]: `${protocol}//${hostname}:3500/api/filters`,
  [DataTypes.BARANG_COUNT]: `${protocol}//${hostname}:3500/api/barang/count`,
  [`${DataTypes.PROFIL}_STRUKTUR_ORGANISASI`]: 'struktur-organisasi',
  [`${DataTypes.PROFIL}_SEJARAH_RUPBASAN`]: 'sejarah-rupbasan',
  [`${DataTypes.PROFIL}_TUGAS_POKOK_DAN_FUNGSI`]: 'tugas-pokok-dan-fungsi',
  [`${DataTypes.PROFIL}_DASAR_HUKUM`]: 'dasar-hukum',
  [`${DataTypes.PROFIL}_SOP`]: 'standar-operasi-prosedur',
  [`${DataTypes.INFORMASI}_SYARAT_PENERIMAAN_BENDA`]: 'syarat-penerimaan-benda-sitaan-dan-barang-rampasan-negara',
  [`${DataTypes.INFORMASI}_PROSEDUR_ADMINISTRASI_MUTASI`]: 'prosedur-administrasi-mutasi-benda-sitaan-negara',
  [`${DataTypes.INFORMASI}_SYARAT_PENGELUARAN_BENDA`]: 'syarat-pengeluaran-benda-sitaan-setelah-adanya-putusan-pengadilan',
  [`${DataTypes.INFORMASI}_LAYANAN_PENGADUAN`]: 'layanan-pengaduan',
  [DataTypes.USER]: `${protocol}//${hostname}:3500/user`,
  [DataTypes.REGISTER]: `${protocol}//${hostname}:3500/user/register`,
  [DataTypes.LOGIN]: `${protocol}//${hostname}:3500/user/login`,
  [DataTypes.LOGOUT]: `${protocol}//${hostname}:3500/user/logout`,
  [DataTypes.RESET]: `${protocol}//${hostname}:3500/user/reset`,
};

// export const Urls = {
//   [DataTypes.BARANG]: `${protocol}://${hostname}:${port}/api/barang`,
//   [DataTypes.ARTIKEL]: `${protocol}://${hostname}:${port}/api/artikel`,
//   [DataTypes.FILTERS]: `${protocol}://${hostname}:${port}/api/filters`,
//   [DataTypes.BARANG_COUNT]: `${protocol}://${hostname}:${port}/api/barang/count`,
//   [`${DataTypes.PROFIL}_STRUKTUR_ORGANISASI`]: 'struktur-organisasi',
//   [`${DataTypes.PROFIL}_SEJARAH_RUPBASAN`]: 'sejarah-rupbasan',
//   [`${DataTypes.PROFIL}_TUGAS_POKOK_DAN_FUNGSI`]: 'tugas-pokok-dan-fungsi',
//   [`${DataTypes.PROFIL}_DASAR_HUKUM`]: 'dasar-hukum',
//   [`${DataTypes.PROFIL}_SOP`]: 'standar-operasi-prosedur',
//   [`${DataTypes.INFORMASI}_SYARAT_PENERIMAAN_BENDA`]: 'syarat-penerimaan-benda-sitaan-dan-barang-rampasan-negara',
//   [`${DataTypes.INFORMASI}_PROSEDUR_ADMINISTRASI_MUTASI`]: 'prosedur-administrasi-mutasi-benda-sitaan-negara',
//   [`${DataTypes.INFORMASI}_SYARAT_PENGELUARAN_BENDA`]: 'syarat-pengeluaran-benda-sitaan-setelah-adanya-putusan-pengadilan',
//   [`${DataTypes.INFORMASI}_LAYANAN_PENGADUAN`]: 'layanan-pengaduan',
//   [DataTypes.USER]: `${protocol}://${hostname}:${port}/user`,
//   [DataTypes.REGISTER]: `${protocol}://${hostname}:${port}/user/register`,
//   [DataTypes.LOGIN]: `${protocol}://${hostname}:${port}/user/login`,
//   [DataTypes.LOGOUT]: `${protocol}://${hostname}:${port}/user/logout`,
//   [DataTypes.RESET]: `${protocol}://${hostname}:${port}/user/reset`,
// };
