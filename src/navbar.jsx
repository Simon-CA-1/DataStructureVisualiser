import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleToggle = () => setDarkMode(!darkMode);

  return (
    <nav className={`navbar${darkMode ? " dark" : ""}`}>
      <Link to="/" className="navbar-title navbar-btn">
        Data Structure Visualiser
      </Link>
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-btn">
            Home
          </Link>
        </li>
        <li
          className="navbar-item"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <button className="navbar-btn">Data Structures ▼</button>
          <ul className={`dropdown${dropdownOpen ? " show" : ""}`}>
            <li className="dropdown-item">
              <Link to="/array" className="navbar-btn">Array</Link>
            </li>
            <li className="dropdown-item">
              <Link to="/linked-list" className="navbar-btn">Linked List</Link>
            </li>
            <li className="dropdown-item">
              <Link to="/stack" className="navbar-btn">Stack</Link>
            </li>
            <li className="dropdown-item">
              <Link to="/queue" className="navbar-btn">Queue</Link>
            </li>
            <li className="dropdown-item">
              <Link to="/tree" className="navbar-btn">Tree</Link>
            </li>
            <li className="dropdown-item">
              <Link to="/graph" className="navbar-btn">Graph</Link>
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
