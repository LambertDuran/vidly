import { useEffect, useState } from "react";
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
import Logout from "./logout";
import RegisterForm from "./RegisterForm";
import "./App.css";
import "react-toastify/dist/ReactToastify.min.css";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    try {
      console.log("useEffect");
      const jwt = localStorage.getItem("token");
      const jwtUser = jwtDecode(jwt);
      console.log("user", jwtUser);
      setUser(jwtUser);
    } catch (ex) {}
  }, []);

  return (
    <div>
      <ToastContainer />
      <NavBar user={user} />
      <Routes>
        <Route path="/" element={<Movies />}></Route>
        <Route path="movies" element={<Movies />}></Route>
        <Route path="customers" element={<Customers />}></Route>
        <Route path="rentals" exact element={<Rentals />}></Route>
        <Route path="login" exact element={<LoginForm />}></Route>
        <Route path="register" exact element={<RegisterForm />}></Route>
        <Route path="movie/:_id" exact element={<Movie />}></Route>
        <Route path="logout" exact element={<Logout />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
};

export default App;
