import React from 'react';
import { FaPlay, FaPause, FaStepForward, FaStepBackward } from 'react-icons/fa';

const Controls = ({ isPlaying, handlePlayPause, handleNext, handlePrev }) => (
  <div className="flex items-center justify-center space-x-4">
    <button onClick={handlePrev} className="text-xl">
      <FaStepBackward />
    </button>
    <button onClick={handlePlayPause} className="text-2xl">
      {isPlaying ? <FaPause /> : <FaPlay />}
    </button>
    <button onClick={handleNext} className="text-xl">
      <FaStepForward />
    </button>
  </div>
);

export default Controls;
