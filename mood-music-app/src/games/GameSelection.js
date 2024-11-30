import React from 'react';
import { useNavigate } from 'react-router-dom';
import './GameSelection.css';

const GameSelection = () => {
  const navigate = useNavigate();

  return (
    <div className="game-selection">
      <h2 className="title">Select a Game</h2>
      <div className="games">
        <div className="game-card">
          <h3>Emoji Mood Matching</h3>
          <p>Test your memory by matching emojis with their moods!</p>
          <button
            className="play-button"
            onClick={() => navigate('/emoji-mood-game')}
          >
            Play
          </button>
        </div>
        <div className="game-card">
          <h3>Whack-a-Mood</h3>
          <p>Hit the moods as they appear on the screen before time runs out!</p>
          <button
            className="play-button"
            onClick={() => navigate('/whack-a-mood')}
          >
            Play
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameSelection;
