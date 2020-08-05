import { DataTypes } from './Types';

const protocol = 'http';
const hostname = 'localhost';
const port = 3500;

export const Urls = {
  [DataTypes.BARANG]: `${protocol}://${hostname}:${port}/api/barang`,
  [DataTypes.FILTERS]: `${protocol}://${hostname}:${port}/api/filters`,
};
