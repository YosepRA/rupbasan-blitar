import React, { Component } from 'react';
import logo from '../../assets/logo-01.svg';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  handleChange = ({ target: { name, value } }) =>
    this.setState({ [name]: value });

  handleSubmit = event => {
    event.preventDefault();
    console.log('Login submit');
  };

  render() {
    return (
      <div className="main-container container">
        <div className="row">
          <section className="headline">
            <div className="headline__title">
              <h2>
                Login ke <span className="headline__emphasize">Admin Area</span>
              </h2>
              <h2>
                website{' '}
                <span className="headline__emphasize-rupbasan">
                  Rupbasan Blitar
                </span>
              </h2>
            </div>
            <div className="headline__logo">
              <img src={logo} alt="Logo Rupbasan Blitar" />
            </div>
          </section>

          <section className="form">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group"></div>
            </form>
          </section>
        </div>
      </div>
    );
  }

  componentDidMount() {
    document.body.classList.add('page-user-auth');
  }

  componentWillUnmount() {
    document.body.classList.remove('page-user-auth');
  }
}
