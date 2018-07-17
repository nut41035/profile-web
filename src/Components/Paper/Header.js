import React, { Component } from "react";
import { NavLink } from "react-router-dom";

// import List from "./List";

class Header extends Component {
  render() {
    return (
      <div id="top" style={{ zIndex: 20 }}>
        <nav id="nav-wrap">
          <div class="Navbar">
            <div class="Navbar__Link Navbar__Link-toggle">
              <i class="fa fa-bars" />
            </div>
            <nav class="Navbar__Items">
              <div class="Navbar__Link">
                <NavLink to="/profile">
                  <span>Profile</span>
                </NavLink>
              </div>
              <div class="Navbar__Link">
                <NavLink to="/paper">
                  <span style={{ color: "#f06000" }}>Paper</span>
                </NavLink>
              </div>
              <div class="Navbar__Link">
                <NavLink to="/contact">
                  <span>Contact</span>
                </NavLink>
              </div>
            </nav>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
