import React, { Component } from 'react';
import { HTMLHead } from '../HTMLHead';
import { Search } from '../Search';
import { PageControls } from '../PageControls';
import { BarangList } from './BarangList';
import { ControlFilter } from '../ControlFilter';
import { ControlSort } from '../ControlSort';
import { ControlPageSize } from '../ControlPageSize';
import { DataNotFound } from '../DataNotFound';

// import { barang } from '../data/fakeData';
// import { filterKeys as filterList } from '../data/filterKeys';
// let filterStatus = {
//   tindakPidana: {
//     umum: true,
//     khusus: false,
//   },
//   instansi: {
//     'kejari blitar': true,
//     'polres blitar kota': false,
//     'polres blitar': false,
//   },
//   klasifikasi: {
//     'umum terbuka': true,
//     berbahaya: false,
//     berharga: false,
//   },
// };

export class Barang extends Component {
  render() {
    return (
      <main className="main-container container">
        <HTMLHead title="Cari Barang | Rumah Penyimpanan Benda Sitaan Negara Kelas II Blitar" />
        <header className="page-title">
          <h1>Cari Barangmu Disini</h1>
        </header>

        <Search {...this.props} />

        {this.props.searchKey && (
          <section className="search-result-message">
            <h2>Hasil pencarian untuk &quot;{this.props.searchKey}&quot;</h2>
          </section>
        )}

        <PageControls {...this.props}>
          <ControlFilter />
          <ControlSort />
          <ControlPageSize />
        </PageControls>

        {this.props.barang && this.props.barang.length > 0 && (
          <BarangList {...this.props} />
        )}

        {this.props.barang && this.props.barang.length === 0 && (
          <DataNotFound />
        )}
      </main>
    );
  }

  componentDidMount() {
    document.body.classList.add('page-barang');
  }

  componentWillUnmount() {
    document.body.classList.remove('page-barang');
  }
}
