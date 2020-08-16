import React, { Component } from 'react';

export class ValidationMessages extends Component {
  render() {
    return (
      <div className="form__field-errors">
        {this.props.errors &&
          this.props.errors.map(err => (
            <small
              key={err}
              className="form-text text-danger form__field-error"
            >
              {err}
            </small>
          ))}
      </div>
    );
  }
}
