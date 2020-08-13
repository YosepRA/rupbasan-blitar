/* eslint-disable react/display-name */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { DataTypes } from '../data/Types';
import * as actionCreators from '../data/ActionCreators';
import { BarangGetter } from './BarangGetter';
import { Barang } from './Barang';
import { BarangDetail } from './BarangDetail';

const mapDispatchToProps = { ...actionCreators };

export const BarangConnector = connect(
  ds => ds,
  mapDispatchToProps
)(
  class extends Component {
    render() {
      return (
        <Switch>
          <Redirect
            from={`/${DataTypes.BARANG}`}
            to={`/${DataTypes.BARANG}/all/1`}
            exact={true}
          />
          <Redirect
            from={`/${DataTypes.BARANG}/:instansi`}
            to={`/${DataTypes.BARANG}/:instansi/1`}
            exact={true}
          />

          {/* Barang detail page */}
          <Route
            path={`/${DataTypes.BARANG}/detail/:id/:nama`}
            render={routeProps => (
              <BarangDetail {...this.props} {...routeProps} />
            )}
          />

          {/* Barang index route */}
          <Route
            path={`/${DataTypes.BARANG}/:instansi?/:page?`}
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
