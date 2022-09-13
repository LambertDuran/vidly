import http from "./httpServices";
import config from "../config.json";
import jwtDecode from "jwt-decode";

const token = "token";

http.setJwt(getJwt());

async function login(email, password) {
  const { data: jwt } = await http.post(config.authEndpoint, {
    email,
    password,
  });
  localStorage.setItem(token, jwt);
}

function loginWithJwt(jwt) {
  localStorage.setItem(token, jwt);
}

function logout() {
  localStorage.removeItem(token);
}

function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(token);
    const jwtUser = jwtDecode(jwt);
    return jwtUser;
  } catch (ex) {
    return null;
  }
}

function getJwt() {
  return localStorage.getItem(token);
}

const auth = {
  login,
  loginWithJwt,
  logout,
  getCurrentUser,
  getJwt,
};
export default auth;
