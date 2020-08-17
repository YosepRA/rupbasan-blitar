import React, { Component } from 'react';
import logo from '../../assets/logo-01.svg';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { DataTypes } from '../data/Types';
import { RestDataSource } from '../data/RestDataSource';
import { Urls } from '../data/Urls';
import { HTMLHead } from '../HTMLHead';
import { ValidationMessages } from '../form/ValidationMessages';
import { validate } from '../form/validation';

const dataSource = new RestDataSource();

export class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        username: '',
        email: '',
        password: '',
        passwordRepeat: '',
      },
      formError: '',
      formFieldError: {},
    };
    this.rules = {
      username: { required: true },
      email: { required: true, email: true },
      password: { required: true, equals: 'passwordRepeat' },
      passwordRepeat: { required: true, equals: 'password' },
    };
  }

  handleChange = ({ target: { name, value } }) =>
    this.setState({ formData: { ...this.state.formData, [name]: value } });

  handleSubmit = event => {
    event.preventDefault();

    let formFieldError = validate(this.state.formData, this.rules);
    this.setState({ formFieldError }, () => {
      // If there's no error.
      if (Object.keys(this.state.formFieldError).length === 0) {
        let url = Urls[DataTypes.REGISTER];
        dataSource
          .sendRequest('post', url, {}, this.state.formData)
          .then(({ data: { success, message } }) => {
            if (success) {
              this.props.history.push('/admin');
              toast.success('Akun admin baru telah berhasil dibuat.');
            } else {
              this.setState({
                formError: message,
              });
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
        <HTMLHead title="Register Akun Baru | Rumah Penyimpanan Benda Sitaan Negara Kelas II Blitar" />

        <div className="wrapper">
          <section className="headline">
            <div className="headline__title">
              <h2>
                Daftar akun <span className="headline__emphasize">admin</span>{' '}
                baru
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
              <h2>Register</h2>
            </header>
            {this.state.formError && (
              <div className="form__error">
                <div className="alert alert-danger" role="alert">
                  {this.state.formError}
                </div>
              </div>
            )}

            <form onSubmit={this.handleSubmit} noValidate>
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

              <div className="form-group form__email">
                <label htmlFor="username" className="form__label">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control form__input form__input--email form__input__email"
                  value={this.state.formData.email}
                  onChange={this.handleChange}
                />
                <ValidationMessages errors={this.state.formFieldError.email} />
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

              <div className="form-group form__password-repeat">
                <label htmlFor="username" className="form__label">
                  Ulangi password
                </label>
                <input
                  type="password"
                  name="passwordRepeat"
                  className="form-control form__input form__input--password form__input__password-repeat"
                  value={this.state.formData.passwordRepeat}
                  onChange={this.handleChange}
                />
                <ValidationMessages
                  errors={this.state.formFieldError.passwordRepeat}
                />
              </div>

              <button
                type="submit"
                className="btn btn-default form__submit-btn"
              >
                Register
              </button>
              <Link to="/admin" className="form__link form__go-back">
                Kembali ke halaman admin
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

  componentWillUnmount() {
    document.body.classList.remove('page-user-auth');
  }
}
