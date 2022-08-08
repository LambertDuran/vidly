import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";


const Movie = () => {
  let params = useParams();
  const location = useLocation()
  const { movie } = location.state;
  let navigate = useNavigate();
  console.log("movie (from Movie)", movie)
  return (
    <>
      <h1> Movie : {params._id}</h1>
      <button
        className="btn btn-primary"
        onClick={() => {
          navigate("/movies", { replace: true, state: movie });
        }}
      >
        Save
      </button>
    </>
  );
};

export default Movie;
