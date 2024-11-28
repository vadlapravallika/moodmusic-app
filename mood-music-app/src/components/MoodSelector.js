import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MoodSelector.css'; // Import custom CSS

const MoodSelector = ({ onMoodSelect }) => {
  const [mood, setMood] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (mood) {
      onMoodSelect(mood);
      navigate('/playlist');
    } else {
      alert('Please select a mood!');
    }
  };

  const moodDescriptions = {
    Happy: 'Feeling cheerful and joyful! 😊',
    Sad: 'A bit down today, but it’s okay. 😢',
    Relaxed: 'Taking it easy and feeling peaceful. 😌',
    Energetic: 'Full of energy and ready to go! ⚡',
    Angry: 'Feeling a little fiery today! 😡',
  };

  return (
    <div className="mood-selector-container p-6 shadow rounded-lg">
      <h2 className="mood-selector-title text-2xl font-bold mb-4">
        Select Your Mood
      </h2>
      <select
        value={mood}
        onChange={(e) => setMood(e.target.value)}
        className="mood-selector-dropdown w-full border px-4 py-2 rounded mb-4"
      >
        <option value="" disabled>
          -- Choose a Mood --
        </option>
        <option value="Happy">Happy </option>
        <option value="Sad">Sad </option>
        <option value="Relaxed">Relaxed </option>
        <option value="Energetic">Energetic </option>
        <option value="Angry">Angry </option>
      </select>

      {mood && (
        <p className="mood-description text-indigo-600 mb-4">
          {moodDescriptions[mood]}
        </p>
      )}

      <button
        onClick={handleSubmit}
        className="submit-button bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 transition duration-300 ease-in-out"
      >
        Submit
      </button>

      {mood && (
        <div className="emoji-animation">
          <span role="img" aria-label={mood}>
            {moodDescriptions[mood].match(/(\p{Emoji}+)/u)[0]}
          </span>
        </div>
      )}
    </div>
  );
};

export default MoodSelector;
