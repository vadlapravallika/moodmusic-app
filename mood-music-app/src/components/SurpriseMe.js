import React, { useState } from 'react';

const SurpriseMe = ({ onSurpriseMood }) => {
  const moods = ['Happy', 'Sad', 'Relaxed', 'Energetic'];
  const [selectedMood, setSelectedMood] = useState('');

  const handleSurprise = () => {
    const randomMood = moods[Math.floor(Math.random() * moods.length)];
    setSelectedMood(randomMood);
    onSurpriseMood(randomMood);
  };

  return (
    <div className="p-6 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Feeling Adventurous?</h2>
      <button
        onClick={handleSurprise}
        className="bg-indigo-500 text-white px-4 py-2 rounded mb-4"
      >
        Surprise Me
      </button>
      {selectedMood && (
        <p className="text-lg mt-2">Your mood is: <strong>{selectedMood}</strong></p>
      )}
    </div>
  );
};

export default SurpriseMe;
