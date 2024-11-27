import React, { useState } from 'react';

const AudioTherapy = () => {
  const soundscapes = ['Rain', 'Ocean Waves', 'Forest', 'White Noise'];
  const [currentSound, setCurrentSound] = useState('');

  const playSound = (sound) => {
    setCurrentSound(sound);
    alert(`Playing ${sound} soundscape...`);
  };

  return (
    <div className="p-6 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Audio Therapy</h2>
      <ul>
        {soundscapes.map((sound, index) => (
          <li key={index} className="mb-2">
            <button
              onClick={() => playSound(sound)}
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              {sound}
            </button>
          </li>
        ))}
      </ul>
      {currentSound && (
        <p className="mt-4">Currently playing: {currentSound}</p>
      )}
    </div>
  );
};

export default AudioTherapy;
