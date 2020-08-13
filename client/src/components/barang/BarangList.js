import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Pagination } from '../Pagination';
import format from 'date-format';
import slugify from 'slugify';

export class BarangList extends Component {
  render() {
    return (
      <Fragment>
        <section className="barang">
          <div className="row">
            {this.props.barang.map(
              ({
                gambar,
                nama,
                nomorRegister,
                tanggalRegister,
                instansi,
                _id,
              }) => (
                <div
                  key={_id}
                  className="col-6 col-md-4 col-xl-3 barang__column"
                >
                  <div className="card barang__card">
                    <div className="barang__image">
                      <Link
                        to={`/barang/detail/${_id}/${slugify(nama)}`}
                        className="barang__image__link"
                      >
                        <img
                          src={gambar[0].url}
                          className="card-img-top"
                          alt={nama}
                        />
                      </Link>
                    </div>
                    <div className="card-body barang__info">
                      <div className="barang__nomor-register">
                        {nomorRegister}
                      </div>
                      <div className="barang__nama">
                        <Link
                          to={`/barang/detail/${_id}/${slugify(nama)}`}
                          className="barang__link"
                        >
                          {nama}
                        </Link>
                      </div>
                      <div className="barang__meta-data">
                        <div className="barang__tanggal-register">
                          <i className="far fa-clock"></i>{' '}
                          {format('dd/MM/yyyy', new Date(tanggalRegister))}
                        </div>
                        <div className="barang__instansi">
                          <i className="fas fa-map-marker-alt"></i> {instansi}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </section>

        <Pagination
          {...this.props}
          baseUrl={`/barang/${this.props.match.params.instansi}`}
        />
      </Fragment>
    );
  }
}
