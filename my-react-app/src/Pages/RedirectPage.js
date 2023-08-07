import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Stylesheets/styles.css';
import axios from 'axios';

const RedirectPage = ({getAccessToken}) => {
  const navigate = useNavigate();
  
  // useState returns the state, and the function to update the state
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    // Extract authorization code from URL
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');

    // Required redirect uri
    const redirect_uri = "http://localhost:3000/redirect"

    // Set up the request payload
    const payload = new URLSearchParams();
    payload.append('grant_type', "authorization_code");
    payload.append('code', code);
    payload.append('redirect_uri', redirect_uri);

    // Make the POST request to exchange the code for an access token
    axios.post('https://accounts.spotify.com/api/token', payload, {
      headers: {
        'Authorization': `Basic ${btoa(`${process.env.REACT_APP_SPOTIFY_CLIENT_ID}:${process.env.REACT_APP_SPOTIFY_CLIENT_SECRET}`)}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      json: true
    })
    .then(response => {
      if (response.status === 200) {
        console.log("200 OK")
        const newAccessToken = response.data.access_token;
        console.log(newAccessToken)
        setAccessToken(newAccessToken);
        getAccessToken(newAccessToken);

        // Redirect to homepage
        navigate('/home', { accessToken: newAccessToken });
      }
    })
    .catch(error => {
      console.error('Error fetching access token:', error);
    });

  }, [navigate, getAccessToken]); // dependencies for useEffect

  return (
    <div className='with-navbar-margin'>
      <p>Redirecting...</p>
    </div>
  );
};

export default RedirectPage;
