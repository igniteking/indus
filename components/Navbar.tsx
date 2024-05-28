import Image from "next/image";
import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bord main-bg">
      <div className="container">
        <a className="logo icon-img-100" href="#">
          <img src="../logo.png" alt="logo" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a
                className="nav-link"
                data-toggle="dropdown"
                href="/"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="rolling-text">Home</span>
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link"
                data-toggle="dropdown"
                href="/about"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="rolling-text">About</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="rolling-text">Service</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-toggle="dropdown"
                href="/video"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="rolling-text">Videos</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                <span className="rolling-text">Contact</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="search-form">
          <div className="form-group">
            <input type="text" name="search" placeholder="Search" />
            <button>
              <span className="pe-7s-search"></span>
            </button>
          </div>
          <div className="search-icon">
            <span className="pe-7s-search open-search"></span>
            <span className="pe-7s-close close-search"></span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
