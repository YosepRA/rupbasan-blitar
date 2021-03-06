/* eslint-disable react/display-name */
import React, { Component } from 'react';
import Slider from 'react-slick';
import { connectorWrapper } from './data/connectorWrapper';
import { HTMLHead } from './HTMLHead';
import { Search } from './Search';
import bos from '../assets/bos.png';
import videoProfil from '../assets/video_profil.mp4';

export const Home = connectorWrapper(
  class extends Component {
    render() {
      let slickConfig = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
      };

      return (
        <main className="main-container">
          <HTMLHead title="Rumah Penyimpanan Benda Sitaan Negara Kelas II Blitar" />

          <section className="home-search container-fluid">
            <Slider {...slickConfig} className="home-search__slider">
              <div className="home-search__slider-item home-search__slider-item--front-02"></div>
              <div className="home-search__slider-item home-search__slider-item--front-03"></div>
              <div className="home-search__slider-item home-search__slider-item--front"></div>
              <div className="home-search__slider-item home-search__slider-item--pegawai"></div>
              <div className="home-search__slider-item home-search__slider-item--alun-blitar"></div>
              <div className="home-search__slider-item home-search__slider-item--bung-karno"></div>
              <div className="home-search__slider-item home-search__slider-item--gong"></div>
            </Slider>

            <div className="home-search__search">
              <header className="home-search__title">
                <h1>Cari Barangmu Disini</h1>
              </header>

              <Search {...this.props} />
            </div>
          </section>

          <section className="profile container">
            <div className="row justify-content-center">
              <div className="profile__atasan col-12 col-md-4 col-lg-3">
                <div className="row justify-content-center">
                  <div className="profile__welcome col-8 col-md-12">
                    <h3>Selamat Datang</h3>
                  </div>
                  <div className="profile__image col-8 col-md-12">
                    <img src={bos} alt="Pimpinan Rupbasan Blitar" />
                  </div>
                  <div className="profile__introduction col-8 col-md-12">
                    <div className="profile__introduction__intro">
                      <p>
                        Selamat datang di website Rumah Penyimpanan Benda Sitaan
                        Negara Kelas II Blitar
                      </p>
                    </div>
                    <div className="profile__introduction__identity">
                      <p className="profile__introduction__title">
                        Kepala Rupbasan Blitar
                      </p>
                      <p className="profile__introduction__name">
                        Soedarto, SH.,MH.
                      </p>
                      <p className="profile__introduction__nip">
                        NIP. 196805311990031002
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="profile__video col-12 col-md-8 col-lg-9 col-xl-8">
                <header className="profile__video__title">
                  <h2>Kami Siap Melayani Anda</h2>
                </header>
                <div className="profile__video__player">
                  <video controls>
                    <source src={videoProfil} type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </section>

          <section className="motto container">
            <div className="row justify-content-center">
              <div className="motto__wrapper col-12 col-md-8 col-lg-6">
                <header className="motto__title">
                  <h3>Motto Pegawai Rupbasan Blitar</h3>
                </header>

                <div className="motto__list">
                  <ol>
                    <li className="motto__item">Bekerja tanpa diperintah</li>
                    <li className="motto__item">Disiplin tanpa diawasi</li>
                    <li className="motto__item">
                      Tanggung jawab tanpa diminta
                    </li>
                  </ol>
                </div>

                <div className="motto__headline">
                  <p>Bekerja Keras</p>
                  <p>Bekerja Lebih Keras</p>
                  <p>Bekerja Lebih Keras Lagi</p>
                </div>
              </div>
            </div>
          </section>

          <section className="social-media twitter container">
            <header className="social-media__title twitter__title">
              <h3>
                Twitter{' '}
                <span className="social-media__username">
                  (@RupbasanBlitar)
                </span>
              </h3>
            </header>

            <div className="social-media__feed twitter__feed">
              <iframe
                src="https://snapwidget.com/embed/862848"
                className="social-media__snapwidget twitter__snapwidget snapwidget-widget"
                title="Twitter Rupbasan Blitar"
                allowtransparency="true"
                frameBorder="0"
                scrolling="no"
                style={{
                  border: 'none',
                }}
              ></iframe>
            </div>
          </section>

          <section className="social-media instagram container">
            <header className="social-media__title instagram__title">
              <h3>
                Instagram{' '}
                <span className="social-media__username">
                  (@rupbasan_blitar)
                </span>
              </h3>
            </header>

            <div className="social-media__feed instagram__feed">
              <iframe
                src="https://snapwidget.com/embed/867355"
                className="social-media__snapwidget instagram__snapwidget snapwidget-widget"
                title="Instagram Rupbasan Blitar"
                allowtransparency="true"
                frameBorder="0"
                scrolling="no"
                style={{
                  border: 'none',
                }}
              ></iframe>
            </div>
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
);
