import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home-page">
      {/* ... Your home page content ... */}
      <Link to="/">
        <button>Back to Landing Page</button>
      </Link>
    </div>
  );
};

export default HomePage;
