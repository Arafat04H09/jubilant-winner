import React from 'react';
import '../Stylesheets/About.css';
import '../Stylesheets/styles.css';

const AboutPage = () => {
  return (
    <div className="about-container with-navbar-margin">
      <h2 className="heading">About</h2>
      <p className="paragraph">
        Welcome to Sp.stats! This is a web application built with React to provide Spotify statistics and insights to users.
      </p>
      <p className="paragraph">
        With our app, you can track and visualize your Spotify data. We use the Spotify Web API to fetch user data, including top tracks, playlists, and more.
      </p>
      <p className="paragraph">
        To get started, you can log in with your Spotify account and authorize our app to access your Spotify data. Once logged in, you'll be able to view personalized statistics and visualize your music listening habits.
      </p>
      <p className="paragraph">
        Thank you for using our App!
      </p>
    </div>
  );
};

export default AboutPage;
