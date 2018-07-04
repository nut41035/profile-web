import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header id="home">
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
                <span>Paper</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;