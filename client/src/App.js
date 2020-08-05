import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { RupbasanBlitarDataStore } from './components/data/DataStore';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { HeaderConnector } from './components/HeaderConnector';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { BarangConnector } from './components/barang/BarangConnector';
import { Login } from './components/Login';

export class App extends Component {
  render() {
    return (
      <div>
        <Provider store={RupbasanBlitarDataStore}>
          <Router>
            <HeaderConnector />
            <Switch>
              <Route path="/" exact={true}>
                <Home />
              </Route>
              <Route path="/barang" component={BarangConnector} />
              <Route path="/login">
                <Login />
              </Route>

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
