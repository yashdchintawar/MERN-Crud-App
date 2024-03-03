import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const userCurrentLocation = useLocation();
  console.log(userCurrentLocation.pathname);
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          MERN CRUD APP
        </a>
        <button
          className="navbar-toggler"
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
            <li className="nav-item">
              <Link to={"/"} className={`nav-link ${userCurrentLocation.pathname === '/' ? 'text-primary' : ''}`} >
                ALL USERS
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/create"} className={`nav-link ${userCurrentLocation.pathname === '/create' ? 'text-primary' : ''}`} >
                ADD USER
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
