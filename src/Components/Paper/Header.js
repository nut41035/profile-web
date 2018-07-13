import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import { Card, Button } from "antd";

class Header extends Component {
  render() {
    return (
      <header id="top">
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
            <li>
              <NavLink to="/contact">
                <span>Contact</span>
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">Will update soon.</h1>
            <Card>
              <Button type="primary">Primary</Button>
              <Button>Default</Button>
              <Button type="dashed">Dashed</Button>
              <Button type="danger">Danger</Button>
            </Card>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
