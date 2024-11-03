// src/Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import "ionicons/icons";

const Header = () => {
  return (
    <header className="header" data-header>
      <div className="container">
        <h1>
          <Link to="/" className="logo">
            Educonnect
          </Link>
        </h1>
        <nav className="navbar" data-navbar>
          <div className="navbar-top">
            <Link to="/" className="logo">
              Educonnect
            </Link>
            <button
              className="nav-close-btn"
              aria-label="Close menu"
              data-nav-toggler
            >
              <ion-icon name="close-outline"></ion-icon>
            </button>
          </div>
          <ul className="navbar-list">
            {["Home", "About", "Courses", "Event", "Blog", "Contact"].map(
              (item, index) => (
                <li className="navbar-item" key={index}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="navbar-link"
                    data-nav-toggler
                  >
                    {item}
                  </Link>
                </li>
              )
            )}
            {/* <li className="navbar-item">
              <Link to="/search" className="navbar-link" data-nav-toggler>
                Search
              </Link>
            </li> */}
          </ul>
        </nav>
        <div className="header-actions">
          <button
            className="header-action-btn"
            aria-label="Open search"
            data-search-toggler
          >
            <ion-icon name="search-outline"></ion-icon>
          </button>
          <Link to="/login" className="header-action-btn login-btn">
            <ion-icon name="person-outline" aria-hidden="true"></ion-icon>
            <span className="span">Login / Register</span>
          </Link>
          <button
            className="header-action-btn nav-open-btn"
            aria-label="Open menu"
            data-nav-toggler
          >
            <ion-icon name="menu-outline"></ion-icon>
          </button>
        </div>
        <div className="overlay" data-nav-toggler data-overlay></div>
      </div>
    </header>
  );
};

export default Header;
