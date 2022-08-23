import http from "./httpServices";
import config from "../config.json";

export function resgister(user) {
  return http.post(config.usersEndpoint, {
    email: user.userName,
    password: user.password,
    name: user.pseudo,
  });
}
