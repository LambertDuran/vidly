import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import jwtDecode from "jwt-decode";
import Movies from "./Movies";
import NavBar from "./common/Navbar";
import Customers from "./Customers";
import Rentals from "./Rentals";
import NotFound from "./common/NotFound";
import Movie from "./Movie";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import "./App.css";
import "react-toastify/dist/ReactToastify.min.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    try {
      const jwt = localStorage.getItem("token");
      const user = jwtDecode(jwt);
      this.setState({ user });
    } catch (ex) {}
  }

  render() {
    return (
      <div>
        <ToastContainer />
        <NavBar user={this.state.user} />
        <Routes>
          <Route path="/" element={<Movies />}></Route>
          <Route path="movies" element={<Movies />}></Route>
          <Route path="customers" element={<Customers />}></Route>
          <Route path="rentals" exact element={<Rentals />}></Route>
          <Route path="login" exact element={<LoginForm />}></Route>
          <Route path="register" exact element={<RegisterForm />}></Route>
          <Route path="movie/:_id" exact element={<Movie />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    );
  }
}

export default App;
