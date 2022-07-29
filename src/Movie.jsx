import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const Movie = () => {
  let params = useParams();
  let navigate = useNavigate();
  return (
    <>
      <h1> Movie : {params._id}</h1>
      <button
        className="btn btn-primary"
        onClick={() => {
          navigate("/movies");
        }}
      >
        Save
      </button>
    </>
  );
};

export default Movie;
