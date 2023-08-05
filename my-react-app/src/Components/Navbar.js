// src/components/Navbar.js

import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        {/* Add more navigation links as needed */}
        <li><a href="/logout">Logout</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
