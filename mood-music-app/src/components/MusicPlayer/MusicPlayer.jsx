import React, { useState, useRef } from 'react';
import Controls from './Controls';
import VolumeBar from './VolumeBar';
import Track from './Track';
import Seekbar from './Seekbar';

const MusicPlayer = ({ song }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(50);
  const [isMuted, setIsMuted] = useState(false);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    audioRef.current.volume = newVolume / 100;
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    audioRef.current.muted = !isMuted;
  };

  const handleSeek = (e) => {
    const newTime = e.target.value;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  return (
    <div className="p-4 bg-gray-100 rounded shadow">
      <Track title={song.title} artist={song.artist} />
      <audio
        ref={audioRef}
        src={song.url}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={() => setCurrentTime(0)}
      />
      <Seekbar
        currentTime={currentTime}
        duration={audioRef.current?.duration || 0}
        handleSeek={handleSeek}
      />
      <Controls
        isPlaying={isPlaying}
        handlePlayPause={handlePlayPause}
        handleNext={() => alert('Next song')}
        handlePrev={() => alert('Previous song')}
      />
      <VolumeBar
        volume={volume}
        handleVolumeChange={handleVolumeChange}
        toggleMute={toggleMute}
        isMuted={isMuted}
      />
    </div>
  );
};

export default MusicPlayer;