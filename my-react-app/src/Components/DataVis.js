// src/components/TopTracks.js

import React from 'react';
import Chart from 'chart.js';

const TopTracks = () => {
  // Sample data for Top Tracks
  const topTracksData = {
    labels: ['Track 1', 'Track 2', 'Track 3', 'Track 4', 'Track 5'],
    data: [500, 300, 200, 150, 100],
  };

  React.useEffect(() => {
    const ctx = document.getElementById('top-tracks-chart').getContext('2d');
    new Chart(ctx, {
      type: 'horizontalBar',
      data: {
        labels: topTracksData.labels,
        datasets: [{
          label: 'Top Tracks',
          data: topTracksData.data,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: { beginAtZero: true },
        },
      },
    });
  }, []);

  return (
    <div className="top-tracks">
      <h2>Top Tracks</h2>
      <canvas id="top-tracks-chart" width="400" height="200"></canvas>
    </div>
  );
};

export default TopTracks;
