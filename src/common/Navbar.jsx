import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  navItems = [
    { name: "Movies", route: "/" },
    { name: "Customers", route: "/customers" },
    { name: "Rental", route: "/rentals" },
    { name: "Login", route: "/login" },
  ];

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand m-2" to="/">
            Vidly
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {this.navItems.map((i) => {
                return (
                  <Link className="nav-link" to={i.route} key={i.name}>
                    <li className="nav-item">
                      <span
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-expanded="false"
                      >
                        {i.name}
                      </span>
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
