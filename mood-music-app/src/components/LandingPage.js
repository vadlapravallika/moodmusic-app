import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from "../LanguageContext";
import './LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();
  const { getTranslation } = useLanguage(); // Get the translation function

  const handleGetStarted = () => {
    navigate('/mood-selector'); // Navigate to the Mood Selector page
  };

  return (
    <div className="landing-page">
      <div className="content">
        <h1 className="title">{getTranslation("welcome")}</h1>  {/* Using the translated text */}
        <p className="subtitle">{getTranslation("moodSelector")}</p> {/* Using the translated text */}
        <button onClick={handleGetStarted} className="get-started-button">
          {getTranslation("getStarted")}  {/* Using the translated text */}
        </button>
      </div>
      <div className="image-container">
        <img src="/music-image.png" alt="Music" className="music-image" />
      </div>
    </div>
  );
};

export default LandingPage;
