import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/flexbit-icon.jpg";

// Short, clean, and presentational 🔥🔥🔥
const Nav = ({ toggleLogin, user, logout }) => {
  return (
    <nav className="navbar is-transparent">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img src={logo} alt="Flexbit Icon" width="30" height="30" />
        </a>
        <div
          className="navbar-burger burger"
          data-target="navbarExampleTransparentExample"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navbarExampleTransparentExample" className="navbar-menu">
        <div className="navbar-start">
          <NavLink
            className="navbar-item"
            exact
            to={"/"}
            activeClassName="active"
          >
            Home
          </NavLink>
          <NavLink
            className="navbar-item"
            to={"/exerciseList"}
            activeClassName="active"
          >
            Exercises
          </NavLink>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="field is-grouped">
              <p className="control">
                {user ? (
                  <button className="button is-primary" onClick={logout}>
                    Logout
                  </button>
                ) : (
                  <button className="button is-primary" onClick={toggleLogin}>
                    Login
                  </button>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
