import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Stylesheets/styles.css';
import '../Stylesheets/Home.css';
import axios from 'axios';
import { useAccessToken } from '../AccessTokenProvider'; // make sure this path is correct

const HomePage = () => {
  const { accessToken } = useAccessToken();

  useEffect(() => {
    if (!accessToken) return;

    axios.get('https://api.spotify.com/v1/me', {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }, [accessToken]);

  return (
    <div className="home-page with-navbar-margin">
      {/* ... Your home page content ... */}
        <div className="main-container">
          <div className="heading">
            Access Token: {accessToken}
          </div>
            <ul>
              <li>info1</li>
              <li>info2</li>
              <li>info3</li>
            </ul>
          <Link to="/">
            <button>Back to Landing Page</button>
          </Link>
        </div>

        <div className="container">
          <h2>xdxdxdxddxxdxdd</h2>
          <p>sadfsdf</p>
          sadfsdfs
        </div>
    </div>
    
  );
};

export default HomePage;
