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

  handleLinkClick = ({ target: { tagName } }) => {
    if (tagName === 'A') this.setState({ isHidden: true });
  };

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
      <div className="dropdown">
        <button className={this.getControlClasses()} onClick={this.toggleClick}>
          {this.props.controlLabel}
          <i className="fas fa-chevron-down"></i>
        </button>
        <div className="dropdown__panel" onClick={this.handleLinkClick}>
          {this.props.list &&
            this.props.list.map(({ name, slug }) => (
              <ToggleLink
                key={name}
                className="main-nav__menu-link dropdown__item"
                to={`${this.props.baseUrl}/${slug}`}
              >
                {name}
              </ToggleLink>
            ))}
        </div>
      </div>
    );
  }
}
