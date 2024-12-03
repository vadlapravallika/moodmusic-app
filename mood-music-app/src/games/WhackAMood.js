import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const moodEmojis = ["😊", "😢", "😡", "😍", "😌", "⚡"];

const WhackAMood = () => {
  const [slots, setSlots] = useState(Array(9).fill(null));
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30); // Timer duration
  const [gameActive, setGameActive] = useState(false);
  const navigate = useNavigate(); // For navigation

  // Function to shuffle moods in random slots
  useEffect(() => {
    let timer;
    if (gameActive) {
      timer = setInterval(() => {
        const randomSlot = Math.floor(Math.random() * 9);
        const randomMood =
          moodEmojis[Math.floor(Math.random() * moodEmojis.length)];
        const newSlots = Array(9).fill(null);
        newSlots[randomSlot] = randomMood;
        setSlots(newSlots);
      }, 800); // New moods appear every 800ms
    }
    return () => clearInterval(timer);
  }, [gameActive]);

  // Countdown timer logic
  useEffect(() => {
    if (timeLeft > 0 && gameActive) {
      const countdown = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(countdown);
    } else if (timeLeft === 0) {
      setGameActive(false); // End the game
    }
  }, [timeLeft, gameActive]);

  // Function to handle mood whack
  const handleWhack = (index) => {
    if (slots[index]) {
      setScore(score + 1);
      const newSlots = [...slots];
      newSlots[index] = null; // Clear the slot after a hit
      setSlots(newSlots);
    }
  };

  // Start or restart the game
  const startGame = () => {
    setScore(0);
    setTimeLeft(30);
    setGameActive(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-800 to-blue-600 flex flex-col items-center justify-center text-white relative p-6">
      {/* Back Button */}
      <button
        onClick={() => navigate("/game-selection")}
        className="absolute top-5 left-5 bg-gradient-to-r from-green-400 to-teal-500 text-white px-4 py-2 rounded-lg shadow-md hover:scale-105 transition-transform"
      >
        Back to Game Selection
      </button>

      {/* Game Title */}
      <h1 className="text-4xl font-extrabold mb-6">Whack-a-Mood</h1>

      {/* Start Button */}
      {!gameActive && timeLeft > 0 && (
        <button
          onClick={startGame}
          className="bg-gradient-to-r from-green-400 to-teal-500 text-lg font-bold px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition-transform"
        >
          Start Game
        </button>
      )}

      {/* Score and Timer */}
      {gameActive && (
        <div className="mt-6 w-full max-w-md flex justify-between items-center text-lg font-semibold">
          <div>Score: {score}</div>
          <div>Time Left: {timeLeft}s</div>
        </div>
      )}

      {/* Timer Progress Bar */}
      <div className="w-full max-w-md bg-gray-800 h-4 rounded-full overflow-hidden mt-4">
        <div
          style={{ width: `${(timeLeft / 30) * 100}%` }}
          className="h-full bg-gradient-to-r from-green-400 to-red-500 transition-all"
        ></div>
      </div>

      {/* Game Grid */}
      <div className="grid grid-cols-3 gap-4 mt-8 w-full max-w-md">
        {slots.map((mood, index) => (
          <div
            key={index}
            className={`relative w-24 h-24 bg-gray-700 rounded-lg shadow-md flex items-center justify-center cursor-pointer transition-transform transform hover:scale-105 ${
              mood ? "bg-gradient-to-r from-purple-500 to-pink-500 shadow-xl" : ""
            }`}
            onClick={() => handleWhack(index)}
          >
            {mood && <span className="text-3xl animate-bounce">{mood}</span>}
          </div>
        ))}
      </div>

      {/* Game Over Screen */}
      {!gameActive && timeLeft === 0 && (
        <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center text-center text-white space-y-6">
          <h2 className="text-5xl font-bold">Game Over!</h2>
          <p className="text-2xl">Your final score: {score}</p>

          {/* Play Again Button */}
          <button
            onClick={startGame}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-lg font-bold px-8 py-3 rounded-lg shadow-lg hover:scale-105 transition-transform"
          >
            Play Again
          </button>

          {/* Home Button */}
          <button
            onClick={() => navigate("/game-selection")}
            className="bg-gradient-to-r from-green-400 to-teal-500 text-lg font-bold px-8 py-3 rounded-lg shadow-lg hover:scale-105 transition-transform"
          >
            Home
          </button>
        </div>
      )}
    </div>
  );
};

export default WhackAMood;
