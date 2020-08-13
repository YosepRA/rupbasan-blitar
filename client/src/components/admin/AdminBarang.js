import React, { Component } from 'react';
import { JumlahData } from './JumlahData';
import { ManagementBarang } from './ManagementBarang';

export class AdminBarang extends Component {
  render() {
    return (
      <section className="admin-barang col-12 col-lg-9">
        <JumlahData {...this.props} />
        <ManagementBarang {...this.props} />
      </section>
    );
  }

  componentDidMount() {
    this.props.getBarangCount();
  }
}
