import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { DataTypes } from '../data/Types';
import { RestDataSource } from '../data/RestDataSource';
import { Urls } from '../data/Urls';
import { ValidationMessages } from '../form/ValidationMessages';
import { validate } from '../form/validation';

const dataSource = new RestDataSource();

export class AkunSetting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        oldPassword: '',
        newPassword: '',
        newPasswordRepeat: '',
      },
      formSuccess: '',
      formError: '',
      formFieldError: {},
    };
    this.rules = {
      oldPassword: { required: true },
      newPassword: { required: true, equals: 'newPasswordRepeat' },
      newPasswordRepeat: { required: true, equals: 'newPassword' },
    };
  }

  handleChange = ({ target: { name, value } }) =>
    this.setState({
      formData: { ...this.state.formData, [name]: value },
    });

  handleSubmit = event => {
    event.preventDefault();

    let formFieldError = validate(this.state.formData, this.rules);

    this.setState({ formFieldError }, () => {
      if (Object.keys(this.state.formFieldError).length === 0) {
        let url = `${Urls[DataTypes.USER]}/change/${this.props.user}`;
        dataSource
          .sendRequest('post', url, {}, this.state.formData)
          .then(({ data: { success, message } }) => {
            this.setState({
              formData: {
                oldPassword: '',
                newPassword: '',
                newPasswordRepeat: '',
              },
              formSuccess: success ? message : '',
              formError: !success ? message : '',
            });
            this.props.setLoadingState(false);
          });
        this.props.setLoadingState(true);
      }
    });
  };

  render() {
    return (
      <section className="admin-akun col-12 col-lg-9">
        <header className="section-title title">
          <h2>Pengaturan Akun</h2>
        </header>

        <div className="new-barang">
          <Link to="/admin/register" className="btn btn-default">
            <i className="fas fa-plus"></i> Daftar akun baru
          </Link>
        </div>

        <div className="change-password">
          <header className="change-password__title">
            <h3>Ubah password</h3>
          </header>

          <div className="change-password__current-user">
            <p>User: {this.props.user}</p>
          </div>

          <div className="change-password__form form">
            {this.state.formSuccess && (
              <div className="form__success">
                <div className="alert alert-success" role="alert">
                  {this.state.formSuccess}
                </div>
              </div>
            )}
            {this.state.formError && (
              <div className="form__error">
                <div className="alert alert-danger" role="alert">
                  {this.state.formError}
                </div>
              </div>
            )}

            <form onSubmit={this.handleSubmit}>
              <div className="form-group form__old-password">
                <label htmlFor="old-password" className="form__label">
                  Password lama
                </label>
                <input
                  type="password"
                  name="oldPassword"
                  id="old-password"
                  className="form-control form__input form__input--password form__input--old-password"
                  value={this.state.formData.oldPassword}
                  onChange={this.handleChange}
                />

                <ValidationMessages
                  errors={this.state.formFieldError.oldPassword}
                />
              </div>

              <div className="form-group form__new-password">
                <label htmlFor="new-password" className="form__label">
                  Password baru
                </label>
                <input
                  type="password"
                  name="newPassword"
                  id="new-password"
                  className="form-control form__input form__input--password form__input--new-password"
                  value={this.state.formData.newPassword}
                  onChange={this.handleChange}
                />

                <ValidationMessages
                  errors={this.state.formFieldError.newPassword}
                />
              </div>

              <div className="form-group form__new-password-repeat">
                <label htmlFor="new-password-repeat" className="form__label">
                  Ulangi password baru
                </label>
                <input
                  type="password"
                  name="newPasswordRepeat"
                  id="new-password-repeat"
                  className="form-control form__input form__input--password form__input--new-password-repeeat"
                  value={this.state.formData.newPasswordRepeat}
                  onChange={this.handleChange}
                />

                <ValidationMessages
                  errors={this.state.formFieldError.newPasswordRepeat}
                />
              </div>

              <div className="form__control">
                <button type="submit" className="btn btn-default">
                  Ubah
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
}
