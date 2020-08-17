import React, { Component } from 'react';
import { HTMLHead } from '../HTMLHead';
import sop from '../../assets/sop.png';

export class SOP extends Component {
  render() {
    return (
      <main className="main-container container">
        <HTMLHead title="Standar Operasi Prosedur | Rumah Penyimpanan Benda Sitaan Negara Kelas II Blitar" />

        <header className="page-title">
          <h1>Standar Operasi Prosedur</h1>
        </header>

        <section className="sop">
          <img
            src={sop}
            alt="Standar Operasi Prosedur"
            className="sop__image"
          />
        </section>
      </main>
    );
  }

  componentDidMount() {
    document.body.classList.add('page-sop');
  }

  componentWillUnmount() {
    document.body.classList.remove('page-sop');
  }
}
