import http from "./httpServices";

const apiEndpoint = "http://localhost:3900/api/genres";

async function getGenres() {
  let { data: genres } = await http.get(apiEndpoint);
  genres.push(null);
  return genres;
}

export default getGenres;
