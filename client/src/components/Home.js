import React, { Component } from 'react';
import { HTMLHead } from './HTMLHead';
import { Search } from './Search';

export class Home extends Component {
  render() {
    return (
      <main className="main-container container">
        <HTMLHead title="Rumah Penyimpanan Benda Sitaan Negara Kelas II Blitar" />

        <section className="home-search">
          <Search />
        </section>

        <section className="row profile">
          <div className="profile__atasan col-12 col-md-4">
            <div className="profile__image"></div>
            <div className="profile__introduction"></div>
          </div>
          <div className="profile__video col-12 col-md-8">
            <header className="profil__video__title">
              <h2>Kami Siap Melayani Anda</h2>
            </header>
            <div className="profil__video__player">
              <video src=""></video>
            </div>
          </div>
        </section>

        <section className="motto">
          <header className="motto__title">
            <h3>Motto Pegawai Rupbasan Blitar</h3>
          </header>

          <div className="motto__list">
            <ol>
              <li className="motto__item">Bekerja tanpa diperintah</li>
              <li className="motto__item">Disiplin tanpa diawasi</li>
              <li className="motto__item">Tanggung jawab tanpa diminta</li>
            </ol>
          </div>

          <div className="motto__headline">
            <p>Bekerja Keras</p>
            <p>Bekerja Lebih Keras</p>
            <p>Bekerja Lebih Keras Lagi</p>
          </div>
        </section>

        <section className="artikel">
          <header className="artikel__title">
            <h3>Artikel</h3>
          </header>
        </section>

        <section className="twitter">
          <header className="twitter__title">
            <h3>Twitter</h3>
          </header>
        </section>
      </main>
    );
  }

  componentDidMount() {
    document.body.classList.add('page-home');
  }

  componentWillUnmount() {
    document.body.classList.remove('page-home');
  }
}
