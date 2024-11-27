import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/mood-selector'); // Navigate to the Mood Selector page
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
      <h1 className="text-4xl font-bold mb-4">Welcome to Mood Music</h1>
      <p className="mb-6 text-lg">Discover music that matches your mood</p>
      <button
        onClick={handleGetStarted}
        className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold"
      >
        Get Started
      </button>
    </div>
  );
};

export default LandingPage;
