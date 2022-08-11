import React from "react";
import styles from "./styles";
import { useNavigate } from "react-router-dom";
import { genres } from "./fakeGenreService";

function withNavigateHook(AddMovie) {
  return function WrappedLocation(props) {
    return <AddMovie {...props} useNavigateHook={useNavigate()} />;
  };
}

const AddMovie = (props) => {
  return (
    <div className="col" style={{ padding: 8 }}>
      <button
        className="btn btn-secondary"
        style={styles.mainColor}
        onClick={() => {
          // Create new movie and save it in db to give him an id
          let movie = {
            _id: "id_0",
            title: "",
            genre: genres[0],
            numberInStock: 0,
            dailyRentalRate: 0,
            isLiked: false,
          };

          // Go to movie form
          props.useNavigateHook(`/movie/${movie._id}`, { state: movie });
        }}
      >
        New Movie
      </button>
    </div>
  );
};

export default withNavigateHook(AddMovie);
