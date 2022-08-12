import React, { Component } from "react";
import styles from "../styles";

class Pagination extends Component {
  getListItem = (i) => {
    if (i === this.props.currentPage)
      return (
        <li
          key={i}
          className="page-item active"
          aria-current="page"
          onClick={() => this.props.onPageChanged(i)}
        >
          <span style={styles.mainColor} className="page-link">
            {i}
          </span>
        </li>
      );
    else
      return (
        <li
          key={i}
          className="page-item"
          onClick={() => this.props.onPageChanged(i)}
        >
          <a className="page-link" href="/#">
            {i}
          </a>
        </li>
      );
  };

  render() {
    let pages = [];
    for (let i = 0; i < this.props.nbPages; i++)
      pages.push(this.getListItem(i));

    return (
      <nav aria-label="...">
        <ul className="pagination justify-content-center pagination-md">
          {pages}
        </ul>
      </nav>
    );
  }
}

export default Pagination;
