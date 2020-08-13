import React, { Component } from 'react';

export class ControlPageSize extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageSize: 5,
      prevPageSize: 5,
    };
    this.pageSizes = [5, 10, 25, 50];
  }

  handleChange = ({ target: { value } }) =>
    this.setState({ pageSize: Number(value) });

  handleSubmit = () => {
    this.props.togglePanel('');
    this.props.goBackToPageOne();
    this.props.setPageSize(this.state.pageSize);
  };

  createSortKeys() {
    return (
      <div className="controls__keys page-sizes__keys">
        {this.pageSizes.map(pageSize => (
          <div key={pageSize} className="form-check">
            <input
              type="radio"
              name="pageSize"
              id={pageSize}
              value={pageSize}
              className="form-check-input"
              checked={this.state.pageSize === pageSize}
              onChange={this.handleChange}
            />
            <label htmlFor={pageSize} className="form-check-label">
              {pageSize}
            </label>
          </div>
        ))}
      </div>
    );
  }

  render() {
    return (
      <div className="controls__section controls__page-size">
        <button
          type="button"
          className="btn btn-light control"
          onClick={() => this.props.togglePanel('pageSize')}
        >
          {this.state.pageSize} <i className="fas fa-chevron-down"></i>
        </button>

        {this.props.activePanel === 'pageSize' && (
          <div className="panel page-sizes">
            <div className="panel__title">
              <h3>Data per halaman:</h3>
            </div>

            {this.createSortKeys()}

            <div className="controls__submit-btn sorts__submit-btn">
              <button className="btn btn-default" onClick={this.handleSubmit}>
                Terapkan
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  // In case there's an explicit store data changes that is caused by other than the controls, such as ~
  // ~ parameter reset, to maintain display concistencies.
  static getDerivedStateFromProps(props, state) {
    // Comparing historical value that is mirroring the store data value. If there are any changes from ~
    // ~ the data store that is caused by either this control or an explicit call such as parameter reset, ~
    // ~ then assign that new value to both historical value (prevPageSize) and the component current state.
    if (props.pageSize && state.prevPageSize !== props.pageSize) {
      return {
        prevPageSize: props.pageSize,
        pageSize: props.pageSize,
      };
    }
    return state;
  }
}
