// src/components/HomePage.js

import React from 'react';
import ProfileCard from './ProfileCard';
import TopTracks from './TopTracks';
import TopArtists from './TopArtists';
import RecentlyPlayed from './RecentlyPlayed';
import TimeSpent from './TimeSpent';
import GenreDistribution from './GenreDistribution';

const HomePage = () => {
  return (
    <div className="home-page">
      <ProfileCard />
      <TopTracks />
      <TopArtists />
      <RecentlyPlayed />
      <TimeSpent />
      <GenreDistribution />
    </div>
  );
};

export default HomePage;
