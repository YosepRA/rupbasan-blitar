import React, { Component, Fragment } from 'react';
import { DataTypes } from '../data/Types';

export class BarangGetter extends Component {
  getInstansiParam(instansiParam) {
    return (
      this.props.filters &&
      this.props.filters.instansi.keys.find(
        ({ slug }) => slug === instansiParam
      ).name
    );
  }

  convertFilter() {
    /* Convert to:
      {
        tindakPidana: 'umum,khusus',
        instansi: 'kejari blitar',
      } 
    */
    const filterStatus = this.props.filterStatus || {};
    let activeFilters = {};

    Object.keys(filterStatus).forEach(field => {
      let fieldData = filterStatus[field];
      activeFilters[field] = Object.keys(fieldData)
        .filter(data => fieldData[data])
        .join(',');
    });

    return activeFilters;
  }

  getBarang() {
    const activeFilters = this.convertFilter() || {};
    const instansiParams = this.props.match.params.instansi;

    let oldParams = this.props[`${DataTypes.BARANG}__params`] || {};
    let newParams = {
      search: this.props.searchKey || '',
      sort: this.props.sort || '-tanggalRegister',
      pageSize: this.props.pageSize || 10,
      page: this.props.match.params.page || 1,
      ...activeFilters,
      instansi:
        instansiParams !== 'all'
          ? this.getInstansiParam(instansiParams)
          : activeFilters.instansi || '',
    };
    // If there're any changes from old parameters compared to the new one, then reload.
    if (Object.keys(newParams).find(key => oldParams[key] !== newParams[key])) {
      this.props.loadData(DataTypes.BARANG, newParams);
    }
  }

  render() {
    return <Fragment>{this.props.children}</Fragment>;
  }

  componentDidUpdate() {
    this.getBarang();
  }

  componentDidMount() {
    this.getBarang();
  }
}
