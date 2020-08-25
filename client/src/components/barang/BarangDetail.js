import React, { Component } from 'react';
import { HTMLHead } from '../HTMLHead';
import Slider from 'react-slick';
import { GambarCarousel } from './GambarCarousel';
import { BarangDataRow } from './BarangDataRow';
import defaultPicture from '../../assets/default.png';

export class BarangDetail extends Component {
  getGambar(className) {
    const { nama, gambar } = this.props.barangDetail;
    return gambar.length > 0 ? (
      gambar.map(({ url }) => (
        <GambarCarousel
          key={nama}
          className={className}
          url={url}
          nama={nama}
        />
      ))
    ) : (
      <GambarCarousel
        key={nama}
        className={className}
        url={defaultPicture}
        nama={nama}
      />
    );
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
    let carouselOptions = {
      dots: true,
      arrows: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
          },
        },
      ],
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
          <section className="gambar col-12 col-lg-6">
            <Slider {...carouselOptions} className="gambar__carousel">
              {this.props.barangDetail &&
                this.getGambar('gambar__carousel-image')}
            </Slider>
          </section>

          <section className="info col-12 col-lg-6">
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

    this.props.getBarangDetail(this.props.match.params.id);
  }

  componentWillUnmount() {
    document.body.classList.remove('page-barang-detail');
  }
}
