import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { HTMLHead } from '../HTMLHead';
import { DataTypes } from '../data/Types';
import { Urls } from '../data/Urls';
import { RestDataSource } from '../data/RestDataSource';
import { connectorWrapper } from '../data/connectorWrapper';
import { ValidationMessages } from '../form/ValidationMessages';
import { validate } from '../form/validation';

const dataSource = new RestDataSource();

export const Reset = connectorWrapper(
  class Reset extends Component {
    constructor(props) {
      super(props);
      this.state = {
        formData: {
          resetEmail: '',
        },
        formError: '',
        formFieldError: {},
      };
      this.rules = {
        resetEmail: { required: true, email: true },
      };
    }

    handleChange = ({ target: { name, value } }) =>
      this.setState({ formData: { ...this.state.formData, [name]: value } });

    handleSubmit = event => {
      event.preventDefault();

      let formFieldError = validate(this.state.formData, this.rules);
      this.setState({ formFieldError }, () => {
        if (Object.keys(this.state.formFieldError).length === 0) {
          let url = Urls[DataTypes.RESET];
          dataSource
            .sendRequest('post', url, {}, this.state.formData)
            .then(({ data: { success, message } }) => {
              if (success) {
                this.props.history.push('/');
                toast.success(message);
              } else {
                this.setState({ formError: message });
              }
              this.props.setLoadingState(false);
            });
          this.props.setLoadingState(true);
        }
      });
    };

    render() {
      return (
        <main className="main-container container">
          <HTMLHead title="Reset password | Rumah Penyimpanan Benda Sitaan Negara Kelas II Blitar" />

          <header className="page-title">
            <h1>Reset Password</h1>
          </header>

          <section className="form">
            {this.state.formError && (
              <div className="form__error">
                <div className="alert alert-danger" role="alert">
                  {this.state.formError}
                </div>
              </div>
            )}
            <form
              className="form__reset-form"
              onSubmit={this.handleSubmit}
              noValidate
            >
              <div className="form-group form__reset-email">
                <label htmlFor="reset-email" className="form__label">
                  Email
                </label>
                <input
                  type="email"
                  name="resetEmail"
                  id="reset-email"
                  className="form-control form__input form__input--email form__input__reset-email"
                  value={this.state.formData.resetEmail}
                  onChange={this.handleChange}
                />
                <small id="emailHelp" className="form-text text-muted">
                  Password baru akan dikirim ke email ini.
                </small>

                <ValidationMessages
                  errors={this.state.formFieldError.resetEmail}
                />
              </div>
              <button
                type="submit"
                className="btn btn-default form__submit-btn"
              >
                Kirim
              </button>
            </form>
          </section>
        </main>
      );
    }

    componentDidMount() {
      document.body.classList.add('page-reset');
    }

    componentWillUnmount() {
      document.body.classList.remove('page-reset');
    }
  }
);
