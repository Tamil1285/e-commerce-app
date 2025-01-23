import React from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { BsGeoAlt, BsHeart, BsPersonCircle, BsCart3 } from 'react-icons/bs';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        {/* Logo and Name */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="https://png.pngtree.com/png-clipart/20210310/original/pngtree-financial-institution-logo-png-image_5922926.jpg"
            alt="Logo"
            style={{ width: '50px', marginRight: '8px' }}
          />
          <span>BrandName</span>
        </Link>

        {/* Toggle button for mobile view */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          {/* Search Bar */}
          <form className="d-flex mx-auto my-2 my-lg-0 w-100" style={{ flexGrow: 1 }}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success pt-0" type="submit">
              Search
            </button>
          </form>

          {/* Right-side Icons */}
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center" href="#">
                <BsGeoAlt className="me-1" /> 
                <span className="d-none d-lg-inline">Location</span>
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link d-flex align-items-center" to="/favorites">
                <BsHeart className="me-1" /> 
                <span className="d-none d-lg-inline">Favorites</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="nav-link d-flex align-items-center">
               <BsCart3 className="me-1" /> 
                <span className="d-none d-lg-inline">Cart</span>
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center" href="#">
                <BsPersonCircle className="me-1" /> 
                <span className="d-none d-lg-inline">Login</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
