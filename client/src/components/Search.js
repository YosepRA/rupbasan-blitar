import React, { Component } from 'react';
import { filterPageFromUrl } from '../helpers';

export class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchKey: '',
    };
  }

  handleChange = ({ target: { value } }) => this.setState({ searchKey: value });

  handleSubmit = event => {
    event.preventDefault();

    let currentUrl = this.props.match.url;
    let currentPage = this.props.match.params.page;

    this.setState({ searchKey: '' });
    this.props.history.push(filterPageFromUrl(currentUrl, currentPage));
    this.props.search(this.state.searchKey);
  };

  handleReset = () => this.props.resetParameters();

  render() {
    return (
      <section className="search">
        <form className="search__form" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="search"
              id="search"
              className="form-control search__input"
              placeholder="Cari barang..."
              onChange={this.handleChange}
              value={this.state.searchKey}
            />
            <div className="search__controls">
              <button
                type="submit"
                className="btn btn-default search__control search__submit-btn"
                title="Cari barang"
              >
                <i className="fas fa-search"></i>
              </button>
              <button
                className="btn btn-default search__control search__reset-btn"
                title="Reset pencarian"
                onClick={this.handleReset}
              >
                <i className="fas fa-redo"></i>
              </button>
            </div>
          </div>
        </form>
      </section>
    );
  }
}
