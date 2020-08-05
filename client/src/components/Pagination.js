import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { ToggleLink } from './ToggleLink';

// INPUT: currentPage, pageCount, pageSize.
// OUTPUT:
// < 1 [2] 3 >
// < 1 2 3 [4] 5 ... 100 >
// < 1 ... 3 4 [5] 6 7 ... 100 >
// < 1 ... 10 11 [12] 13 14 ... 100 >
// < 1 ... 94 95 [96] 97 98 ... 100 >
// < 1 ... 96 [97] 98 99 100 >

// const currentPage = 10;
// const pageCount = 100;

export class Pagination extends Component {
  // Get an array of numbers.
  getPageNumbers() {
    const currentPage = Number(this.props.match.params.page);
    const { pageCount } = this.props;

    if (pageCount < 5) {
      return [...Array(pageCount + 1).keys()].slice(1); // [1, 2, 3, 4]
    } else if (currentPage < 5) {
      return [1, 2, 3, 4, 5];
    } else if (currentPage >= pageCount - 3) {
      return [...Array(5).keys()].reverse().map(num => pageCount - num);
    } else {
      return [
        currentPage - 2,
        currentPage - 1,
        currentPage,
        currentPage + 1,
        currentPage + 2,
      ];
    }
  }

  getLinkClasses() {
    return 'btn btn-light pagination__link';
  }

  getNavigationLink(pageNum) {
    // Make this dynamic based on React router props.
    const instansi = this.props.match.params.instansi;
    return `/barang/${instansi}/${pageNum}`;
  }

  render() {
    // This props will come from store.
    const currentPage = Number(this.props.match.params.page);
    const { pageCount } = this.props;

    return (
      <section className="pagination">
        <div className="btn-group" role="group" aria-label="Pagination">
          {/* Previous */}
          {currentPage > 1 && (
            <Link
              to={this.getNavigationLink(currentPage - 1)}
              className={this.getLinkClasses()}
            >
              &lt;
            </Link>
          )}

          {/* First page */}
          {currentPage > 4 && pageCount > 5 && (
            <Fragment>
              <Link
                to={this.getNavigationLink(1)}
                className={this.getLinkClasses()}
              >
                1
              </Link>
              <span className="pagination__ellipsis">...</span>
            </Fragment>
          )}

          {/* In-between pages. */}
          {this.getPageNumbers().map(num => (
            <ToggleLink
              key={num}
              to={this.getNavigationLink(num)}
              className={this.getLinkClasses()}
            >
              {num}
            </ToggleLink>
          ))}

          {/* Last page */}
          {currentPage < pageCount - 3 && (
            <Fragment>
              <span className="pagination__ellipsis align-self-end px-2 py-1 ">
                ...
              </span>
              <Link
                to={this.getNavigationLink(pageCount)}
                className={this.getLinkClasses()}
              >
                {pageCount}
              </Link>
            </Fragment>
          )}

          {/* Next */}
          {currentPage < pageCount && (
            <Link
              to={this.getNavigationLink(currentPage + 1)}
              className={this.getLinkClasses()}
            >
              &gt;
            </Link>
          )}
        </div>
      </section>
    );
  }
}
