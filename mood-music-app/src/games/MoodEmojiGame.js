import React, { useState, useEffect } from 'react';
import './MoodEmojiGame.css';

const MoodEmojiGame = () => {
  const [score, setScore] = useState(0);
  const [shuffledEmojis, setShuffledEmojis] = useState([]);
  const [shuffledMoods, setShuffledMoods] = useState([]);
  const [error, setError] = useState('');
  const [timeLeft, setTimeLeft] = useState(60); // Timer in seconds
  const [gameOver, setGameOver] = useState(false);
  const [hasStarted, setHasStarted] = useState(false); // New state for initial game start

  const moods = [
    { mood: 'Happy', emoji: '😊' },
    { mood: 'Sad', emoji: '😢' },
    { mood: 'Relaxed', emoji: '😌' },
    { mood: 'Energetic', emoji: '⚡' },
    { mood: 'Angry', emoji: '😡' },
  ];

  const shuffleArray = (array) => [...array].sort(() => Math.random() - 0.5);

  const startGame = () => {
    setHasStarted(true);
    setError('');
    setScore(0);
    setTimeLeft(30);
    setGameOver(false);
    setShuffledEmojis(shuffleArray(moods));
    setShuffledMoods(shuffleArray(moods));
  };

  const handleDragStart = (e, mood) => {
    e.dataTransfer.setData('text', mood);
  };

  const handleDrop = (e, emoji) => {
    const draggedMood = e.dataTransfer.getData('text');
    if (draggedMood === emoji.mood) {
      setScore(score + 1);
      setError('');
      setShuffledEmojis(shuffledEmojis.filter((item) => item.mood !== emoji.mood));
      setShuffledMoods(shuffledMoods.filter((item) => item.mood !== emoji.mood));
    } else {
      setError(`Incorrect!`);
    }
  };

  const handleDragOver = (e) => e.preventDefault();

  useEffect(() => {
    if (shuffledEmojis.length === 0 && !gameOver && hasStarted) {
      setGameOver(true);
    }
  }, [shuffledEmojis, hasStarted, gameOver]);

  useEffect(() => {
    if (timeLeft > 0 && !gameOver) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !gameOver) {
      setGameOver(true);
    }
  }, [timeLeft, gameOver]);

  return (
    <div className="mood-emoji-game">
      {!hasStarted ? (
        <div className="game-start-page">
          <h2>Welcome to the Mood Emoji Matching Game!</h2>
          <button onClick={startGame} className="start-button">
            Start Game
          </button>
        </div>
      ) : !gameOver ? (
        <>
          <h2 className="game-title">Mood Emoji Matching Game</h2>
          <div className="timer">Time Left: {timeLeft} seconds</div>
          <div className="game-board">
            <div className="emojis">
              <h3>Emojis</h3>
              <ul>
                {shuffledEmojis.map((item, index) => (
                  <li key={index} onDrop={(e) => handleDrop(e, item)} onDragOver={handleDragOver}>
                    {item.emoji}
                  </li>
                ))}
              </ul>
            </div>
            <div className="moods">
              <h3>Moods</h3>
              <ul>
                {shuffledMoods.map((item, index) => (
                  <li key={index} draggable onDragStart={(e) => handleDragStart(e, item.mood)}>
                    {item.mood}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {error && <p className="error-message">{error}</p>}
          <p className="score">Score: {score}</p>
        </>
      ) : (
        <div className="game-over-container">
          {shuffledEmojis.length === 0 ? (
            <div className="winner-page">
              <h2>🎉 Congratulations! You Won! 🎉</h2>
            </div>
          ) : (
            <div className="loser-page">
              <h2>Game Over! Try Again!</h2>
            </div>
          )}
          <button onClick={startGame} className="start-button">
            Play Again
          </button>
        </div>
      )}
    </div>
  );
};

export default MoodEmojiGame;
