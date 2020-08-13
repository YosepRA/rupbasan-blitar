import React, { Component } from 'react';
import { filterPageFromUrl } from '../helpers';

export class PageControls extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePanel: '',
    };
  }

  togglePanel = panelName =>
    // If the active button control is clicked again, then close its corresponding panel.
    this.setState({
      activePanel: panelName === this.state.activePanel ? '' : panelName,
    });

  goBackToPageOne = () => {
    let currentUrl = this.props.match.url;
    let currentPage = this.props.match.params.page;
    this.props.history.push(filterPageFromUrl(currentUrl, currentPage));
  };

  render() {
    return (
      <section className="controls btn-group">
        {React.Children.map(this.props.children, ChildComponent =>
          React.cloneElement(ChildComponent, {
            togglePanel: this.togglePanel,
            activePanel: this.state.activePanel,
            goBackToPageOne: this.goBackToPageOne,
            ...this.props,
          })
        )}
      </section>
    );
  }
}
