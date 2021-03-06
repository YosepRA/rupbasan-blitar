import React, { Component } from 'react';
import logo from '../../assets/logo-01.svg';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { RestDataSource } from '../data/RestDataSource';
import { DataTypes } from '../data/Types';
import { HTMLHead } from '../HTMLHead';
import { ValidationMessages } from '../form/ValidationMessages';
import { validate } from '../form/validation';

const dataSource = new RestDataSource();

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        username: '',
        password: '',
      },
      formError: '',
      formFieldError: {},
    };
    this.rules = {
      username: { required: true },
      password: { required: true },
    };
  }

  handleChange = ({ target: { name, value } }) =>
    this.setState({ formData: { ...this.state.formData, [name]: value } });

  handleSubmit = event => {
    event.preventDefault();

    let formFieldError = validate(this.state.formData, this.rules);
    this.setState({ formFieldError }, () => {
      if (Object.keys(this.state.formFieldError).length === 0) {
        dataSource
          .postRequest(DataTypes.LOGIN, this.state.formData)
          .then(res => {
            if (res.data.success) {
              this.props.setAuthenticationStatus(true, res.data.username);
              toast(`Selamat datang, ${res.data.username}.`);
            }
          })
          .catch(err => {
            if (err.response.status === 401) {
              this.setState({ formError: err.response.data.message });
            }
            this.props.setLoadingState(false);
          });
        this.props.setLoadingState(true);
      }
    });
  };

  render() {
    return (
      <div className="main-container">
        <HTMLHead title="Login ke Admin Area | Rumah Penyimpanan Benda Sitaan Negara Kelas II Blitar" />

        <div className="wrapper">
          <section className="headline">
            <div className="headline__title">
              <h2>
                Login ke <span className="headline__emphasize">Admin Area</span>
              </h2>
              <h2>
                website{' '}
                <strong>
                  <span className="headline__emphasize-rupbasan">
                    Rupbasan Blitar
                  </span>
                </strong>
              </h2>
            </div>
            <div className="headline__logo">
              <img src={logo} alt="Logo Rupbasan Blitar" />
            </div>
          </section>

          <section className="form">
            <header className="form__title">
              <h2>Login</h2>
            </header>

            {this.state.formError && (
              <div className="form__error">
                <div className="alert alert-danger" role="alert">
                  {this.state.formError}
                </div>
              </div>
            )}

            <form onSubmit={this.handleSubmit}>
              <div className="form-group form__username">
                <label htmlFor="username" className="form__label">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  className="form-control form__input form__input--text form__input__username"
                  value={this.state.formData.username}
                  onChange={this.handleChange}
                />
                <ValidationMessages
                  errors={this.state.formFieldError.username}
                />
              </div>
              <div className="form-group form__password">
                <label htmlFor="username" className="form__label">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  className="form-control form__input form__input--password form__input__password"
                  value={this.state.formData.password}
                  onChange={this.handleChange}
                />
                <ValidationMessages
                  errors={this.state.formFieldError.password}
                />
              </div>

              <button
                type="submit"
                className="btn btn-default form__submit-btn"
              >
                Login
              </button>
              <Link to="/reset" className="form__link form__password-reset">
                Lupa password?
              </Link>
              <Link to="/" className="form__link form__go-back">
                Kembali ke halaman awal
              </Link>
            </form>
          </section>
        </div>
      </div>
    );
  }

  componentDidMount() {
    document.body.classList.add('page-user-auth');
  }

  componentDidUpdate() {
    if (this.props.isAuthenticated) this.props.history.push('/admin');
  }

  componentWillUnmount() {
    document.body.classList.remove('page-user-auth');
  }
}
