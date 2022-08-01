import React, { Component } from "react";
import { NavLink } from "react-router-dom";

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
        <a className="navbar-brand m-2">Vidly</a>
        <button
          className="navbar-toggler m-2"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            {this.navItems.map(i => {
              return (
                <li className="nav-item" key={i.name}>
                  <NavLink className="nav-link" to={i.route}>
                    {i.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
