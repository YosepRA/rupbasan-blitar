import React, { Component } from 'react';
import { HTMLHead } from '../HTMLHead';
import strukturOrganisasi from '../../assets/struktur-organisasi.png';

export class StrukturOrganisasi extends Component {
  render() {
    return (
      <main className="main-container container">
        <HTMLHead title="Struktur Organisasi | Rumah Penyimpanan Benda Sitaan Negara Kelas II Blitar" />

        <header className="page-title">
          <h1>Struktur Organisasi</h1>
        </header>

        <section className="struktur-organisasi">
          <img
            src={strukturOrganisasi}
            alt="Struktur Organisasi Rupbasan Blitar"
            className="struktur-organisasi__image"
          />
        </section>
      </main>
    );
  }

  componentDidMount() {
    document.body.classList.add('page-struktur-organisasi');
  }

  componentWillUnmount() {
    document.body.classList.remove('page-struktur-organisasi');
  }
}
