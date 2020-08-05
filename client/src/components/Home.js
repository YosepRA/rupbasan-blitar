import React, { Component } from 'react';
import { HTMLHead } from './HTMLHead';

export class Home extends Component {
  componentDidMount() {
    document.body.classList.add('page-home');
  }

  componentWillUnmount() {
    document.body.classList.remove('page-home');
  }

  render() {
    return (
      <main className="main-container">
        <HTMLHead title="Rumah Penyimpanan Benda Sitaan Negara Kelas II Blitar" />
        <h3>Home page</h3>
      </main>
    );
  }
}
