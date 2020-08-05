/* eslint-disable react/display-name */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import * as actionCreators from '../data/ActionCreators';
// import { DataTypes } from '../data/Types';
import { BarangGetter } from './BarangGetter';
import { Barang } from './Barang';

// import { barang } from '../data/fakeData';

const mapDispatchToProps = { ...actionCreators };

export const BarangConnector = connect(
  ds => ds,
  mapDispatchToProps
)(
  class extends Component {
    render() {
      return (
        <Switch>
          <Redirect from="/barang" to="/barang/all/1" exact={true} />
          <Redirect
            from="/barang/:instansi"
            to="/barang/:instansi/1"
            exact={true}
          />

          <Route
            path="/barang/:instansi?/:page?"
            render={routeProps => (
              <BarangGetter {...this.props} {...routeProps}>
                <Barang {...this.props} {...routeProps} />
              </BarangGetter>
            )}
          />
        </Switch>
      );
    }

    componentWillUnmount() {
      this.props.resetParameters();
    }
  }
);
