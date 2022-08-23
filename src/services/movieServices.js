import http from "./httpServices";
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

  // récupérer le film dans la db
  let movieInDb =
    movies.find((m) => {
      return m._id === movie._id;
    }) || {};

  // modifier ses propriétés ou les créer s'il n'est pas encore dans la db
  movieInDb.title = movie.title;
  movieInDb.genreId = movie.genre._id;
  movieInDb.numberInStock = movie.numberInStock;
  movieInDb.dailyRentalRate = movie.dailyRentalRate;

  // Ajouter le film à la db s'il n'existe pas encore
  if (!movieInDb._id) await http.post(config.moviesEndpoint, movieInDb);
  // Sinon juste le modifier dans la db
  else {
    delete movieInDb._id;
    delete movieInDb.genre;
    await http.put(config.moviesEndpoint + "/" + movieInDb._id, movieInDb);
  }

  return movieInDb;
}

export { getMovies, deleteMovie, saveMovie };
