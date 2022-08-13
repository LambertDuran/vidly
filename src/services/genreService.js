import http from "./httpServices";
import config from "../config.json";

async function getGenres() {
  let { data: genres } = await http.get(config.genreEndpoint);
  return genres;
}

export default getGenres;
