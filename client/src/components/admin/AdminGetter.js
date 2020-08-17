import React, { Component, Fragment } from 'react';

export class AdminGetter extends Component {
  convertFilter() {
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

  getData() {
    const activeFilters = this.convertFilter() || {};

    let oldParams = this.props[`${this.props.dataType}__params`] || {};
    let newParams = {
      search: this.props.searchKey || '',
      sort: this.props.sort || '-tanggalRegister',
      pageSize: this.props.pageSize || 25,
      page: this.props.match.params.page || 1,
      ...activeFilters,
    };
    // If there're any changes from old parameters compared to the new one, then reload.
    if (Object.keys(newParams).find(key => oldParams[key] !== newParams[key])) {
      this.props.loadData(this.props.dataType, newParams);
    }
  }

  render() {
    return <Fragment>{this.props.children}</Fragment>;
  }

  componentDidUpdate() {
    this.getData();
  }

  componentDidMount() {
    this.getData();
  }
}
