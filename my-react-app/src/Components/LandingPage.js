// src/components/LandingPage.js

import React from 'react';
import '../LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header>
        <h1>Welcome to Your Spotify Statistics!</h1>
        <p>Track and visualize your Spotify data like never before.</p>
      </header>
      <main>
        <button className="login-button">
          Login with Spotify  
        </button>
      </main>
      <footer>
        <p>Powered by Spotify API and AWS</p>
      </footer>
    </div>
  );
};

export default LandingPage;
