// src/components/SearchBox.js
import React from "react";
import "./SearchBox.css";

const SearchBox = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Don't render if not open

  return (
    <div className="search-container">
      <button className="search-close-btn" onClick={onClose}>
        Close
      </button>
      <div className="search-wrapper">
        <input
          type="search"
          placeholder="Search Here..."
          className="search-field"
        />
        <button className="search-submit">Search</button>
      </div>
    </div>
  );
};

export default SearchBox;
