import React, { useState } from "react";
import "./Navbar.css";

const Navbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [searchVisible, setSearchVisible] = useState(true);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    document.body.classList.toggle("dark-theme", !isDarkTheme);
  };

  const toggleSearch = () => {
    setSearchVisible((prev) => !prev);
  };

  return (
    <nav className={`navbar ${isDarkTheme ? "dark" : ""}`}>
      <div className="navbar-logo">
        <h1>EventSpot Lite</h1>
      </div>
      <div className="navbar-search">
        {searchVisible ? (
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Find events"
            className={searchVisible ? "visible" : ""}
          />
        ) : (
          <button className="search-icon" onClick={toggleSearch}>
            <span className="material-symbols-outlined">search</span>
          </button>
        )}
      </div>
      <button className="theme-toggle" onClick={toggleTheme}>
      <span className="material-icons">
          {isDarkTheme ? "dark_mode" : "light_mode"}
        </span>
      </button>
    </nav>
  );
};

export default Navbar;
