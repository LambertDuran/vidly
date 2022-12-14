import React from "react";
import styles from "./styles";
import { Link } from "react-router-dom";

const AddMovie = (props) => {
  // Create new movie and save it in db to give him an id
  let movie = {
    _id: Date.now().toString(),
    title: "",
    genre: props.genres[0],
    numberInStock: 0,
    dailyRentalRate: 0,
    isLiked: false,
  };

  return (
    <div className="col my-2" style={styles.rowStyle}>
      <Link to={`/movie/${movie._id}`} state={movie}>
        <button className="btn btn-secondary" style={styles.mainColor}>
          New Movie
        </button>
      </Link>
    </div>
  );
};

export default AddMovie;
