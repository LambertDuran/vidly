import React, { Component } from "react";
import { getMovies } from "./fakeMovieService";
import { getGenres } from "./fakeGenreService";
import MoviesTable from "./MoviesTable";
import Pagination from "./Pagination";
import GenreFilter from "./GenreFilter";
import _ from "lodash";
import { useLocation } from "react-router-dom";

function withLocation(Movies) {
  return function WrappedComponent(props) {
    return <Movies {...props} useLocationValue={useLocation()} />;
  };
}

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: getMovies(),
      currentPage: 0,
      genres: getGenres(),
      currentGenre: null,
      sortColumn: { path: "title", order: "asc" }
    };

    this.state.genres.push(null);

    // Nombre de films maximum à afficher par page
    this.nbMoviesByPage = 4;
  }

  handlePage = newPage => {
    this.setState({ currentPage: newPage });
  };

  // Supprimer un film de la liste
  handleDelete = movie => {
    const movies = this.state.movies.filter(
      movieInList => movieInList !== movie
    );

    const { nbPages } = this.sortMovies();
    if (this.state.currentPage >= nbPages - 1)
      this.setState({ movies, currentPage: nbPages - 2 });

    this.setState({ movies });
  };

  // Ajouter un film aux "Like"
  handleLike = id => {
    let movie = this.state.movies.find(m => m._id === id);
    let movies = [...this.state.movies];
    movies[movies.indexOf(movie)].isLiked = !movie.isLiked;
    this.setState({ movies });
  };

  // Changer le filtre de "Genre"
  handleGenreChanged = genre => {
    this.setState({ currentPage: 0, currentGenre: genre });
  };

  // Faire un tri croissant ou décroissant de la liste
  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  // Filtrer en fonction du genre
  // Et trier en fonction d'une colonne
  sortMovies = () => {
    let { sortColumn, movies, currentGenre, currentPage } = this.state;

    // Filtrer la liste des films en fct du genre sélectionné
    let filteredMovies = movies;
    if (currentGenre !== null)
      filteredMovies = movies.filter(
        movie => movie.genre._id === currentGenre._id
      );

    // Appliquer un ordre croissant ou décroissant
    filteredMovies = _.orderBy(
      filteredMovies,
      [sortColumn.path],
      [sortColumn.order]
    );

    // Nombre de pages
    const nbPages = Math.ceil(filteredMovies.length / this.nbMoviesByPage);

    // Calcul de la liste des films à afficher
    const nbMovieStart = this.nbMoviesByPage * currentPage;
    let nbMovieEnd = this.nbMoviesByPage * (currentPage + 1);
    if (nbMovieEnd >= filteredMovies.length) nbMovieEnd = filteredMovies.length;
    const moviesToPrint = filteredMovies.slice(nbMovieStart, nbMovieEnd);

    return { filteredMovies, moviesToPrint, nbPages };
  };

  printNbMovies = filteredMovies => {
    if (filteredMovies.length !== 0)
      return <h1>{filteredMovies.length} movies in the database :</h1>;
    return <h1>No movie available :(</h1>;
  };

  render() {
    let { currentPage, genres, currentGenre, sortColumn } = this.state;

    // Get back the movie properties given by user from "/movie" route
    const useLocationValue = this.props.useLocationValue;
    const movie = useLocationValue.state;
    console.log(movie);

    const { filteredMovies, moviesToPrint, nbPages } = this.sortMovies();

    return (
      <div className="App" style={{ paddingLeft: 20, paddingRight: 20 }}>
        <div className="container">
          <div className="row">
            {/* Filtre sur les genres de films */}
            <div className="col">
              <GenreFilter
                genres={genres}
                currentGenre={currentGenre}
                onChangeGenre={this.handleGenreChanged}
              ></GenreFilter>
            </div>

            {/* Nombre de films dans la base de données */}
            <div className="col-8">{this.printNbMovies(filteredMovies)}</div>
          </div>
        </div>

        {/* Liste de films */}
        <MoviesTable
          movies={moviesToPrint}
          currentPage={currentPage}
          nbMoviesByPage={this.nbMoviesByPage}
          onDelete={this.handleDelete}
          onLike={this.handleLike}
          onSort={this.handleSort}
          sortColumn={sortColumn}
        ></MoviesTable>

        {/* Gestionnaire de pages */}
        {filteredMovies.length > this.nbMoviesByPage && (
          <Pagination
            currentPage={currentPage}
            onPageChanged={this.handlePage}
            nbPages={nbPages}
          ></Pagination>
        )}
      </div>
    );
  }
}

// Export Movies component wrapped with location hook
export default withLocation(Movies);
