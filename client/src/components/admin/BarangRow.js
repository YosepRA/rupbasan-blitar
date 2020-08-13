import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { RestDataSource } from '../data/RestDataSource';
import { DataTypes } from '../data/Types';
import { Urls } from '../data/Urls';

const dataSource = new RestDataSource();

export class BarangRow extends Component {
  handleDelete = id => {
    let url = `${Urls[DataTypes.BARANG]}/${id}`;
    dataSource.sendRequest('delete', url).then(() => {
      this.props.loadData(
        DataTypes.BARANG,
        this.props[`${DataTypes.BARANG}__params`]
      );
    });
    this.props.setLoadingState(true);
  };

  render() {
    const { nomorRegister, nama, _id } = this.props.barang;

    return (
      <tr className="management__data-row data">
        <td className="data__nomor-register">{nomorRegister}</td>
        <td className="data__nama-barang">{nama}</td>
        <td className="data__control">
          <Link
            to={`/admin/barang/edit/${_id}`}
            className="btn btn-default data__control-btn data__edit-btn"
            title="Ubah data barang"
          >
            <i className="fas fa-edit"></i>
          </Link>
        </td>
        <td className="data__control">
          <button
            className="btn btn-default data__control-btn data__delete-btn"
            title="Hapus data barang"
            onClick={() => this.handleDelete(_id)}
          >
            <i className="fas fa-trash-alt"></i>
          </button>
        </td>
      </tr>
    );
  }
}
