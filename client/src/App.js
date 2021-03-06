import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { RupbasanBlitarDataStore } from './components/data/DataStore';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { HeaderConnector } from './components/HeaderConnector';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { BarangConnector } from './components/barang/BarangConnector';
import { AdminConnector } from './components/admin/AdminConnector';
import { Loading } from './components/Loading';
import { ProfilSwitch } from './components/profil/ProfilSwitch';
import { InformasiSwitch } from './components/informasi/InformasiSwitch';
import { Reset } from './components/auth/Reset';

export class App extends Component {
  render() {
    return (
      <div>
        <Provider store={RupbasanBlitarDataStore}>
          <Router>
            <HeaderConnector />
            <Loading />
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
            <Switch>
              <Route path="/" exact={true} component={Home} />

              <Route path="/barang" component={BarangConnector} />

              <Route path="/profil">
                <ProfilSwitch />
              </Route>

              <Route path="/informasi">
                <InformasiSwitch />
              </Route>

              <Route path="/admin" component={AdminConnector} />

              <Route path="/reset" component={Reset} />

              <Redirect to="/" />
            </Switch>
            <Footer />
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
