import React, { Component } from 'react';

/* 
State & Output: {
  tindakPidana: {
    umum: true,
    khusus: false,
  }, ...
}

Store: {
  tindakPidana: {
    umum: true,
    khusus: false,
  }, ...
}

Query: {
  tindakPidana: 'umum,khusus',
  ...
}
*/
export class ControlFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {},
      oldFilterStatus: {},
    };
  }

  handleChange = ({ target: { name, value, checked } }) => {
    this.setState(state => {
      let newState = {
        formData: {
          ...state.formData,
          [name]: {
            ...state.formData[name],
            [value]: checked,
          },
        },
      };

      return newState;
    });
  };

  handleSubmit = () => {
    this.props.togglePanel('');
    this.props.setFilters(this.state.formData);
  };

  createFilters() {
    const { filters } = this.props;

    return (
      <div className="filters__keys controls__keys">
        {Object.keys(filters).map(fieldName => {
          const { title, keys } = filters[fieldName];

          return (
            <div
              key={fieldName}
              className={`filters__${fieldName} filters__section`}
            >
              <div className="filters__field-name">
                <h3>{title}</h3>
              </div>
              <div className="filters__options">
                {keys.map(({ name }) => (
                  <div key={name} className="form-group form-check">
                    <input
                      type="checkbox"
                      name={fieldName}
                      id={name}
                      className="filters__checkbox form-check-input"
                      value={name}
                      checked={
                        this.state.formData[fieldName]
                          ? this.state.formData[fieldName][name]
                          : false
                      }
                      onChange={this.handleChange}
                    />{' '}
                    <label
                      htmlFor={name}
                      className="filters__label form-check-label"
                    >
                      {name}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  render() {
    return (
      <div className="controls__section controls__filter">
        <button
          type="button"
          className="btn btn-light control"
          onClick={() => this.props.togglePanel('filter')}
        >
          Filter <i className="fas fa-chevron-down"></i>
        </button>

        {this.props.activePanel === 'filter' && (
          <div className="panel filters">
            {this.createFilters()}

            <div className="controls__submit-btn filters__submit-btn">
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
    let storeFilterStatus = props.filterStatus || {};

    if (!isTheSameFilter(state.oldFilterStatus, storeFilterStatus)) {
      return {
        oldFilterStatus: storeFilterStatus,
        formData: storeFilterStatus,
      };
    } else {
      return state;
    }
  }
}

function isTheSameFilter(oldFilter, newFilter) {
  let oldIterator = Object.keys(oldFilter);
  let newIterator = Object.keys(newFilter);

  if (oldIterator.length !== newIterator.length) return false;

  for (const field of oldIterator) {
    if (!newFilter[field]) return false;
    let oldFieldData = oldFilter[field];
    let newFieldData = newFilter[field];
    let oldFieldIterator = Object.keys(oldFieldData);
    let newFieldIterator = Object.keys(newFieldData);

    if (oldFieldIterator.length !== newFieldIterator.length) return false;

    for (const key of oldFieldIterator) {
      if (
        newFieldData[key] === undefined ||
        oldFieldData[key] !== newFieldData[key]
      )
        return false;
    }
  }

  return true;
}
