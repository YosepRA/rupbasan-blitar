import React, { Component } from 'react';
import { ToggleLink } from './ToggleLink';

export class Footer extends Component {
  render() {
    return (
      <footer className="page-footer">
        <div className="container">
          <div className="left">
            <nav className="left__nav footer-nav">
              <ToggleLink to="/" exact={true} className="footer-nav__link">
                Beranda
              </ToggleLink>
              <ToggleLink
                to="/barang"
                className="footer-nav__link footer-nav__link--barang"
              >
                Cari barang
              </ToggleLink>
              <ToggleLink
                to="/admin"
                className="footer-nav__link footer-nav__link--admin"
              >
                Admin
              </ToggleLink>
            </nav>

            <div className="left__copyright">
              <p>
                Copyright &copy; 2020 Rumah Penyimpanan Benda Sitaan Negara
                Kelas II Blitar
              </p>
            </div>
          </div>

          <div className="right">
            <div className="right__contact contact">
              <header className="contact__heade section-header">
                <h3>Hubungi Kami</h3>
              </header>

              <div className="contact__info info-block">
                <div className="contact__info__phone info">
                  <span className="contact__info__logo info__logo">
                    <i className="fas fa-phone"></i>
                  </span>
                  <span className="contact__info__text info__text">
                    (0342) 802048
                  </span>
                </div>
                <div className="contact__info__email info">
                  <span className="contact__info__logo info__logo">
                    <i className="fas fa-envelope"></i>
                  </span>
                  <span className="contact__info__text info__text">
                    rupbasan.blitar@yahoo.com
                  </span>
                </div>
                <div className="contact__info__address info">
                  <span className="contact__info__logo info__logo">
                    <i className="fas fa-map-marker-alt"></i>
                  </span>
                  <span className="contact__info__text info__text">
                    Jalan Sumatera Nomor 187 Kota Blitar
                  </span>
                </div>
              </div>
            </div>

            <div className="right__social-media social-media">
              <header className="social-media__header section-header">
                <h3>Ikuti Kami</h3>
              </header>

              <div className="social-media__info info-block">
                <div className="social-media__info__facebook info">
                  <span className="social-media__info__logo info__logo">
                    <i className="fab fa-facebook"></i>
                  </span>
                  <span className="social-media__info__text info__text">
                    rupbasan.blitar@yahoo.com
                  </span>
                </div>
                <div className="social-media__info__instagram info">
                  <span className="social-media__info__logo info__logo">
                    <i className="fab fa-instagram"></i>
                  </span>
                  <span className="social-media__info__text info__text">
                    @rupbasan_blitar
                  </span>
                </div>
                <div className="social-media__info__twitter info">
                  <span className="social-media__info__logo info__logo">
                    <i className="fab fa-twitter"></i>
                  </span>
                  <span className="social-media__info__text info__text">
                    @RupbasanBlitar
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
