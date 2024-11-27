import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MoodSelector = ({ onMoodSelect }) => {
  const [mood, setMood] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (mood) {
      onMoodSelect(mood); // Pass the mood to the parent component
      navigate('/playlist'); // Navigate to the playlist page
    } else {
      alert('Please enter a mood!');
    }
  };

  return (
    <div className="p-6 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Select Your Mood</h2>
      <input
        type="text"
        placeholder="Enter your mood..."
        value={mood}
        onChange={(e) => setMood(e.target.value)}
        className="w-full border px-4 py-2 rounded mb-4"
      />
      <button
        onClick={handleSubmit}
        className="bg-indigo-500 text-white px-4 py-2 rounded"
      >
        Submit
      </button>
    </div>
  );
};

export default MoodSelector;
