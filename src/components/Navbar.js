import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg   "  style={{backgroundColor: props.mode==='dark'?'black':'rgb(19 160 189)'}}  >
    <div className="container-fluid">
      <a className="navbar-brand " style = {{color: props.mode==='dark'?'white':'black'}} href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" style = {{color: props.mode==='dark'?'white':'black'}} href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" style = {{color: props.mode==='dark'?'white':'black'}} href="/">{props.aboutText}</a>
         </li>
        </ul>
          <div className="form-check form-switch my-3 mx-5">
  <input className="form-check-input " onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" style = {{color: props.mode==='dark'?'white':'black'}} htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
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
