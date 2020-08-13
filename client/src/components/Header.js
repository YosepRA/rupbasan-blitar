import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-01.svg';
import { ToggleLink } from './ToggleLink';
import { Dropdown } from './Dropdown';
import { DataTypes } from './data/Types';
import { Urls } from './data/Urls';

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
    };
  }

  toggleMenu = isMenuOpen => this.setState({ isMenuOpen });

  closeOnSwitchPage = ({ target: { tagName } }) => {
    if (tagName === 'A') {
      this.setState({ isMenuOpen: false });
    }
  };

  getMenuClasses() {
    return !this.state.isMenuOpen ? 'main-nav__menu hide' : 'main-nav__menu';
  }

  render() {
    return (
      <header className="page-header">
        <nav className="main-nav container">
          <div className="main-nav__logo">
            <Link to="/">
              <img src={logo} alt="Logo Rupbasan Blitar" />
            </Link>
          </div>

          <div
            className={this.getMenuClasses()}
            onClick={this.closeOnSwitchPage}
          >
            <header className="main-nav__menu-header">
              <div className="main-nav__menu-logo">
                <img src={logo} alt="Logo Rupbasan Blitar" />
              </div>

              <div className="main-nav__menu-close">
                <button onClick={() => this.toggleMenu(false)}>
                  <span className="btn-line"></span>
                  <span className="btn-line"></span>
                </button>
              </div>
            </header>

            <div className="main-nav__menu-contact">
              <div className="contact contact__phone">
                <i className="fas fa-phone"></i> (0342) 802048
              </div>
              <div className="contact contact__email">
                <i className="far fa-envelope"></i> rupbasan.blitar@yahoo.com
              </div>
            </div>

            <div className="main-nav__menu-list">
              <ToggleLink to="/" exact={true}>
                Beranda
              </ToggleLink>
              <ToggleLink to="/barang" className="main-nav__menu-link--barang">
                <i className="fas fa-search"></i> Cari Barang
              </ToggleLink>
              <Dropdown
                list={this.props.instansi && this.props.instansi.keys}
                controlLabel="Instansi Penitip"
                baseUrl="/barang"
              />
              <Dropdown
                list={[
                  {
                    name: 'Struktur Organisasi',
                    slug: `${Urls[`${DataTypes.PROFIL}_STRUKTUR_ORGANISASI`]}`,
                  },
                  {
                    name: 'Sejarah Rupbasan',
                    slug: `${Urls[`${DataTypes.PROFIL}_SEJARAH_RUPBASAN`]}`,
                  },
                  {
                    name: 'Tugas Pokok dan Fungsi',
                    slug: `${
                      Urls[`${DataTypes.PROFIL}_TUGAS_POKOK_DAN_FUNGSI`]
                    }`,
                  },
                  {
                    name: 'Dasar Hukum',
                    slug: `${Urls[`${DataTypes.PROFIL}_DASAR_HUKUM`]}`,
                  },
                  {
                    name: 'Standar Operasi Prosedur (SOP)',
                    slug: `${Urls[`${DataTypes.PROFIL}_SOP`]}`,
                  },
                ]}
                controlLabel="Profil"
                baseUrl="/profil"
              />
              <Dropdown
                list={[
                  {
                    name:
                      'Syarat Penerimaan Benda Sitaan dan Barang Rampasan Negara',
                    slug: `${
                      Urls[`${DataTypes.INFORMASI}_SYARAT_PENERIMAAN_BENDA`]
                    }`,
                  },
                  {
                    name:
                      'Prosedur Administrasi Mutasi Benda Sitaan Negara (Basan)',
                    slug: `${
                      Urls[
                        `${DataTypes.INFORMASI}_PROSEDUR_ADMINISTRASI_MUTASI`
                      ]
                    }`,
                  },
                  {
                    name:
                      'Syarat Pengeluaran Benda Sitaan Negara dan Barang Rampasan Negara Setalah Adanya Putusan Pengadilan',
                    slug: `${
                      Urls[`${DataTypes.INFORMASI}_SYARAT_PENGELUARAN_BENDA`]
                    }`,
                  },
                  {
                    name: 'Layanan Pengaduan',
                    slug: `${Urls[`${DataTypes.INFORMASI}_LAYANAN_PENGADUAN`]}`,
                  },
                ]}
                controlLabel="Informasi"
                baseUrl="/informasi"
              />
              <ToggleLink to="/artikel">Artikel</ToggleLink>
              <ToggleLink
                to="/admin"
                className="main-nav__menu-link--login btn"
              >
                Admin
              </ToggleLink>
            </div>
          </div>

          <div
            className="main-nav__overlay"
            onClick={() => this.toggleMenu(false)}
          ></div>

          <div className="main-nav__collapse-button">
            <button onClick={() => this.toggleMenu(true)}>
              <span className="btn-line"></span>
              <span className="btn-line"></span>
              <span className="btn-line"></span>
            </button>
          </div>
        </nav>
      </header>
    );
  }

  componentDidMount() {
    this.props.getFilters();
  }
}
