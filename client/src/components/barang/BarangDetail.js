import React, { Component } from 'react';
import { HTMLHead } from '../HTMLHead';
import Slider from 'react-slick';
import { GambarCarousel } from './GambarCarousel';
import { BarangDataRow } from './BarangDataRow';

export class BarangDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gambarUtama: null,
      carousel: null,
    };
  }

  getGambar(className) {
    const { nama, gambar } = this.props.barang;
    return gambar.map(({ url }) => (
      <GambarCarousel key={nama} className={className} url={url} nama={nama} />
    ));
  }

  getBarangData() {
    const { barangDetail } = this.props;
    let excluded = ['_id', 'nama', '__v', 'gambar'];
    return Object.keys(barangDetail).map(
      fieldName =>
        !excluded.includes(fieldName) && (
          <BarangDataRow
            key={fieldName}
            data={{ fieldName, value: barangDetail[fieldName] }}
          />
        )
    );
  }

  render() {
    let gambarUtamaOptions = {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: this.carousel,
    };
    let carouselOptions = {
      slidesToShow: 3,
      slidesToScroll: 3,
      asNavFor: this.gambarUtama,
    };

    return (
      <main className="main-container container">
        <HTMLHead
          title={`${
            this.props.barangDetail ? this.props.barangDetail.nama : ''
          } | Rumah Penyimpanan Benda Sitaan Negara Kelas II Blitar"`}
        />
        <header className="page-title">
          <h1>{this.props.barangDetail ? this.props.barangDetail.nama : ''}</h1>
        </header>

        <div className="row justify-content-center">
          <section className="gambar col-12 col-lg-5">
            <Slider
              ref={slider => (this.gambarUtama = slider)}
              {...gambarUtamaOptions}
              className="gambar__preview"
            >
              <div className="gambar__preview-image">
                <img src="https://via.placeholder.com/1000" alt="Placeholder" />
              </div>
              <div className="gambar__preview-image">
                <img src="https://via.placeholder.com/1000" alt="Placeholder" />
              </div>
            </Slider>

            <Slider
              ref={slider => (this.carousel = slider)}
              {...carouselOptions}
              className="gambar__carousel"
            >
              <div className="gambar__carousel-image">
                <img src="https://via.placeholder.com/1000" alt="Placeholder" />
              </div>
              <div className="gambar__carousel-image">
                <img src="https://via.placeholder.com/1000" alt="Placeholder" />
              </div>
            </Slider>
          </section>

          <section className="info col-12 col-lg-5">
            <header className="info__title">
              <h2>Informasi detail:</h2>
            </header>

            <div className="info__table">
              <table className="table table-bordered info__table">
                <colgroup>
                  <col span="1" style={{ width: '35%' }} />
                  <col span="1" style={{ width: '75%' }} />
                </colgroup>
                <tbody>{this.props.barangDetail && this.getBarangData()}</tbody>
              </table>
            </div>
          </section>
        </div>
      </main>
    );
  }

  componentDidMount() {
    document.body.classList.add('page-barang-detail');
    this.setState({
      gambarUtama: this.gambarUtama,
      carousel: this.carousel,
    });
    this.props.getBarangDetail(this.props.match.params.id);
  }

  componentWillUnmount() {
    document.body.classList.remove('page-barang-detail');
  }
}
