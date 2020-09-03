import React from "react";
import { NavLink } from "react-router-dom";
import image from "./../logo.jpg";

const Navigation = () => {
  return (
    <nav
      style={{ height: "55px", backgroundColor: "black" }}
      className="navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar"
    >
      <NavLink className="navbar-brand" activeClassName="active" to="/">
        <img src={image} height="35px" alt="logo" />
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink activeClassName="active" className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeClassName="active"
              className="nav-link"
              to="/launches"
            >
              Launches
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="active" className="nav-link" to="/about">
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
