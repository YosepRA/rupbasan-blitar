import React, { Component } from 'react';
import { HTMLHead } from '../HTMLHead';

export class ProsedurAdministrasiMutasi extends Component {
  render() {
    return (
      <main className="main-container container">
        <HTMLHead title="Prosedur Administrasi Mutasi Benda Sitaan Negara (BASAN) | Rumah Penyimpanan Benda Sitaan Negara Kelas II Blitar" />

        <header className="page-title">
          <h1>Prosedur Administrasi Mutasi Benda Sitaan Negara (BASAN)</h1>
        </header>

        <section className="kamus">
          <p>
            <em>
              Kamus Lengkap Bahasa Indonesia (Marjihanto, Drs. Bambang – 1993 :
              205)
            </em>
          </p>
          <p>&quot;Mutasi berarti pergantian dan perubahan.&quot;</p>
          <p>
            <em>
              Kamus Lengkap Inggris-Indonesia, Indonesia-Inggris (Wojowasito S.,
              Drs., Prof., dan Poerwadarmita, W.J.S., – 1978 – 121,191)
            </em>{' '}
            – &quot;Mutasi disebut dengan &quot;mutation&quot; yang berarti
            pergantian dan pemindahan.&quot;
          </p>
          <p>
            <em>
              Petunjuk Pelaksanaan Pengelolaan Benda Sitaan dan Barang Rampasan
              Negara Nomor : E1.35.PK.03.10 Tahun 2002
            </em>{' '}
            – &quot;Pemutasian adalah kegiatan pemindahan Basan dan Baran secara
            administratif maupun fisik untuk kepentingan proses peradilan sesuai
            tingkat pemeriksaan perkara.&quot;
          </p>
        </section>

        <section className="prosedur">
          <h3 className="subsection-title">
            Prosedur Administrasi Mutasi Benda Sitaan Negara ( Basan )
          </h3>

          <div className="macam-mutasi">
            <header className="section-title">
              <h2>Macam – Macam Mutasi yaitu:</h2>
            </header>

            <ol className="macam-mutasi__list">
              <li className="macam-mutasi__list-item">
                Mutasi Basan dari tingkat Penyidik ke Penuntut.
              </li>
              <li className="macam-mutasi__list-item">
                Mutasi Basan dari tingkat Penuntut ke tingkat Pengadilan Negeri.
              </li>
              <li className="macam-mutasi__list-item">
                Mutasi Basan dari tingkat Pengadilan Negeri ke Pengadilan
                Tinggi.
              </li>
              <li className="macam-mutasi__list-item">
                Mutasi Basan dari tingkat Pengadilan Tinggi ke Mahkamah Agung.
              </li>
              <li className="macam-mutasi__list-item">
                Mutasi Basan menjadi Baran.
              </li>
            </ol>
          </div>

          <div className="persyaratan-mutasi">
            <header className="section-title">
              <h2>Persyaratan Mutasi:</h2>
            </header>

            <ol className="persyaratan-mutasi__list">
              <li className="persyaratan-mutasi__list-item">
                Surat Pelimpahan perkara sesuai tingkat penuntutan dan
                pemeriksaan di sidang pengadilan.
              </li>
              <li className="persyaratan-mutasi__list-item">
                Berita Acara pelimpahan perkara.
              </li>
              <li className="persyaratan-mutasi__list-item">
                Tiga (3) orang personil dari pihak yang dilimpahkan mutasi untuk
                tandatangan berita acara serah terima mutasi Basan yaitu : 1
                (satu) orang untuk serah terima dan 2 (dua) orang untuk saksi.
              </li>
            </ol>
          </div>

          <div className="prosedur-administrasi">
            <header className="section-title">
              <h2>
                Prosedur Administrasi Penggunaan Basan untuk proses Peradilan
              </h2>
            </header>

            <p>
              Basan yang disimpan di Rupbasan dapat digunakan oleh instansi yang
              bertanggung jawab secara yuridis untuk kepentingan penyidiik,
              penuntutan, atau pemeriksaan di sidang pengadilan.
            </p>

            <div className="syarat-penggunaan-basan">
              <h3 className="subsection-title">
                Persyaratan penggunaan basan dalam proses peradilan:
              </h3>

              <ol className="syarat-penggunaan-basan__list">
                <li className="syarat-penggunaan-basan__list-item">
                  Surat izin penggunaan Basan dari pengadilan setempat.
                </li>
                <li className="syarat-penggunaan-basan__list-item">
                  Surat permintaan penggunaan Basan dari instansi yang
                  bertanggung jawab secara yuridis dengan melampirkan daftar
                  basan yang akan digunakan.
                </li>
                <li className="syarat-penggunaan-basan__list-item">
                  Surat Penugasan dari instansi yang bertanggung jawab secara
                  yuridis.
                </li>
                <li className="syarat-penggunaan-basan__list-item">
                  Tiga orang personil dari instansi pengguna basan untuk
                  tandatangan berita acara pengeluaran Basan yaitu 1 (satu)
                  orang untuk serah terima dan 2 (dua) orang untuk saksi.
                </li>
              </ol>
            </div>

            <div className="batas-waktu">
              <h3 className="subsection-title">
                Batas waktu Penggunaan Basan untuk keperluan Proses Peradilan
              </h3>

              <p>
                Penggunaan Basan oleh instansi yang bertanggung jawab secara
                yuridis diberikan untuk jangka waktu paling lama 2 x 24 jam (dua
                kali dua puluh empat jam).
              </p>
            </div>

            <div className="pengembalian-basan">
              <h3 className="subsection-title">
                Pengembalian basan dari penggunaan proses peradilan
              </h3>

              <p>
                Basan yang telah digunakan oleh instansi yang bertanggung jawab
                secara yuridis untuk keperluan proses peradilan yang
                dikembalikan ke Rupbasan maka dilakukan proses penerimaan
                kembali Basan sebagaimana proses penerimaan Basan.
              </p>
            </div>

            <div className="note">
              <p>
                <em>
                  Catatan : mengenai contoh Lampiran bisa menghubungi langsung
                  pihak Rupbasan Kelas II Blitar.
                </em>
              </p>
            </div>
          </div>
        </section>
      </main>
    );
  }

  componentDidMount() {
    document.body.classList.add('page-prosedur-administrasi');
  }

  componentWillUnmount() {
    document.body.classList.remove('page-prosedur-administrasi');
  }
}
