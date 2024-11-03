// src/SearchPage.jsx
import React from "react";

const SearchPage = () => {
  return (
    <div className="search-container" data-search-box>
      <div className="container">
        <button
          className="search-close-btn"
          aria-label="Close search"
          data-search-toggler
        >
          <ion-icon name="close-outline"></ion-icon>
        </button>
        <div className="search-wrapper">
          <input
            type="search"
            name="search"
            placeholder="Search Here..."
            aria-label="Search"
            className="search-field"
          />
          <button
            className="search-submit"
            aria-label="Submit"
            data-search-toggler
          >
            <ion-icon name="search-outline"></ion-icon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
