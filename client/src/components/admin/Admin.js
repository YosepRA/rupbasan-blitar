import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { DataTypes } from '../data/Types';
import { RestDataSource } from '../data/RestDataSource';
import { HTMLHead } from '../HTMLHead';
import { ToggleLink } from '../ToggleLink';
import { AdminBarang } from './AdminBarang';
// import { AdminArtikel } from './AdminArtikel';
import { AkunSetting } from './AkunSetting';

const dataSource = new RestDataSource();

export class Admin extends Component {
  handleLogout = () => {
    dataSource.getRequest(DataTypes.LOGOUT).then(({ data: { success } }) => {
      if (success) {
        this.props.setAuthenticationStatus(false);
        this.props.history.push('/');
      }
    });
  };

  render() {
    return (
      <main className="main-container container">
        <HTMLHead title="Admin Area | Rumah Penyimpanan Benda Sitaan Negara Kelas II Blitar" />
        <header className="page-title">
          <h1>Admin Area</h1>
        </header>

        <div className="row">
          <section className="admin-nav col-12 col-lg-3">
            <nav>
              <ToggleLink
                to={`/admin/${DataTypes.BARANG}`}
                className="admin-nav__link btn btn-default"
              >
                <i className="fas fa-cube"></i> Barang
              </ToggleLink>
              {/* <ToggleLink
                to={`/admin/${DataTypes.ARTIKEL}`}
                className="admin-nav__link btn btn-default"
              >
                Artikel
              </ToggleLink> */}
              <ToggleLink
                to={`/admin/${DataTypes.AKUN}`}
                className="admin-nav__link btn btn-default"
              >
                <i className="fas fa-user-cog"></i> Pengaturan Akun
              </ToggleLink>

              <button
                className="admin-nav__link btn btn-default"
                onClick={this.handleLogout}
              >
                <i className="fas fa-sign-out-alt"></i> Logout
              </button>
            </nav>
          </section>

          {/* Probable switch */}
          <Switch>
            <Route path={`/admin/${DataTypes.BARANG}/:page?`}>
              <AdminBarang {...this.props} />
            </Route>

            {/* <Route path={`/admin/${DataTypes.ARTIKEL}/:page?`}>
              <AdminArtikel {...this.props} />
            </Route> */}

            <Route path={`/admin/${DataTypes.AKUN}`}>
              <AkunSetting {...this.props} />
            </Route>
          </Switch>
        </div>
      </main>
    );
  }

  componentDidMount() {
    document.body.classList.add('page-admin');
  }

  componentWillUnmount() {
    document.body.classList.remove('page-admin');
  }
}
