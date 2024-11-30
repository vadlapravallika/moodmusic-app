import React, { useState, useEffect } from 'react';
import './WhackAMood.css';

const moodEmojis = ['😊', '😢', '😡', '😍', '😌', '⚡'];

const WhackAMood = () => {
  const [slots, setSlots] = useState(Array(9).fill(null));
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30); // 30-second timer
  const [gameActive, setGameActive] = useState(false);

  useEffect(() => {
    let timer;
    if (gameActive) {
      timer = setInterval(() => {
        const randomSlot = Math.floor(Math.random() * 9);
        const randomMood = moodEmojis[Math.floor(Math.random() * moodEmojis.length)];
        const newSlots = Array(9).fill(null);
        newSlots[randomSlot] = randomMood;
        setSlots(newSlots);
      }, 800); // Speed increases as the game progresses
    }
    return () => clearInterval(timer);
  }, [gameActive]);

  useEffect(() => {
    if (timeLeft > 0 && gameActive) {
      const countdown = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(countdown);
    } else if (timeLeft === 0) {
      setGameActive(false);
    }
  }, [timeLeft, gameActive]);

  const handleWhack = (index) => {
    if (slots[index]) {
      setScore(score + 1);
      const newSlots = [...slots];
      newSlots[index] = null; // Clear the slot after a hit
      setSlots(newSlots);
    }
  };

  const startGame = () => {
    setScore(0);
    setTimeLeft(30);
    setGameActive(true);
  };

  return (
    <div className="whack-a-mood">
      <h2 className="game-title">Whack-a-Mood</h2>
      <button onClick={startGame} className="start-button">
        {gameActive ? 'Restart Game' : 'Start Game'}
      </button>
      <div className="score">Score: {score}</div>
      <div className="timer">Time Left: {timeLeft}s</div>
      <div className="grid">
        {slots.map((mood, index) => (
          <div
            key={index}
            className={`slot ${mood ? 'active' : ''}`}
            onClick={() => handleWhack(index)}
          >
            {mood && <span className="mood">{mood}</span>}
          </div>
        ))}
      </div>
      {!gameActive && timeLeft === 0 && (
        <div className="game-over">
          <h3>Game Over!</h3>
          <p>Your final score: {score}</p>
        </div>
      )}
    </div>
  );
};

export default WhackAMood;
