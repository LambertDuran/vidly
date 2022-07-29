import React, { Component } from "react";
import Like from "./Like";
import { Link } from "react-router-dom";
import _ from "lodash";
import TableComponent from "./TableComponent";

class Movies extends Component {
  constructor(props) {
    super(props);
    this.sortColumns = [
      {
        path: "title",
        label: "Title",
        content: movie => {
          return (
            <Link to={`/movie/${movie._id}`}>{_.get(movie, "title")}</Link>
          );
        }
      },
      { path: "genre.name", label: "Genre" },
      { path: "numberInStock", label: "Stock" },
      { path: "dailyRentalRate", label: "Note" },
      {
        path: "like",
        content: movie => (
          <Like
            id={movie._id}
            onLike={this.props.onLike}
            isLiked={movie.isLiked}
          ></Like>
        )
      },
      {
        path: "delete",
        content: movie => (
          <button
            className="btn btn-danger sm"
            onClick={() => this.props.onDelete(movie)}
          >
            Delete
          </button>
        )
      }
    ];
  }

  render() {
    const { movies, onSort, sortColumn } = this.props;
    return (
      <div>
        <TableComponent
          items={movies}
          onSort={onSort}
          sortColumn={sortColumn}
          sortColumns={this.sortColumns}
        />
      </div>
    );
  }
}

export default Movies;
