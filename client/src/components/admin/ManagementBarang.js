import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { DataTypes } from '../data/Types';
import { Search } from '../Search';
import { PageControls } from '../PageControls';
import { ControlFilter } from '../ControlFilter';
import { ControlSort } from '../ControlSort';
import { ControlPageSize } from '../ControlPageSize';
import { Pagination } from '../Pagination';
import { BarangRow } from './BarangRow';
import { DataNotFound } from '../DataNotFound';

export class ManagementBarang extends Component {
  render() {
    return (
      <div className="management">
        <header className="section-title management__title">
          <h2>Manajemen data</h2>
        </header>

        <Search {...this.props} />

        {this.props.searchKey && (
          <section className="search-result-message">
            <h2>Hasil pencarian untuk &quot;{this.props.searchKey}&quot;</h2>
          </section>
        )}

        <div className="management__controls">
          <div className="management__barang-baru">
            <Link
              to={`/admin/${DataTypes.BARANG}/new`}
              className="btn btn-default"
            >
              <i className="fas fa-plus"></i> Barang
            </Link>
          </div>

          <PageControls {...this.props}>
            <ControlFilter />
            <ControlSort />
            <ControlPageSize />
          </PageControls>
        </div>

        {this.props.barang && this.props.barang.length > 0 && (
          <Fragment>
            <div className="table-data management__table">
              <table className="table table-bordered">
                <colgroup>
                  <col span="1" style={{ width: '15%' }} />
                  <col span="1" style={{ width: '65%' }} />
                  <col span="1" style={{ width: '10%' }} />
                  <col span="1" style={{ width: '10%' }} />
                </colgroup>
                <thead>
                  <tr>
                    <th scope="col">No.Register</th>
                    <th scope="col">Nama Barang</th>
                    <th scope="col">Ubah</th>
                    <th scope="col">Hapus</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.barang &&
                    this.props.barang.map(barang => (
                      <BarangRow
                        {...this.props}
                        key={barang._id}
                        barang={barang}
                      />
                    ))}
                </tbody>
              </table>
            </div>

            <Pagination {...this.props} baseUrl="/admin/barang" />
          </Fragment>
        )}

        {this.props.barang && this.props.barang.length === 0 && (
          <DataNotFound />
        )}
      </div>
    );
  }
}
