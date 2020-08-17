/* eslint-disable react/display-name */
import React, { Component } from 'react';
import { connectorWrapper } from './data/connectorWrapper';
import { HTMLHead } from './HTMLHead';
import { Search } from './Search';
import bos from '../assets/bos.png';
import videoProfil from '../assets/video_profil.mp4';

export const Home = connectorWrapper(
  class extends Component {
    render() {
      return (
        <main className="main-container">
          <HTMLHead title="Rumah Penyimpanan Benda Sitaan Negara Kelas II Blitar" />

          <section className="home-search container-fluid">
            <header className="home-search__title">
              <h1>Cari Barangmu Disini</h1>
            </header>

            <Search {...this.props} />
          </section>

          <section className="profile container">
            <div className="row justify-content-center">
              <div className="profile__atasan col-12 col-md-4 col-lg-3">
                <div className="row justify-content-center">
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
                      Soedarto, SH.,MH.
                    </p>
                    <p className="profile__introduction__nip">
                      NIP. 196805311990031002
                    </p>
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

          <section className="twitter container">
            <header className="twitter__title">
              <h3>Twitter @RupbasanBlitar</h3>
            </header>

            <div className="twitter__feed">
              <iframe
                src="https://snapwidget.com/embed/862848"
                className="twitter__snapwidget snapwidget-widget"
                title="Twitter Rupbasan Blitar"
                allowtransparency="true"
                frameBorder="0"
                scrolling="no"
                style={{
                  border: 'none',
                  // width: '540px',
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

// export class Home extends Component {
//   render() {
//     return (
//       <main className="main-container">
//         <HTMLHead title="Rumah Penyimpanan Benda Sitaan Negara Kelas II Blitar" />

//         <section className="home-search container-fluid">
//           <header className="home-search__title">
//             <h1>Cari Barangmu Disini</h1>
//           </header>

//           <Search {...this.props} />
//         </section>

//         <section className="profile container">
//           <div className="row justify-content-center">
//             <div className="profile__atasan col-12 col-md-4 col-lg-3">
//               <div className="row justify-content-center">
//                 <div className="profile__image col-8 col-md-12">
//                   <img src={bos} alt="Pimpinan Rupbasan Blitar" />
//                 </div>
//                 <div className="profile__introduction col-8 col-md-12">
//                   <p className="profile__introduction__intro">
//                     Selamat datang di website Rumah Penyimpanan Benda Sitaan
//                     Negara Kelas II Blitar
//                   </p>
//                   <p className="profile__introduction__title">
//                     Kepala Rupbasan Blitar
//                   </p>
//                   <p className="profile__introduction__name">
//                     Soedarto, SH.,MH.
//                   </p>
//                   <p className="profile__introduction__nip">
//                     NIP. 196805311990031002
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className="profile__video col-12 col-md-8 col-lg-9 col-xl-8">
//               <header className="profile__video__title">
//                 <h2>Kami Siap Melayani Anda</h2>
//               </header>
//               <div className="profile__video__player">
//                 <video controls>
//                   <source src={videoProfil} type="video/mp4" />
//                 </video>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section className="motto container">
//           <div className="row justify-content-center">
//             <div className="motto__wrapper col-12 col-md-8 col-lg-6">
//               <header className="motto__title">
//                 <h3>Motto Pegawai Rupbasan Blitar</h3>
//               </header>

//               <div className="motto__list">
//                 <ol>
//                   <li className="motto__item">Bekerja tanpa diperintah</li>
//                   <li className="motto__item">Disiplin tanpa diawasi</li>
//                   <li className="motto__item">Tanggung jawab tanpa diminta</li>
//                 </ol>
//               </div>

//               <div className="motto__headline">
//                 <p>Bekerja Keras</p>
//                 <p>Bekerja Lebih Keras</p>
//                 <p>Bekerja Lebih Keras Lagi</p>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section className="twitter container">
//           <header className="twitter__title">
//             <h3>Twitter @RupbasanBlitar</h3>
//           </header>

//           <div className="twitter__feed">
//             <iframe
//               src="https://snapwidget.com/embed/862848"
//               className="twitter__snapwidget snapwidget-widget"
//               allowtransparency="true"
//               frameBorder="0"
//               scrolling="no"
//               style={{
//                 border: 'none',
//                 // width: '540px',
//               }}
//             ></iframe>
//           </div>
//         </section>
//       </main>
//     );
//   }

//   componentDidMount() {
//     document.body.classList.add('page-home');
//   }

//   componentWillUnmount() {
//     document.body.classList.remove('page-home');
//   }
// }
