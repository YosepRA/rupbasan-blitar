import React, { Component } from 'react';
import { HTMLHead } from './HTMLHead';
import { Search } from './Search';
import bos from '../assets/bos.png';
import videoProfil from '../assets/video_profil.mp4';

export class Home extends Component {
  render() {
    return (
      <main className="main-container">
        <HTMLHead title="Rumah Penyimpanan Benda Sitaan Negara Kelas II Blitar" />

        <section className="home-search container-fluid">
          <Search />
        </section>

        <section className="profile container">
          <div className="row">
            <div className="profile__atasan col-12 col-md-4">
              <div className="row">
                <div className="profile__image col-8 col-md-12">
                  <img src={bos} alt="Pimpinan Rupbasan Blitar" />
                </div>
                <div className="profile__introduction col-8 col-md-12">
                  <p className="profile__introduction__intro">
                    Selamat datang di website Rumah Penyimpanan Benda Sitaan
                    Negara Kelas II Blitar
                  </p>
                  <p className="profile__introduction__title">
                    Kepala Rupbasan Blitar
                  </p>
                  <p className="profile__introduction__name">
                    SOEDARTO, SH.,MH.
                  </p>
                  <p className="profile__introduction__nip">
                    NIP. 196805311990031002
                  </p>
                </div>
              </div>
            </div>
            <div className="profile__video col-12 col-md-8">
              <header className="profil__video__title">
                <h2>Kami Siap Melayani Anda</h2>
              </header>
              <div className="profil__video__player">
                <video controls>
                  <source src={videoProfil} type="video/mp4" />
                </video>
              </div>
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
