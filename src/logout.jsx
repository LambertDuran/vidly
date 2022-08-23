import { useEffect } from "react";

const Logout = () => {
  useEffect(() => {
    localStorage.removeItem("token");
    window.location = "/";
  }, []);
};

export default Logout;
