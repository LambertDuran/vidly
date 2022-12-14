import React, { Component } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import _ from "lodash";
import { getMovies, deleteMovie } from "./services/movieServices";
import getGenres from "./services/genreService";
import MoviesTable from "./MoviesTable";
import Pagination from "./common/Pagination";
import GenreFilter from "./GenreFilter";
import AddMovie from "./AddMovie";
import SearchBar from "./common/SearchBar";
import styles from "./styles";

function withLocation(Movies) {
  return function WrappedComponent(props) {
    return <Movies {...props} useLocationValue={useLocation()} />;
  };
}

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      genres: [],
      currentPage: 0,
      currentGenre: { name: "All Genre", _id: Date.now().toString() },
      search: "",
      sortColumn: { path: "title", order: "asc" },
    };

    // Nombre de films maximum à afficher par page
    this.nbMoviesByPage = 4;

    // Get back the movie properties given by user from "/movie" route
    const movie = this.props.useLocationValue.state;

    if (movie) {
      let { movies } = { ...this.state };
      let index = movies.findIndex((m) => m._id === movie._id);
      if (index) movies[index] = movie;
    }
  }

  componentDidMount = async () => {
    const genres = await getGenres();
    genres.push(this.state.currentGenre);
    const movies = await getMovies();
    this.setState({ genres, movies });
  };

  handleSearch = (search) => {
    this.setState({ search: search, currentPage: 0 });
  };

  handlePage = (newPage) => {
    this.setState({ currentPage: newPage });
  };

  // Supprimer un film de la liste
  handleDelete = async (movie) => {
    // Sauvegarder le state
    const oldMovies = this.state.movies;

    // Supprimer le film du state
    const movies = this.state.movies.filter(
      (movieInList) => movieInList !== movie
    );

    // Trier les films + réactualiser les pages
    const { nbPages } = this.sortMovies();
    if (this.state.currentPage >= nbPages - 1)
      this.setState({ movies, currentPage: nbPages - 2 });
    else this.setState({ movies });

    // Supprimer le film de la db
    try {
      await deleteMovie(movie);
    } catch (ex) {
      toast.error(ex.response.data);

      // Ré-appliquer l'ancien state si une erreur
      this.setState({ movies: oldMovies });
    }
  };

  // Ajouter un film aux "Like"
  handleLike = (id) => {
    let movie = this.state.movies.find((m) => m._id === id);
    let movies = [...this.state.movies];
    movies[movies.indexOf(movie)].isLiked = !movie.isLiked;
    this.setState({ movies });
  };

  // Changer le filtre de "Genre"
  handleGenreChanged = (genre) => {
    this.setState({ currentPage: 0, currentGenre: genre });
  };

  // Faire un tri croissant ou décroissant de la liste
  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  // Filtrer en fonction du genre
  // Et trier en fonction d'une colonne
  sortMovies = () => {
    let { sortColumn, movies, genres, currentGenre, currentPage, search } =
      this.state;

    // Filtrer la liste des films en fct du genre sélectionné
    let filteredMovies = movies;
    if (currentGenre.name !== "All Genre" && search === "") {
      filteredMovies = movies.filter(
        (movie) => movie.genre._id === currentGenre._id
      );
    }
    // Filtre de recherche
    else if (search !== "") {
      // On remet le genre à "Tous les genres"
      currentGenre = genres[genres.length - 1];

      filteredMovies = filteredMovies.filter((m) =>
        m.title.toLowerCase().includes(search.toLowerCase())
      );
    }

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

    return { filteredMovies, moviesToPrint, nbPages, currentGenre };
  };

  printNbMovies = (filteredMovies) => {
    if (filteredMovies.length !== 0)
      return <h1>{filteredMovies.length} movies in the database</h1>;
    return <h1>No movie available :(</h1>;
  };

  render() {
    let { currentPage, genres, sortColumn } = this.state;
    const { user } = this.props;
    const { filteredMovies, moviesToPrint, nbPages, currentGenre } =
      this.sortMovies();

    return (
      <div className="App" style={{ paddingLeft: 10, paddingRight: 10 }}>
        <div className="container">
          <div style={styles.rowStyle}>
            {/* Filtre sur les genres de films */}
            <GenreFilter
              genres={genres}
              currentGenre={currentGenre}
              onChangeGenre={this.handleGenreChanged}
            ></GenreFilter>

            {/*Créer un nouveau film*/}
            {user && <AddMovie genres={genres} />}

            {/* Nombre de films dans la base de données */}
            <div className="col-6">{this.printNbMovies(filteredMovies)}</div>

            {/*Apply a filter to a reasearch*/}
            <SearchBar handleSearch={this.handleSearch} />
          </div>
        </div>

        {/* Liste de films */}
        {moviesToPrint.length && (
          <MoviesTable
            movies={moviesToPrint}
            currentPage={currentPage}
            nbMoviesByPage={this.nbMoviesByPage}
            onDelete={this.handleDelete}
            onLike={this.handleLike}
            onSort={this.handleSort}
            sortColumn={sortColumn}
          ></MoviesTable>
        )}

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
