import React, { useState } from 'react';

const MoodTracker = () => {
  const [moodHistory, setMoodHistory] = useState([]);
  const [mood, setMood] = useState('');

  const addMood = () => {
    setMoodHistory([...moodHistory, { mood, date: new Date().toLocaleString() }]);
    setMood('');
  };

  return (
    <div className="p-6 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Mood Tracker</h2>
      <input
        type="text"
        placeholder="How are you feeling?"
        value={mood}
        onChange={(e) => setMood(e.target.value)}
        className="border px-4 py-2 rounded mb-4"
      />
      <button
        onClick={addMood}
        className="bg-indigo-500 text-white px-4 py-2 rounded"
      >
        Add Mood
      </button>
      <ul className="mt-4">
        {moodHistory.map((entry, index) => (
          <li key={index}>
            <span className="font-bold">{entry.mood}</span> - {entry.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoodTracker;
