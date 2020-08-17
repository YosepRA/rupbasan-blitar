import React, { Component } from 'react';
import { HTMLHead } from '../HTMLHead';

export class SyaratPengeluaranBenda extends Component {
  render() {
    return (
      <main className="main-container container">
        <HTMLHead
          title="Syarat Pengeluaran Benda Sitaan Negara dan Barang rampasan Negara
            Setelah Adanya Putusan Pengadilan | Rumah Penyimpanan Benda Sitaan Negara Kelas II Blitar"
        />

        <header className="page-title">
          <h1>
            Syarat Pengeluaran Benda Sitaan Negara dan Barang rampasan Negara
            Setelah Adanya Putusan Pengadilan
          </h1>
        </header>

        <section className="dasar-hukum">
          <p>
            Keputusan Direktur Jenderal Pemasyarakatan Kementerian Hukum dan HAM
            RI Nomor PAS-140.PK.02.01 Tahun 2015 tentang Petunjuk Pelaksanaan
            Pengelolaan Benda Sitaan dan Barang Rampasan Negara di Rumah
            Penyimpanan Benda Sitaan Negara.
          </p>
        </section>

        <section className="page-section prosedur-administrasi">
          <header className="section-title prosedur-administrasi__title">
            <h2>
              Prosedur Administrasi Pengeluaran Benda Sitaan Negara (Basan)
            </h2>
          </header>

          <div className="pengeluaran-bagian">
            <h3 className="subsection-title pengeluaran-bagian__title">
              Pengeluaran Basan dibagi menjadi dua:
            </h3>
            <ol className="pengeluaran-bagian__list">
              <li className="pengeluaran-bagian__list-item">
                Pengeluaran Basan sebelum adanya putusan pengadilan yang telah
                memperoleh kekuatan hukum tetap.
              </li>
              <li className="pengeluaran-bagian__list-item">
                Pengeluaran Basan dan/atau Baran sesudah adanya putusan
                pengadilan yang telah memperoleh kekuatan hukum tetap.
              </li>
            </ol>
            <div className="note">
              <p>
                <em>
                  Khusus Instansi Penyidik Pengeluaran yang dilakukan adalah
                  Pengeluaran Basan sebelum adanya putusan pengadilan yang telah
                  memperoleh kekuatan hukum tetap.
                </em>
              </p>
            </div>
          </div>

          <div className="jenis-pengeluaran">
            <h3 className="subsection-title jenis-pengeluaran__title">
              Jenis Pengeluaran Basan Sebelum Adanya Putusan Pengadilan:
            </h3>

            <ol className="jenis-pengeluaran__list">
              <li className="jenis-pengeluaran__list-item status-hukum">
                <h4 className="subsection-title">
                  Pengeluaran Basan berdasarkan status hukum diantaranya karena:
                </h4>

                <ul className="status-hukum__list">
                  <li className="status-hukum__list-item">
                    Kepentingan penyidik dan penuntut tidak memerlukan lagi.
                  </li>
                  <li className="status-hukum__list-item">
                    Perkara tersebut tidak jadi dituntut karena tidak cukup
                    bukti atau bukan merupakan tindak pidana.
                  </li>
                  <li className="status-hukum__list-item">
                    Perkara tersebut dikesampingkan untuk kepentingan umum atau
                    ditutup demi hukum.
                  </li>
                </ul>
              </li>

              <li className="jenis-pengeluaran__list-item kondisi-basan">
                <h4 className="subsection-title">
                  Pengeluaran Basan berdasarkan kondisi basan, yang disebabkan
                  karena:
                </h4>

                <ul className="kondisi-basan__list">
                  <li className="kondisi-basan__list-item">
                    Basan yang dapat lekas rusak.
                  </li>
                  <li className="kondisi-basan__list-item">
                    Basan yang membahayakan.
                  </li>
                  <li className="kondisi-basan__list-item">
                    Basan memerlukan biaya penyimpanan yang tinggi.
                  </li>
                </ul>
              </li>
            </ol>
          </div>
        </section>

        <section className="page-section persyaratan">
          <header className="section-title">
            <h2>Persyaratan Kelengkapan Administrasi Pengeluaran Basan</h2>
          </header>

          <ol className="persyaratan__list">
            <li className="persyaratan__list-item status-hukum">
              <h4 className="subsection-title">
                Syarat pengeluaran berdasarkan status hukum:
              </h4>

              <ul className="status-hukum__list">
                <li className="status-hukum__list-item">
                  Surat Penetapan dari pengadilan.
                </li>
                <li className="status-hukum__list-item">
                  Surat Pengeluaran Basan dari Instansi secara yuridis.
                </li>
                <li className="status-hukum__list-item">
                  Surat tugas dari Instansi yuridis.
                </li>
                <li className="status-hukum__list-item">
                  Daftar Basan yang akan dikeluarkan.
                </li>
                <li className="status-hukum__list-item">
                  Tiga orang personil dari instansi yang mengambil untuk
                  tandatangan berita acara pengeluaran Basan yaitu 1 (satu)
                  orang untuk serah terima dan 2 (dua) orang sebagai saksi.
                </li>
              </ul>
            </li>

            <li className="persyaratan__list-item kondisi-basan">
              <h4 className="subsection-title">
                Syarat Pengeluaran berdasarkan kondisi basan:
              </h4>

              <ul className="kondisi-basan__list">
                <li className="kondisi-basan__list-item">
                  Berita Acara hasil penelitian tim peneliti.
                </li>
                <li className="kondisi-basan__list-item">
                  Surat rekomendasi Kepala Rupbasan kepada instansi yuridis
                  untuk pelelangan.
                </li>
                <li className="kondisi-basan__list-item">
                  Surat Penetapan dari Pengadilan.
                </li>
                <li className="kondisi-basan__list-item">
                  Surat Pengeluaran Basan dari instansi yuridis; Surat Tugas
                  dari instansi yuridis.
                </li>
                <li className="kondisi-basan__list-item">
                  Surat Tugas dari instansi yuridis.
                </li>
                <li className="kondisi-basan__list-item">
                  Tiga orang personil dari instansi yang mengambil untuk
                  tandatangan berita acara pengeluaran Basan yaitu 1 (satu)
                  orang untuk serah terima dan 2 (dua) orang sebagai saksi.
                </li>
              </ul>
            </li>
          </ol>
        </section>

        <p>
          <strong>
            Pengeluaran Basan dan/atau Baran Setelah Adanya Putusan Pengadilan
            Yang Telah Memperoleh Kekuatan Hukum Tetap{' '}
            <em>(In Kracht Van Gewijsde)</em>.
          </strong>
        </p>

        <section className="page-section macam-pengeluaran">
          <header className="section-title">
            <h2>
              Macam–Macam Pengeluaran Basan dan / atau Baran sesudah adanya
              Putusan Pengadilan:
            </h2>
          </header>

          <ol className="macam-pengeluaran__list">
            <li className="macam-pengeluaran__list-item">
              Dikembalikan kepada yang berhak.
            </li>
            <li className="macam-pengeluaran__list-item">
              Dirampas untuk Negara (dilelang, dimusnahkan, dihibahkan kepada
              instansi yang membutuhkan untuk dimanfaatkan).
            </li>
          </ol>
        </section>

        <section className="page-section persyaratan-pengeluaran">
          <header className="section-title">
            <h2>
              Persyaratan Pengeluaran baik yang dikembalikan kepada yang berhak
              atau dirampas untuk negara:
            </h2>
          </header>

          <ol className="persyaratan-pengeluaran__list">
            <li className="persyaratan-pengeluaran__list-item">
              Salinan Putusan Pengadilan.
            </li>
            <li className="persyaratan-pengeluaran__list-item">
              Surat Perintah Pelaksanaan Putusan Pengadilan.
            </li>
            <li className="persyaratan-pengeluaran__list-item">
              Berita Acara Pelaksanaan Putusan Pengadilan.
            </li>
            <li className="persyaratan-pengeluaran__list-item">
              Surat Tugas dari instansi yang bertanggung jawab secara yuridis.
            </li>
            <li className="persyaratan-pengeluaran__list-item">
              Tiga orang personil dari instansi yang mengambil untuk tandatangan
              berita acara pengeluaran Basan yaitu 1 (satu) orang untuk serah
              terima dan 2 (dua) orang sebagai saksi.
            </li>
          </ol>
        </section>

        <div className="note">
          <p>
            <em>
              Catatan : mengenai contoh Lampiran bisa menghubungi langsung pihak
              Rupbasan Kelas II Blitar.
            </em>
          </p>
        </div>
      </main>
    );
  }

  componentDidMount() {
    document.body.classList.add('page-syarat-pengeluaran');
  }

  componentWillUnmount() {
    document.body.classList.remove('page-syarat-pengeluaran');
  }
}
