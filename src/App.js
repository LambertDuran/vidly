import React, { Component } from "react";
import "./App.css";
import MoviesTable from "./MoviesTable";
import MovieNavbar from "./Navbar";
import Customers from "./Customers";
import Rentals from "./Rentals";
import { Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";
import Movie from "./Movie";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <MovieNavbar />
        <Routes>
          <Route path="/" element={<MoviesTable />}></Route>
          <Route path="movies" element={<MoviesTable />}></Route>
          <Route path="customers" element={<Customers />}></Route>
          <Route path="rentals" exact element={<Rentals />}></Route>
          <Route path="movie/:_id" exact element={<Movie />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    );
  }
}

export default App;
