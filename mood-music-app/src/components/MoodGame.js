import React, { useState } from 'react';

const MoodGame = () => {
  const [score, setScore] = useState(0);
  const [currentMood, setCurrentMood] = useState('');
  const [guess, setGuess] = useState('');

  const moods = ['Happy', 'Sad', 'Relaxed', 'Energetic'];

  const generateMood = () => {
    const randomMood = moods[Math.floor(Math.random() * moods.length)];
    setCurrentMood(randomMood);
  };

  const handleGuess = () => {
    if (guess.toLowerCase() === currentMood.toLowerCase()) {
      setScore(score + 1);
      alert('Correct!');
    } else {
      alert('Wrong! Try again.');
    }
    setGuess('');
    generateMood();
  };

  return (
    <div className="p-6 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Mood Guessing Game</h2>
      <button
        onClick={generateMood}
        className="bg-indigo-500 text-white px-4 py-2 rounded mb-4"
      >
        Start Game
      </button>
      {currentMood && (
        <div className="mb-4">
          <p className="text-lg">Guess the mood of the song!</p>
          <input
            type="text"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            className="border px-4 py-2 rounded"
          />
          <button
            onClick={handleGuess}
            className="ml-2 bg-green-500 text-white px-4 py-2 rounded"
          >
            Submit
          </button>
        </div>
      )}
      <p className="mt-4">Score: {score}</p>
    </div>
  );
};

export default MoodGame;
