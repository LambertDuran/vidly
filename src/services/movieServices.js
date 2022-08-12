import http from "./httpServices";
import config from "../config.json";

async function getMovies() {
  let { data: movies } = await http.get(config.moviesEndpoint);
  movies.push(null);
  return movies;
}

async function deleteMovie(movie) {
  const request = config.moviesEndpoint + "/" + movie._id;
  await http.delete(request);
}

export { getMovies, deleteMovie };
