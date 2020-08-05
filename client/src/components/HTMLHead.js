import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

export class HTMLHead extends Component {
  render() {
    return (
      <Helmet>
        <title>{this.props.title}</title>
      </Helmet>
    );
  }
}
