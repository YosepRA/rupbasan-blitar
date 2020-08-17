import React, { Component } from 'react';
import { HTMLHead } from '../HTMLHead';

export class SyaratPenerimaanBenda extends Component {
  render() {
    return (
      <main className="main-container container">
        <HTMLHead title="Syarat Penerimaan Benda Sitaan dan Barang Rampasan Negara | Rumah Penyimpanan Benda Sitaan Negara Kelas II Blitar" />

        <header className="page-title">
          <h1>Syarat Penerimaan Benda Sitaan dan Barang Rampasan Negara</h1>
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
              Prosedur Administrasi Penitipan Benda Sitaan Negara ( Basan )
            </h2>
          </header>

          <div className="proses-bagian">
            <h3 className="subsection-title proses-bagian__title">
              Proses Penerimaan Benda Sitaan (Basan) pada Rupbasan di bagi
              menjadi 2 yaitu :
            </h3>
            <ol className="proses-bagian__list">
              <li>Penerimaan Basan di dalam Rupbasan.</li>
              <li>Penerimaan Basan di luar Rupbasan.</li>
            </ol>
          </div>

          <div className="proses-tahapan">
            <h3 className="subsection-title proses-tahapan__title">
              Proses Penerimaan Basan dilakukan dengan tahapan sebagai berikut :
            </h3>
            <ul className="proses-tahapan__list">
              <li className="proses-tahapan__list-item">Pemeriksaan berkas.</li>
              <li className="proses-tahapan__list-item">
                Penelitian / Identifikasi.
              </li>
              <li className="proses-tahapan__list-item">Penilaian.</li>
              <li className="proses-tahapan__list-item">Pendokumentasian.</li>
              <li className="proses-tahapan__list-item">Serah terima Basan.</li>
            </ul>
          </div>
        </section>

        <section className="page-section persyaratan">
          <header className="section-title">
            <h2>Persyaratan Penitipan Benda Sitaan Negara (Basan) yaitu :</h2>
          </header>

          <ol className="persyaratan__list">
            <li className="persyaratan__list-item">Surat Pengantar.</li>
            <li className="persyaratan__list-item">
              Data Basan yang diserahkan.
            </li>
            <li className="persyaratan__list-item">
              Surat izin penyitaan dari pengadilan.
            </li>
            <li className="persyaratan__list-item">Berita Acara penyitaan.</li>
            <li className="persyaratan__list-item">
              Surat Perintah penyerahan basan dari instansi penuntut.
            </li>
            <li className="persyaratan__list-item">
              Surat Pelimpahan perkara dari penyidik ke penuntut{' '}
              <em>(syarat khusus : Penitipan Basan Instansi Penuntut).</em>
            </li>
            <li className="persyaratan__list-item">
              Tiga (3) orang personil dari pihak yang menyerahkan untuk
              menandatangani berita acara serah terima yaitu 1 (satu) orang
              untuk serah terima dan 2 (dua) orang sebagai saksi.
            </li>
          </ol>
        </section>

        <section className="page-section basan-rusak">
          <header className="basan-rusak__title section-title">
            <h2>
              Basan yang dinyatakan cepat rusak, berbahaya dan/atau menimbulkan
              biaya tinggi
            </h2>
          </header>

          <p>
            Dalam hal penerimaan basan yang dinyatakan cepat rusak, berbahaya,
            dan/atau menimbulkan biaya tinggi, Kepala Rupbasan dapat
            merekomendasikan kepada instansi yang bertanggung jawab secara
            yuridis untuk melelang atau memusnahkan sesuai dengan ketentuan
            peraturan perundang-undangan yaitu UU RI No. 8 Tahun 1981 tentang
            KUHAP pasal 45.
          </p>
        </section>
      </main>
    );
  }

  componentDidMount() {
    document.body.classList.add('page-syarat-penerimaan');
  }

  componentWillUnmount() {
    document.body.classList.remove('page-syarat-penerimaan');
  }
}
