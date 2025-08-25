import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleToggle = () => setDarkMode(!darkMode);

  useEffect(() => {
    document.body.style.background = darkMode ? "#222" : "#f5f5f5";
    document.body.style.color = darkMode ? "#fff" : "#222";
  }, [darkMode]);

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
              <Link to="/Array" className="navbar-btn">Array</Link>
            </li>
            <li className="dropdown-item">
              <Link to="/Linked-List" className="navbar-btn">Linked List</Link>
            </li>
            <li className="dropdown-item">
              <Link to="/Stack" className="navbar-btn">Stack</Link>
            </li>
            <li className="dropdown-item">
              <Link to="/Queue" className="navbar-btn">Queue</Link>
            </li>
            <li className="dropdown-item">
              <Link to="/Tree" className="navbar-btn">Tree</Link>
            </li>
            <li className="dropdown-item">
              <Link to="/Graph" className="navbar-btn">Graph</Link>
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
