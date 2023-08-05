// src/components/Authentication.js

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Authentication = () => {
  const [isLogged, setLogged] = useState(false);
  const history = useHistory();

  const handleLogin = () => {
    // Implement Spotify login logic here
    // Once the user is authenticated, setLogged(true);
    // Redirect the user to the Home page
    history.push('/');
  };

  const handleLogout = () => {
    // Implement Spotify logout logic here
    // Once the user is logged out, setLogged(false);
    // Redirect the user to the Landing page
    history.push('/');
  };

  return (
    <div className="authentication">
      {isLogged ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={handleLogin}>Login with Spotify</button>
      )}
    </div>
  );
};

export default Authentication;
