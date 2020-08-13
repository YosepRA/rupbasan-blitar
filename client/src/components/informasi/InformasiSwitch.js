import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Urls } from '../data/Urls';
import { DataTypes } from '../data/Types';

// Pages
import { SyaratPenerimaanBenda } from './SyaratPenerimaanBenda';
import { ProsedurAdministrasiMutasi } from './ProsedurAdministrasiMutasi';
import { SyaratPengeluaranBenda } from './SyaratPengeluaranBenda';
import { LayananPengaduan } from './LayananPengaduan';

export class InformasiSwitch extends Component {
  render() {
    return (
      <Switch>
        <Route
          path={`/informasi/${
            Urls[`${DataTypes.INFORMASI}_SYARAT_PENERIMAAN_BENDA`]
          }`}
        >
          <SyaratPenerimaanBenda />
        </Route>

        <Route
          path={`/informasi/${
            Urls[`${DataTypes.INFORMASI}_PROSEDUR_ADMINISTRASI_MUTASI`]
          }`}
        >
          <ProsedurAdministrasiMutasi />
        </Route>

        <Route
          path={`/informasi/${
            Urls[`${DataTypes.INFORMASI}_SYARAT_PENGELUARAN_BENDA`]
          }`}
        >
          <SyaratPengeluaranBenda />
        </Route>

        <Route
          path={`/informasi/${
            Urls[`${DataTypes.INFORMASI}_LAYANAN_PENGADUAN`]
          }`}
        >
          <LayananPengaduan />
        </Route>
      </Switch>
    );
  }

  componentDidMount() {
    document.body.classList.add('page-informasi');
  }

  componentWillUnmount() {
    document.body.classList.remove('page-informasi');
  }
}
