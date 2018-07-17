import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.iam;
      var occupation = this.props.data.occupation;
      var description = this.props.data.description;
      var city = this.props.data.address.city;
      var networks = this.props.data.social.map(function(network) {
        return (
          <li key={network.name}>
            <a href={network.url}>
              <i className={network.className} />
            </a>
          </li>
        );
      });
    }

    return (
      <header id="top">
        <nav id="nav-wrap">
          <div class="Navbar">
            <nav class="Navbar__Items">
              <div class="Navbar__Link">
                <NavLink to="/profile">
                  <span style={{ color: "#f06000" }}>Profile</span>
                </NavLink>
              </div>
              <div class="Navbar__Link">
                <NavLink to="/paper">
                  <span>Paper</span>
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

        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">I'm {name}.</h1>
            <h3>
              I'm a {city} based <span>{occupation}</span>. {description}.
            </h3>
            <hr />
            <ul className="social">{networks}</ul>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle" />
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
