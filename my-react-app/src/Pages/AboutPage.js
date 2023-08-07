import React from 'react';
import '../Stylesheets/About.css';

const AboutPage = () => {
  return (
    <div className="about-container">
      <h2 className="about-heading">About</h2>
      <p className="about-paragraph">
        Welcome to (NAME)! This is a web application built with React to provide Spotify statistics and insights to users.
      </p>
      <p className="about-paragraph">
        With our app, you can track and visualize your Spotify data. We use the Spotify Web API to fetch user data, including top tracks, playlists, and more.
      </p>
      <p className="about-paragraph">
        To get started, you can log in with your Spotify account and authorize our app to access your Spotify data. Once logged in, you'll be able to view personalized statistics and visualize your music listening habits.
      </p>
      <p className="about-paragraph">
        Thank you for using our App!
      </p>
    </div>
  );
};

export default AboutPage;
