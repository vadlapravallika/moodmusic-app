import React, { useState, useEffect, useMemo } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../LanguageContext"; // Import the language context

// Define moods outside the component to avoid re-creation on every render
const moods = [
  { mood: "Happy", emoji: "😊" },
  { mood: "Sad", emoji: "😢" },
  { mood: "Relaxed", emoji: "😌" },
  { mood: "Energetic", emoji: "⚡" },
  { mood: "Angry", emoji: "😡" },
];

const MoodEmojiGame = () => {
  const [score, setScore] = useState(0);
  const [shuffledEmojis, setShuffledEmojis] = useState([]);
  const [shuffledMoods, setShuffledMoods] = useState([]);
  const [timeLeft, setTimeLeft] = useState(30);
  const [gameOver, setGameOver] = useState(false);

  const { width, height } = useWindowSize();
  const navigate = useNavigate();
  const { getTranslation } = useLanguage(); // Access the translation function

  const memoizedMoods = useMemo(() => moods, []);

  // Shuffle emojis and moods when the game starts
  useEffect(() => {
    setShuffledEmojis(shuffleArray(memoizedMoods));
    setShuffledMoods(shuffleArray(memoizedMoods));
  }, [memoizedMoods]);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setGameOver(true);
    }
  }, [timeLeft]);

  const shuffleArray = (array) => [...array].sort(() => Math.random() - 0.5);

  const handleDragStart = (e, mood) => {
    e.dataTransfer.setData("text", mood);
  };

  const handleDrop = (e, emoji) => {
    const draggedMood = e.dataTransfer.getData("text");
    if (draggedMood === emoji.mood) {
      setScore(score + 1);
      setShuffledEmojis(shuffledEmojis.filter((item) => item.mood !== emoji.mood));
      setShuffledMoods(shuffledMoods.filter((item) => item.mood !== emoji.mood));
    }
  };

  const handleDragOver = (e) => e.preventDefault();

  const handlePlayAgain = () => {
    setScore(0);
    setTimeLeft(30);
    setGameOver(false);
    setShuffledEmojis(shuffleArray(memoizedMoods));
    setShuffledMoods(shuffleArray(memoizedMoods));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center text-white relative">
      {/* Confetti Effect */}
      {gameOver && score === moods.length && <Confetti width={width} height={height} />}

      {!gameOver ? (
        <div className="w-full max-w-5xl mx-auto space-y-6">
          {/* Back Button */}
          <button
            onClick={() => navigate("/game-selection")}
            className="absolute top-5 left-5 bg-gradient-to-r from-pink-500 to-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:scale-105 transition-transform"
          >
            {getTranslation("home")}
          </button>

          {/* Progress Bar and Timer */}
          <div className="w-full bg-gray-800 h-4 rounded-full overflow-hidden">
            <div
              style={{ width: `${(timeLeft / 30) * 100}%` }}
              className="h-full bg-gradient-to-r from-green-400 to-red-500 transition-all duration-500"
            ></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-items-center">
            {/* Emojis Section */}
            <div className="space-y-4 w-full max-w-md">
              <h2 className="text-2xl font-semibold mb-4 text-center">{getTranslation("dragToMatchEmoji")}</h2>
              <div className="grid grid-cols-2 gap-4">
                {shuffledEmojis.map((item, index) => (
                  <div
                    key={index}
                    onDrop={(e) => handleDrop(e, item)}
                    onDragOver={handleDragOver}
                    className="bg-gradient-to-br from-indigo-700 to-purple-700 p-6 rounded-lg shadow-md text-3xl text-center transform hover:scale-110 transition-transform"
                  >
                    {item.emoji}
                  </div>
                ))}
              </div>
            </div>

            {/* Moods Section */}
            <div className="space-y-4 w-full max-w-md">
              <h2 className="text-2xl font-semibold mb-4 text-center">{getTranslation("dragToMatchMood")}</h2>
              <div className="grid grid-cols-2 gap-4">
                {shuffledMoods.map((item, index) => (
                  <div
                    key={index}
                    draggable
                    onDragStart={(e) => handleDragStart(e, item.mood)}
                    className="bg-gradient-to-br from-green-500 to-teal-500 p-6 rounded-lg shadow-md text-xl text-center cursor-pointer transform hover:scale-105 transition-transform"
                  >
                    {item.mood}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Score */}
          <div className="text-center text-lg font-semibold">
            {getTranslation("score")}: <span className="text-teal-400">{score}</span>
          </div>
        </div>
      ) : (
        <div className="relative text-center space-y-8">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-500">
            {score === moods.length ? getTranslation("youWon") : getTranslation("gameOver")}
          </h1>
          <button
            onClick={handlePlayAgain}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-xl px-8 py-3 rounded-lg shadow-lg hover:scale-105 transition-transform"
          >
            {getTranslation("playAgain")}
          </button>

          {/* Home Button */}
          <button
            onClick={() => navigate("/game-selection")}
            className="bg-gradient-to-r from-green-400 to-teal-500 text-lg font-bold px-8 py-3 rounded-lg shadow-lg hover:scale-105 transition-transform"
          >
            {getTranslation("home")}
          </button>
        </div>
      )}
    </div>
  );
};

export default MoodEmojiGame;
