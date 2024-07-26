import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className="navbar navbar-expand-lg   "
      style={{
        backgroundColor: props.mode === "dark" ? "black" : "rgb(19 160 189)",
      }}
    >
      <div className="container-fluid hstack gap-4">
        <Link
          className="navbar-brand "
          style={{ color: props.mode === "dark" ? "white" : "black" }}
          to="/"
        >
          {props.title}
        </Link>
        <button 
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item p-2">
              <Link
                className="nav-link  "
                aria-current="page"
                style={{ color: props.mode === "dark" ? "white" : "black" }}
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item p-2">
              <Link
                className="nav-link"
                style={{ color: props.mode === "dark" ? "white" : "black" }}
                to="/About"
              >
                {props.aboutText}
              </Link>
            </li>
          </ul>
          <div className="form-check ms-auto form-switch my-3 ">
            <input
              className="form-check-input  "
              onClick={props.toggleMode}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label "
              style={{ color: props.mode === "dark" ? "white" : "black" }}
              htmlFor="flexSwitchCheckDefault"
            >
              Dark Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Set Title",
  aboutText: "About",
};
