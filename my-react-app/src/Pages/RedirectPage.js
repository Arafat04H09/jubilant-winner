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

    const redirect_url = "http://localhost:3000/redirect"

    const payload = new URLSearchParams();
    payload.append('grant_type', "authorization_code");
    payload.append('code', code);
    payload.append('redirect_url', redirect_url);

    axios.post(' https://jttpz64lgh.execute-api.us-east-2.amazonaws.com/exchange', payload)

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
