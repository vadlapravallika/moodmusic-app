import React, { useContext, useEffect, useRef, useState } from 'react';
import { MusicPlayerContext } from '../MusicPlayerContext';
import './Footer.css';
import { FaPlay, FaPause, FaStepBackward, FaStepForward, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

const Footer = () => {
  const { currentSong, nextSong, prevSong } = useContext(MusicPlayerContext);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    if (currentSong && audioRef.current) {
      audioRef.current.src = currentSong.url;
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, [currentSong]);

  const togglePlayPause = () => {
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
    if (audioRef.current) {
      audioRef.current.volume = newVolume / 100;
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      setDuration(audioRef.current.duration || 0);
    }
  };

  const handleSeek = (e) => {
    const newTime = e.target.value;
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <footer className="footer-container">
      {currentSong ? (
        <div className="footer-content">
          <div className="footer-left">
            <img
              src={currentSong.albumArt || '/default-album-art.png'}
              alt={currentSong.title}
              className="footer-album-art"
            />
            <div className="footer-song-info">
              <p className="footer-song-title">{currentSong.title}</p>
              <p className="footer-song-artist">{currentSong.artist}</p>
            </div>
          </div>

          <div className="footer-center">
            <div className="footer-controls">
              <button className="control-button" onClick={prevSong}>
                <FaStepBackward />
              </button>
              <button className="control-button play-pause-button" onClick={togglePlayPause}>
                {isPlaying ? <FaPause /> : <FaPlay />}
              </button>
              <button className="control-button" onClick={nextSong}>
                <FaStepForward />
              </button>
            </div>
            <div className="footer-progress-bar">
              <span className="footer-time">{formatTime(currentTime)}</span>
              <input
                type="range"
                min="0"
                max={duration}
                value={currentTime}
                onChange={handleSeek}
                className="progress-bar"
              />
              <span className="footer-time">{formatTime(duration)}</span>
            </div>
          </div>

          <div className="footer-right">
            <button className="control-button volume-button">
              {volume === 0 ? <FaVolumeMute /> : <FaVolumeUp />}
            </button>
            <input
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={handleVolumeChange}
              className="volume-slider"
            />
          </div>
          <audio
            ref={audioRef}
            onTimeUpdate={handleTimeUpdate}
            className="hidden"
          ></audio>
        </div>
      ) : (
        <p className="footer-placeholder">Select a song to start playing!</p>
      )}
    </footer>
  );
};

export default Footer;
