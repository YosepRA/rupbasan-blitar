import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = ds => ({ loading: ds.loading || false });

export const Loading = connect(mapStateToProps)(
  class Loading extends Component {
    render() {
      return (
        this.props.loading && (
          <div className="loading-screen">
            <div
              className="spinner-border m-5 loading-screen__spinner"
              role="status"
            >
              <span className="sr-only">Loading...</span>
            </div>
            <div className="loading-screen__text">
              <p>Mohon tunggu sebentar...</p>
            </div>
          </div>
        )
      );
    }
  }
);
