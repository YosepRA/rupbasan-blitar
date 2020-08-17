import React, { Component } from 'react';

export class ControlSort extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortKey: '-tanggalRegister',
      oldSortKey: '-tanggalRegister',
    };
    this.sortKeys = props.sortKeys || [
      { name: 'Terbaru', key: '-tanggalRegister' },
      { name: 'Terlama', key: 'tanggalRegister' },
      { name: 'Nama (A-Z)', key: 'nama' },
      { name: 'Nama (Z-A)', key: '-nama' },
    ];
  }

  handleChange = ({ target: { value } }) => this.setState({ sortKey: value });

  handleSubmit = () => {
    this.props.togglePanel('');
    this.props.goBackToPageOne();
    this.props.setSortKey(this.state.sortKey);
  };

  createSortKeys() {
    return (
      <div className="controls__keys sorts__keys">
        {this.sortKeys.map(({ name, key }) => (
          <div key={key} className="form-check">
            <input
              type="radio"
              name="sortKey"
              id={key}
              value={key}
              className="form-check-input"
              checked={this.state.sortKey === key}
              onChange={this.handleChange}
            />
            <label htmlFor={key} className="form-check-label">
              {name}
            </label>
          </div>
        ))}
      </div>
    );
  }

  render() {
    return (
      <div className="controls__section controls__sort">
        <button
          type="button"
          className="btn btn-light control"
          onClick={() => this.props.togglePanel('sort')}
        >
          Sort <i className="fas fa-chevron-down"></i>
        </button>

        {this.props.activePanel === 'sort' && (
          <div className="panel sorts">
            <div className="panel__title">
              <h3>Sort:</h3>
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

  static getDerivedStateFromProps(props, state) {
    if (props.sort && props.sort !== state.oldSortKey) {
      return {
        sortKey: props.sort,
        oldSortKey: props.sort,
      };
    }
    return state;
  }
}
