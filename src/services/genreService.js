import http from "./httpServices";
import config from "../config.json";

async function getGenres() {
  let { data: genres } = await http.get(config.genreEndpoint);
  genres.push(null);
  return genres;
}

export default getGenres;
