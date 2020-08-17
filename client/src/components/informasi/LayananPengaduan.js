import React, { Component } from 'react';
import { HTMLHead } from '../HTMLHead';
import laporLogo from '../../assets/lapor.jpg';

export class LayananPengaduan extends Component {
  render() {
    return (
      <main className="main-container container">
        <HTMLHead title="Layanan Pengaduan | Rumah Penyimpanan Benda Sitaan Negara Kelas II Blitar" />
        <header className="page-title">
          <h1>Layanan Pengaduan</h1>
        </header>

        <section className="banner">
          <header className="banner__title">
            <h2>
              Anda melihat{' '}
              <span className="banner__emphasize">penyimpangan?</span>
            </h2>
          </header>

          <div className="banner__requirements">
            <p>Laporkan dengan disertai oleh:</p>
            <ul className="banner__requirements-list">
              <li className="banner__requirements-list__item">
                Identitas resmi
              </li>
              <li className="banner__requirements-list__item">
                Bukti penyimpangan
              </li>
            </ul>
          </div>

          <div className="banner__notice">
            <p>
              Identitas pelapor kami{' '}
              <span className="banner__emphasize">lindungi.</span>
            </p>
          </div>
        </section>

        <section className="contact row">
          <div className="contact__section contact__inspektorat col-md-6">
            <header className="contact__title">
              <h3>Inspektorat Jenderal Kementrian Hukum dan HAM RI</h3>
            </header>
            <div className="contact__info">
              <div className="contact__phone">
                <i className="fas fa-phone"></i>
                08111377803
              </div>
              <div className="contact__email">
                <i className="fas fa-envelope"></i>
                itjen@kemenkumham.go.id
              </div>
            </div>
          </div>

          <div className="contact__section contact__lapor col-md-6">
            <header className="contact__title">
              <h3>lapor.go.id</h3>
            </header>
            <div className="contact__info">
              <div className="contact__link">
                <a href="https://lapor.go.id">
                  <img src={laporLogo} alt="Lapor.go.id logo" />
                </a>
              </div>
            </div>
          </div>

          <div className="contact__section contact__kanwil-jatim col-md-6">
            <header className="contact__title">
              <h3>Pengaduan Kanwil Kemenkumham Jawa Timur</h3>
            </header>
            <div className="contact__info">
              <div className="contact__phone">
                <i className="fas fa-phone"></i>
                081392777389
              </div>
            </div>
          </div>

          <div className="contact__section contact__pemasyarakatan-jatim col-md-6">
            <header className="contact__title">
              <h3>Pengaduan Divisi Pemasyarakatan Jawa Timur</h3>
            </header>
            <div className="contact__info">
              <div className="contact__phone">
                <i className="fas fa-phone"></i>
                08123482100
              </div>
            </div>
          </div>

          <div className="contact__section contact__rupbasan-blitar col-md-6">
            <header className="contact__title">
              <h3>Layanan Pengaduan Rupbasan Blitar</h3>
            </header>
            <div className="contact__info">
              <div className="contact__phone">
                <i className="fas fa-phone"></i>
                082132465812
              </div>
              <div className="contact__email">
                <i className="fas fa-envelope"></i>
                rupbasan.blitar@yahoo.com
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  componentDidMount() {
    document.body.classList.add('page-layanan-pengaduan');
  }

  componentWillUnmount() {
    document.body.classList.remove('page-layanan-pengaduan');
  }
}
