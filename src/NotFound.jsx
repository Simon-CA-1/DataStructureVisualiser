import React from 'react';
import { Link } from 'react-router-dom';
const NotFound = () => {
  return (
    <div>
      <h1>404 - Not Found</h1>
      <p>
        Sorry, the page you are looking for does not exist. You can go back to the <Link to="/">home page</Link>.
      </p>
    </div>
  );
};

export default NotFound;
