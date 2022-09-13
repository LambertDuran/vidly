import { useEffect } from "react";
import auth from "./services/authServices";

const Logout = () => {
  useEffect(() => {
    auth.logout();
    window.location = "/";
  }, []);
};

export default Logout;
