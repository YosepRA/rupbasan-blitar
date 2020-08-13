import React, { Component } from 'react';

export class JumlahData extends Component {
  getDataRow() {
    const { instansi } = this.props.barangCount;

    return Object.keys(instansi).map((i, index) => (
      <tr key={i} className="summary__data-row data">
        <th scope="row" className="data__number">
          {index + 1}
        </th>
        <td className="data__instansi">{i}</td>
        <td className="data__jumlah-surat">{instansi[i]}</td>
      </tr>
    ));
  }

  render() {
    return (
      <div className="summary">
        <header className="section-title summary__title">
          <h2>Jumlah data</h2>
        </header>

        <div className="table-data summary__table">
          <table className="table table-bordered">
            <colgroup>
              <col span="1" style={{ width: '10%' }} />
              <col span="1" style={{ width: '45%' }} />
              <col span="1" style={{ width: '45%' }} />
            </colgroup>

            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Instansi</th>
                <th scope="col">Jumlah Surat</th>
              </tr>
            </thead>
            <tbody>
              {this.props.barangCount && this.getDataRow()}
              <tr className="summary__grand-total-row">
                <td colSpan="2" className="summary__grand-total-row__title">
                  Total
                </td>
                <td className="summary__grand-total-row__data">
                  {this.props.barangCount && this.props.barangCount.total}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
