import React, { Component } from 'react';
import { HTMLHead } from '../HTMLHead';

export class TugasPokokDanFungsi extends Component {
  render() {
    return (
      <main className="main-container container">
        <HTMLHead title="Tugas Pokok dan Fungsi Rupbasan | Rumah Penyimpanan Benda Sitaan Negara Kelas II Blitar" />

        <header className="page-title">
          <h1>Tugas Pokok dan Fungsi Rupbasan</h1>
        </header>

        <section className="tugas-pokok">
          <header className="section-title">
            <h2>Tugas Pokok Rupbasan</h2>
          </header>

          <p>
            Berdasarkan Keputusan Menteri Kehakiman Republik Indonesia Nomor
            M.04 PR.07.03 Tahun 1985 tentang Organisasi dan Tata Kerja Rumah
            Tahanan Negara dan Rumah Penyirnpanan Benda Sitaan Negara, RUPBASAN
            mempunyai tugas melakukan penyimpanan benda sitaan negara dan barang
            rampasan negara.
          </p>
        </section>

        <section className="fungsi">
          <header className="section-title">
            <h2>Fungsi Rupbasan</h2>
          </header>

          <ol className="fungsi__list">
            <li className="fungsi__list-item">
              Melakukan pengadministrasian benda sitaaan dan barang rampasan
              negara.
            </li>
            <li className="fungsi__list-item">
              Melakukan pemeliharaan dan mutasi benda sitaan dan barang
              rampasan. negara
            </li>
            <li className="fungsi__list-item">
              Melakukan pengamanan dan pengelolaan RUPBASAN.
            </li>
            <li className="fungsi__list-item">
              Melakukan urusan surat menyurat dan kearsipan.
            </li>
          </ol>
        </section>
      </main>
    );
  }

  componentDidMount() {
    document.body.classList.add('page-tugas-pokok');
  }

  componentWillUnmount() {
    document.body.classList.remove('page-tugas-pokok');
  }
}
