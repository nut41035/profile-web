import React, { Component } from "react";
import { NavLink } from "react-router-dom";

// import List from "./List";

class Header extends Component {
  render() {
    return (
      <div id="top" style={{ zIndex: 20 }}>
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li>
              <NavLink to="/profile">
                <span>Profile</span>
              </NavLink>
            </li>
            <li className="current">
              <NavLink to="/paper">
                <span style={{ color: "#f06000" }}>Paper</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact">
                <span>Contact</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
