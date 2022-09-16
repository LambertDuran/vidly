import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import auth from "./services/authServices";
import Movies from "./Movies";
import NavBar from "./common/Navbar";
import Customers from "./Customers";
import Rentals from "./Rentals";
import NotFound from "./common/NotFound";
import Movie from "./Movie";
import LoginForm from "./LoginForm";
import Logout from "./logout";
import RegisterForm from "./RegisterForm";
import ProtectedRoute from "./ProtectedRoute";
import "./App.css";
import "react-toastify/dist/ReactToastify.min.css";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(auth.getCurrentUser());
  }, []);

  return (
    <div>
      <ToastContainer />
      <NavBar user={user} />
      <Routes>
        <Route path="/" element={<Movies user={user} />}></Route>
        <Route path="movies" element={<Movies user={user} />}></Route>
        <Route path="customers" element={<Customers />}></Route>
        <Route path="rentals" exact element={<Rentals />}></Route>
        <Route path="login" exact element={<LoginForm />}></Route>
        <Route path="register" exact element={<RegisterForm />}></Route>
        <Route
          path="movie/:_id"
          exact
          element={
            <ProtectedRoute user={user}>
              <Movie />
            </ProtectedRoute>
          }
        ></Route>
        <Route path="logout" exact element={<Logout />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
};

export default App;
