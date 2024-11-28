import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/mood-selector'); // Navigate to the Mood Selector page
  };

  return (
    <div className="landing-page">
      <div className="content">
        <h1 className="title">Welcome to Mood Music</h1>
        <p className="subtitle">Discover music that matches your mood</p>
        <button onClick={handleGetStarted} className="get-started-button">
          Get Started
        </button>
      </div>
      <div className="image-container">
      <img src="/music-image.png" alt="Music" className="music-image" />

      </div>
    </div>
  );
};

export default LandingPage;
