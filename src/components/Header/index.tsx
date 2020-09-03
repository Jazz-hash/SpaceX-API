import React from "react";
import { NavLink } from "react-router-dom";
import image from "./../../images/logo.jpg";

const Navigation = () => {
  return (
    <nav
      style={{ height: "55px", backgroundColor: "black" }}
      className="navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar"
    >
      <NavLink className="navbar-brand" activeClassName="active" to="/">
        <img src={image} height="35px" alt="logo" />
      </NavLink>

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
      <ul className="d-sm-block d-md-block d-lg-none mr-auto w-50 navbar-nav">
        <li className="row">
          <div className="col-6 col-sm-3">
            <NavLink
              activeClassName="active"
              className="nav-link"
              to="/launches"
            >
              Launches
            </NavLink>
          </div>
          <div className="col-6 col-sm-6">
            <NavLink activeClassName="active" className="nav-link" to="/about">
              About
            </NavLink>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
