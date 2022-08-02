import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

class NavBar extends Component {
  navItems = [
    { name: "Movies", route: "/" },
    { name: "Customers", route: "/customers" },
    { name: "Rental", route: "/rentals" },
    { name: "Login", route: "/login" }
  ];

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand m-2">Vidly</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {this.navItems.map(i => {
                return (
                  <li className="nav-item" key={i.name}>
                    <Link className="nav-link" to={i.route}>
                      <span
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                      >
                        {i.name}
                      </span>
                    </Link>
                  </li>
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
