import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import '../Stylesheets/LandingPage.css';
import '../Stylesheets/styles.css';

const LandingPage = () => {
  const [accessToken, setAccessToken] = useState(null);
  const [covers, setCovers] = useState([]);

  const redirectUri = "http://localhost:3000/redirect";
  const scope = 'user-read-currently-playing user-follow-read user-top-read user-read-recently-played';

  const loginButtonClick = () => {
    const authUrl = `https://accounts.spotify.com/authorize?` +
    'response_type=code' +
    `&client_id=${process.env.REACT_APP_SPOTIFY_CLIENT_ID}` +
    `&scope=${encodeURIComponent(scope)}` +
    `&redirect_uri=${encodeURIComponent(redirectUri)}`;

    window.location.href = authUrl;
  };

  const fetchAlbumArt = useCallback(async () => {
    try {
      const response = await axios.get('https://api.spotify.com/v1/playlists/37i9dQZEVXbMDoHDwVN2tF/tracks', {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      });

      const albumUrls = response.data.items.map(item => item.track.album.images[0].url);
      setCovers(albumUrls);
    } catch (error) {
      console.error('Error fetching album art:', error);
    }
  }, [accessToken]);

  useEffect(() => {
    const fetchAccessTokenFromLambda = async () => {
      try {
        const response = await axios.get('https://4szuodtfpj.execute-api.us-east-2.amazonaws.com/prod');
        setAccessToken(response.data.access_token);
      } catch (error) {
        console.error('Error fetching access token from Lambda:', error);
      }
    };

    fetchAccessTokenFromLambda();

    const tokenRefreshInterval = 3600 * 1000;
    const intervalId = setInterval(fetchAccessTokenFromLambda, tokenRefreshInterval);

    return () => clearInterval(intervalId);

  }, []);

  useEffect(() => {
    if (accessToken) {
      fetchAlbumArt();
    }
  }, [accessToken, fetchAlbumArt]);

  const handleAnimationEnd = (index) => {
    const newCovers = [...covers];
    const [finishedCover] = newCovers.splice(index, 1);
    newCovers.push(finishedCover);
    setCovers(newCovers);
  };

  return (
    <div className="landing-page with-navbar-margin">
      <header>
        <h1>Welcome to Your Spotify Statistics!</h1>
        <p>Track and visualize your Spotify data like never before.</p>
      </header>
      <main>
        {covers.map((cover, index) => (
          <img 
            className="album-cover"
            style={{ 
              animation: `moveUpFadeOut ${15 + Math.random() * 10}s linear ${index * 3}s infinite`,
              left: `${Math.random() * 90}vw`,
            }}
            src={cover} 
            alt="album cover" 
            key={index}
            onAnimationEnd={() => handleAnimationEnd(index)} 
          />
        ))}
        <button className="login-button" onClick={loginButtonClick}>Login with Spotify</button>
      </main>
      <footer>
        <p>Powered by Spotify API and AWS</p>
      </footer>
    </div>
  );
}

export default LandingPage;
