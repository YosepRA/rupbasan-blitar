import React, { Component } from 'react';
import { ToggleLink } from './ToggleLink';

export class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: true,
    };
  }

  toggleClick = () => this.setState({ isHidden: !this.state.isHidden });

  toggleHover = isHidden => this.setState({ isHidden });

  getControlClasses() {
    return `main-nav__menu-dropdown dropdown__control ${
      this.state.isHidden ? 'hide' : ''
    }`;
  }

  getPanelClasses() {
    let nama = this.props.controlLabel.replace(/ /g, '-').toLowerCase();
    return `dropdown__panel dropdown__panel--${nama}`;
  }

  render() {
    return (
      <div
        className="dropdown"
        onMouseEnter={() => this.toggleHover(false)}
        onMouseLeave={() => this.toggleHover(true)}
      >
        <button className={this.getControlClasses()} onClick={this.toggleOpen}>
          {this.props.controlLabel}
          <i className="fas fa-chevron-down"></i>
        </button>
        <div className="dropdown__panel">
          {this.props.list &&
            this.props.list.map(({ name, slug }) => (
              <ToggleLink
                key={name}
                className="main-nav__menu-link dropdown__item"
                to={`/barang/${slug}`}
              >
                {name}
              </ToggleLink>
            ))}
        </div>
      </div>
    );
  }
}
