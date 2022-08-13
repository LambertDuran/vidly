import http from "./httpServices";
import getGenres from "./genreService";
import config from "../config.json";

async function getMovies() {
  let { data: movies } = await http.get(config.moviesEndpoint);
  return movies;
}

async function deleteMovie(movie) {
  const request = config.moviesEndpoint + "/" + movie._id;
  await http.delete(request);
}

async function saveMovie(movie) {
  const movies = await getMovies();
  const genres = await getGenres();

  // récupérer le film dans la db
  let movieInDb = movies.find((m) => m._id === movie._id) || {};

  // modifier ses propriétés ou les créer s'il n'est pas encore dans la db
  movieInDb.title = movie.title;
  movieInDb.genre = genres.find((g) => g._id === movie.genre._id);
  movieInDb.numberInStock = movie.numberInStock;
  movieInDb.dailyRentalRate = movie.dailyRentalRate;

  // Ajouter le film à la db s'il n'existe pas encore
  if (!movieInDb._id) {
    movieInDb._id = Date.now().toString();
    await http.post(config.moviesEndpoint, movieInDb);

    // Sinon juste le modifier dans la db
  } else await http.put(config.moviesEndpoint + "/" + movieInDb._id, movieInDb);

  return movieInDb;
}

export { getMovies, deleteMovie, saveMovie };
