import React, { Component } from 'react';

export class GambarCarousel extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <img src={this.props.url} alt={this.props.nama} />
      </div>
    );
  }
}
