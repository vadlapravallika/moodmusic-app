import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../LanguageContext"; // Import Language Context

const MoodSelector = ({ onMoodSelect }) => {
  const [mood, setMood] = useState("");
  const navigate = useNavigate();
  const { getTranslation } = useLanguage(); // Access the translation function

  useEffect(() => {
    if (mood) {
      onMoodSelect(mood); // Pass the selected mood to the parent
      navigate("/playlist"); // Navigate to the Playlist page
    }
  }, [mood, navigate, onMoodSelect]);

  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: `url('/moodselector.webp')`, // Correct the closing quote and ensure the path is correct
      }}
    >
      {/* Mood Selector Card */}
      <div className="absolute top-5 right-5 bg-gray-800 bg-opacity-90 rounded-lg shadow-lg p-4 w-1/4">
        {/* Title */}
        <h2 className="text-xl font-extrabold text-white mb-4 text-center">
          {getTranslation("selectYourMood")}
        </h2>

        {/* Dropdown */}
        <select
          value={mood}
          onChange={(e) => setMood(e.target.value)}
          className="w-full px-3 py-2 text-black rounded-lg focus:ring-2 focus:ring-teal-400"
        >
          <option value="" disabled>
            {getTranslation("chooseMood")}
          </option>
          <option value="Happy">{getTranslation("happy")}</option>
          <option value="Sad">{getTranslation("sad")}</option>
          <option value="Relaxed">{getTranslation("relaxed")}</option>
          <option value="Energetic">{getTranslation("energetic")}</option>
          <option value="Angry">{getTranslation("angry")}</option>
        </select>
      </div>
    </div>
  );
};

export default MoodSelector;
