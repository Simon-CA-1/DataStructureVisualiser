import React, { useState } from "react";
import "./navbar.css";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleToggle = () => setDarkMode(!darkMode);

  return (
    <nav className={`navbar${darkMode ? " dark" : ""}`}>
      <button className="navbar-title navbar-btn">Data Structure Visualiser</button>
      <ul className="navbar-list">
        <li className="navbar-item">
          <button id="home-button">Home</button>
        </li>
        <li
          className="navbar-item"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <button className="navbar-btn">Data Structures ▼</button>
          <ul className={`dropdown${dropdownOpen ? " show" : ""}`}>
            <li className="dropdown-item">
              <button className="navbar-btn">Array</button>
            </li>
            <li className="dropdown-item">
              <button className="navbar-btn">Linked List</button>
            </li>
            <li className="dropdown-item">
              <button className="navbar-btn">Stack</button>
            </li>
            <li className="dropdown-item">
              <button className="navbar-btn">Queue</button>
            </li>
            <li className="dropdown-item">
              <button className="navbar-btn">Tree</button>
            </li>
            <li className="dropdown-item">
              <button className="navbar-btn">Graph</button>
            </li>
          </ul>
        </li>
        <li className="navbar-item">
          <button onClick={handleToggle} className="mode-toggle">
            {darkMode ? "🌙 Dark" : "☀️ Light"}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
