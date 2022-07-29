import React, { Component } from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import styles from "./styles";

class MovieNavbar extends Component {
  constructor(props) {
    super(props);

    this.navItems = [
      { name: "Movies", route: "/" },
      { name: "Customers", route: "/customers" },
      { name: "Rental", route: "/rentals" }
    ];
  }

  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="md">
        <Container fluid>
          <Navbar.Brand>Vidly</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {this.navItems.map(navItem => {
                return (
                  <NavLink
                    key={navItem.name}
                    to={navItem.route}
                    className="m-2"
                    style={({ isActive }) =>
                      isActive ? undefined : styles.navItem
                    }
                  >
                    {navItem.name}
                  </NavLink>
                );
              })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default MovieNavbar;
