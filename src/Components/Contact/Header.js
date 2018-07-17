import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div id="top">
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
                  <span>Paper</span>
                </NavLink>
              </div>
              <div class="Navbar__Link">
                <NavLink to="/contact">
                  <span style={{ color: "#f06000" }}>Contact</span>
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
