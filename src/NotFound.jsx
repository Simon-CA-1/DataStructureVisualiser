import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';
import Navbar from './navbar.jsx';

const NotFound = () => {
  return (
    <>
      <Navbar />
    <div className="notfound-container">
      <h1 className="notfound-title">404 - Not Found</h1>
      <p className="notfound-text">
        Sorry, the page you are looking for does not exist.
      </p>
    </div>
  </>
  );
};

export default NotFound;
