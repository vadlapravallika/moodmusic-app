import React, { useState } from 'react';
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
      value={isMuted ? 0 : volume} // Show 0 volume if muted
      onChange={handleVolumeChange}
      className="w-24"
      disabled={isMuted} // Disable the slider when muted
    />
  </div>
);

const App = () => {
  const [volume, setVolume] = useState(50);
  const [isMuted, setIsMuted] = useState(false);

  const toggleMute = () => {
    setIsMuted(prevState => !prevState);
  };

  const handleVolumeChange = (event) => {
    setVolume(event.target.value);
  };

  return (
    <VolumeBar
      volume={volume}
      handleVolumeChange={handleVolumeChange}
      toggleMute={toggleMute}
      isMuted={isMuted}
    />
  );
};

export default VolumeBar;