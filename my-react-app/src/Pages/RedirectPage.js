import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Stylesheets/styles.css';
import axios from 'axios';
import { useAccessToken } from '../AccessTokenProvider';

const RedirectPage = () => {
  const navigate = useNavigate();
  const { setAccessToken } = useAccessToken();
  
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');

    const redirect_uri = "http://localhost:3000/redirect"

    const payload = new URLSearchParams();
    payload.append('grant_type', "authorization_code");
    payload.append('code', code);
    payload.append('redirect_uri', redirect_uri);

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

        navigate('/home');
      }
    })
    .catch(error => {
      console.error('Error fetching access token:', error);
    });
  }, [navigate, setAccessToken]); 

  return (
    <div className='with-navbar-margin'>
      <p>Redirecting...</p>
    </div>
  );
};

export default RedirectPage;
