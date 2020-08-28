/* eslint-disable react/display-name */
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connectorWrapper } from '../data/connectorWrapper';
import { DataTypes } from '../data/Types';
import { RestDataSource } from '../data/RestDataSource';
import { AdminGetter } from './AdminGetter';
import { Admin } from './Admin';
import { BarangForm } from './BarangForm';
import { Register } from '../auth/Register';
import { Login } from '../auth/Login';

const dataSource = new RestDataSource();

export const AdminConnector = connectorWrapper(
  class extends Component {
    render() {
      return (
        <Switch>
          <Route path="/admin/login">
            <Login {...this.props} />
          </Route>

          {!this.props.isAuthenticated && <Redirect to="/admin/login" />}

          <Route path="/admin/register">
            <Register {...this.props} />
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

    componentDidMount() {
      // Get the authentication status from current session.
      if (!this.props.isAuthenticated) {
        dataSource
          .getRequest(DataTypes.USER)
          .then(({ data: { isAuthenticated, username } }) => {
            if (isAuthenticated) {
              this.props.setAuthenticationStatus(isAuthenticated, username);
            } else {
              this.props.setLoadingState(false);
            }
          });

        this.props.setLoadingState(true);
      }
    }

    componentWillUnmount() {
      this.props.resetParameters();
    }
  }
);
