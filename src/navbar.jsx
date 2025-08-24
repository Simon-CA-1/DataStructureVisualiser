import React, { useState } from "react";
import "./navbar.css";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleToggle = () => setDarkMode(!darkMode);

  return (
    <nav className={`navbar${darkMode ? " dark" : ""}`}>
      <div className="navbar-title">Data Structure Visualiser</div>
      <ul className="navbar-list">
        <li className="navbar-item">Home</li>
        <li
          className="navbar-item"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          Data Structures ▼
          {dropdownOpen && (
            <ul className="dropdown">
              <li className="dropdown-item">Array</li>
              <li className="dropdown-item">Linked List</li>
              <li className="dropdown-item">Stack</li>
              <li className="dropdown-item">Queue</li>
              <li className="dropdown-item">Tree</li>
              <li className="dropdown-item">Graph</li>
            </ul>
          )}
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
