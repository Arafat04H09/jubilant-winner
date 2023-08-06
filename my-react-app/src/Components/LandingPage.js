import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import './LandingPage.css';

const LandingPage = () => {
  const [accessToken, setAccessToken] = useState(null);
  const [covers, setCovers] = useState([]);

  const redirectUri = "http://localhost:3000/redirect"
  const spotifyLoginUrl = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_SPOTIFY_CLIENT_ID}&redirect_uri=${redirectUri}&response_type=token`;

  const fetchAlbumArt = useCallback(async () => {
    try {
      // Fetch album art
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
    // Function to fetch the access token
    const fetchAccessToken = async () => {
      try {
        // Make the API request to get the access token
        const params = new URLSearchParams();
        params.append('grant_type', 'client_credentials');

        const response = await axios.post(
          'https://accounts.spotify.com/api/token',
          params,
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              'Authorization': `Basic ${btoa(`${process.env.REACT_APP_SPOTIFY_CLIENT_ID}:${process.env.REACT_APP_SPOTIFY_CLIENT_SECRET}`)}`
            }
          }
        );

        // Update the access token in the state
        setAccessToken(response.data.access_token);
      } catch (error) {
        console.error('Error fetching access token:', error);
      }
    };

    // Call the function to fetch the access token
    fetchAccessToken();

    // Schedule a token refresh after 1 hour (3600 seconds)
    const tokenRefreshInterval = 3600 * 1000; // 1 hour in milliseconds
    const intervalId = setInterval(fetchAccessToken, tokenRefreshInterval);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);

  }, []); // Empty array means this useEffect runs once on mount and cleanup on unmount
  
  useEffect(() => {
    // Fetch album art when the access token changes
    if (accessToken) {
      fetchAlbumArt();
    }
  }, [accessToken, fetchAlbumArt]); // Run this useEffect whenever accessToken or fetchAlbumArt changes

  const handleAnimationEnd = (index) => {
    // Remove the album cover that just finished animating
    const newCovers = [...covers];
    const [finishedCover] = newCovers.splice(index, 1);

    // Add it back to the end of the array
    newCovers.push(finishedCover);

    // Update the covers state
    setCovers(newCovers);
  };

  return (
    <div className="landing-page">
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
      <header>
        <h1>Welcome to Your Spotify Statistics!</h1>
        <p>Track and visualize your Spotify data like never before.</p>
      </header>
      <main>
        <a href={spotifyLoginUrl}>
          <button className="login-button">Login with Spotify</button>
        </a>
      </main>
      <footer>
        <p>Powered by Spotify API and AWS</p>
      </footer>
    </div>
  );
};


export default LandingPage;
