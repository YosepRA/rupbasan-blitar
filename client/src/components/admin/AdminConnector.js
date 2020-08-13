/* eslint-disable react/display-name */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { DataTypes } from '../data/Types';
import * as actions from '../data/ActionCreators';
import { AdminGetter } from './AdminGetter';
import { Admin } from './Admin';
import { BarangForm } from './BarangForm';

const mapStoreToProps = dataStore => dataStore;
const mapDispatchToProps = { ...actions };

export const AdminConnector = connect(
  mapStoreToProps,
  mapDispatchToProps
)(
  class extends Component {
    render() {
      return (
        <Switch>
          {!this.props.isAuthenticated && <Redirect to="/login" />}

          <Route path="/admin/akun">
            <Admin {...this.props} />
          </Route>

          {/* New barang form. */}
          <Route path={`/admin/${DataTypes.BARANG}/new`}>
            <BarangForm {...this.props} />
          </Route>

          {/* Edit barang form. */}
          <Route
            path={`/admin/${DataTypes.BARANG}/edit/:id`}
            render={routeProps => (
              <BarangForm {...this.props} {...routeProps} mode="edit" />
            )}
          />

          <Redirect
            from="/admin/:section"
            to="/admin/:section/1"
            exact={true}
          />

          <Route
            path="/admin/:section/:page?"
            render={routeProps => (
              <AdminGetter
                {...this.props}
                {...routeProps}
                dataType={routeProps.match.params.section}
              >
                <Admin {...this.props} {...routeProps} />
              </AdminGetter>
            )}
          />

          <Redirect to="/admin/barang/1" />
        </Switch>
      );
    }

    componentWillUnmount() {
      this.props.resetParameters();
    }
  }
);
