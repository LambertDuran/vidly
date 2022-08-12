import React from "react";
import { /*useParams,*/ useNavigate, useLocation } from "react-router-dom";
import Form from "./common/Form";
import Joi from "joi-browser";
import { getGenres } from "./fakeGenreService";
import { saveMovie } from "./fakeMovieService";

// Add hooks to Movie Component
// (because u can't add hooks to classes)
function withHooks(Movie) {
  return function WrappedLocation(props) {
    return (
      <Movie
        {...props}
        useLocationHook={useLocation()}
        useNavigateHook={useNavigate()}
        //useParamsHook={useParams()}
      />
    );
  };
}

class Movie extends Form {
  constructor(props) {
    super(props);
    const movie = this.props.useLocationHook.state;
    this.state = {
      movie: movie,
      genres: getGenres(),
      data: {
        title: movie.title,
        genre: movie.genre.name,
        numberInStock: movie.numberInStock,
        dailyRentalRate: movie.dailyRentalRate,
      },
      errors: {
        title: "",
        genre: "",
        numberInStock: "",
        dailyRentalRate: "",
      },
    };

    this.schema = {
      title: Joi.string().label("Title").required(),
      genre: Joi.string().label("Genre").required(),
      numberInStock: Joi.number()
        .label("Number in stock")
        .integer()
        .greater(0)
        .less(100)
        .required(),
      dailyRentalRate: Joi.number()
        .label("Daily rental rate")
        .greater(0)
        .less(10)
        .required(),
    };
  }

  doSubmit = () => {
    // Apply change to movie
    let { movie, data, genres } = this.state;
    movie.title = data.title;
    movie.genre = genres.find((g) => g.name === data.genre);
    movie.numberInStock = data.numberInStock;
    movie.dailyRentalRate = data.dailyRentalRate;

    // Save in db
    movie = saveMovie(movie);

    // Save state
    this.setState({ movie });

    // Send the movie data to "/movies" route
    let navigate = this.props.useNavigateHook;
    navigate("/movies", { replace: true, state: movie });
  };

  render() {
    //let params = this.props.useParamsHook;
    //<h1> Movie : {params._id}</h1>
    return (
      <div style={{ justifyContent: "center", padding: 100 }}>
        <form onSubmit={this.handleSubmit}>
          <h1>Movie Form</h1>
          {this.renderInput("title")}
          {this.renderSelect(this.state.genres.map((g) => g.name))}
          {this.renderInput("numberInStock")}
          {this.renderInput("dailyRentalRate")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default withHooks(Movie);
