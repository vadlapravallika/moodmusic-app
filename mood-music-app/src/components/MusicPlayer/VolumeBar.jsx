import React from 'react';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

const VolumeBar = ({ volume, handleVolumeChange, toggleMute, isMuted }) => (
  <div className="flex items-center space-x-2">
    <button onClick={toggleMute}>
      {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
    </button>
    <input
      type="range"
      min="0"
      max="100"
      value={volume}
      onChange={handleVolumeChange}
      className="w-24"
    />
  </div>
);

export default VolumeBar;
