import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Urls } from '../data/Urls';
import { DataTypes } from '../data/Types';

// Pages
import { StrukturOrganisasi } from './StrukturOrganisasi';
import { SejarahRupbasan } from './SejarahRupbasan';
import { TugasPokokDanFungsi } from './TugasPokokDanFungsi';
import { DasarHukum } from './DasarHukum';
import { SOP } from './SOP';

export class ProfilSwitch extends Component {
  render() {
    return (
      <Switch>
        <Route
          path={`/profil/${Urls[`${DataTypes.PROFIL}_STRUKTUR_ORGANISASI`]}`}
        >
          <StrukturOrganisasi />
        </Route>

        <Route path={`/profil/${Urls[`${DataTypes.PROFIL}_SEJARAH_RUPBASAN`]}`}>
          <SejarahRupbasan />
        </Route>

        <Route
          path={`/profil/${Urls[`${DataTypes.PROFIL}_TUGAS_POKOK_DAN_FUNGSI`]}`}
        >
          <TugasPokokDanFungsi />
        </Route>

        <Route path={`/profil/${Urls[`${DataTypes.PROFIL}_DASAR_HUKUM`]}`}>
          <DasarHukum />
        </Route>

        <Route path={`/profil/${Urls[`${DataTypes.PROFIL}_SOP`]}`}>
          <SOP />
        </Route>
      </Switch>
    );
  }
}
