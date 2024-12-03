import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext'; // Import Language Context

const MoodQuotes = () => {
  const quotes = {
    Happy: 'Happiness is not out there; it’s in you.',
    Sad: 'Tears are words that the heart can’t express.',
    Relaxed: 'Relaxation is the art of letting go.',
    Energetic: 'Energy is contagious; use yours wisely.',
  };

  const [mood, setMood] = useState('Happy');
  const [quote, setQuote] = useState(quotes[mood]);
  const { getTranslation } = useLanguage(); // Access the translation function

  const handleMoodChange = (newMood) => {
    setMood(newMood);
    setQuote(quotes[newMood]);
  };

  return (
    <div className="p-6 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-bold mb-4">{getTranslation("moodQuotes")}</h2>
      <select
        value={mood}
        onChange={(e) => handleMoodChange(e.target.value)}
        className="border px-4 py-2 rounded mb-4"
      >
        {Object.keys(quotes).map((m, index) => (
          <option key={index} value={m}>{getTranslation(m)}</option>
        ))}
      </select>
      <p className="italic">"{quote}"</p>
    </div>
  );
};

export default MoodQuotes;
