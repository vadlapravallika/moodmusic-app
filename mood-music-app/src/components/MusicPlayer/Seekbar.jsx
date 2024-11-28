import React from 'react';

const Seekbar = ({ currentTime, duration, handleSeek }) => {
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="flex items-center space-x-2">
      <span>{formatTime(currentTime)}</span>
      <input
        type="range"
        min="0"
        max={duration}
        value={currentTime}
        onChange={handleSeek}
        className="flex-grow"
      />
      <span>{formatTime(duration)}</span>
    </div>
  );
};

export default Seekbar;
