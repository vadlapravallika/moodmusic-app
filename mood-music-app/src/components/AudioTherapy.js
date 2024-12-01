import React, { useState, useRef } from 'react';

// Define the soundscapes with their respective background images, sound, and background colors
const soundscapes = [
  {
    name: 'Rain',
    audio: '/sounds/rain.mp3',
    backgroundVideo: '/videos/rain-bg.mp4',
    image: '/images/rain.jpeg',
    cardColor: 'bg-transparent', // Rain color
  },
  {
    name: 'Ocean Waves',
    audio: '/sounds/ocean-waves.mp3',
    backgroundVideo: '/videos/ocean.mp4',
    image: '/images/ocean.jpeg',
    cardColor: 'bg-transparent', // Ocean color
  },
  {
    name: 'Forest',
    audio: '/sounds/forest.mp3',
    backgroundVideo: '/videos/forest.mp4',
    image: '/images/forest.jpeg',
    cardColor: 'bg-transparent', // Forest color
  },
];

const AudioTherapy = () => {
  const [audioPlayer, setAudioPlayer] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);  // Keep track of the current soundscape
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef(new Audio(soundscapes[currentIndex].audio));

  const playSound = () => {
    if (audioPlayer) {
      audioPlayer.pause();
    }

    const newAudio = audioRef.current;
    newAudio.play();
    setAudioPlayer(newAudio);
    setIsPlaying(true);
  };

  const stopSound = () => {
    if (audioPlayer) {
      audioPlayer.pause();
    }
    setIsPlaying(false);
  };

  // Play next soundscape
  const playNext = () => {
    const nextIndex = (currentIndex + 1) % soundscapes.length; // Loop back to first when reaching the end
    setCurrentIndex(nextIndex);
    audioRef.current.src = soundscapes[nextIndex].audio;
    playSound();
  };

  // Rewind to the previous soundscape
  const playPrevious = () => {
    const prevIndex = (currentIndex - 1 + soundscapes.length) % soundscapes.length; // Loop back to last when going before first
    setCurrentIndex(prevIndex);
    audioRef.current.src = soundscapes[prevIndex].audio;
    playSound();
  };

  // Handle the progress bar
  const handleProgressChange = (event) => {
    const newTime = event.target.value;
    audioRef.current.currentTime = newTime;
  };

  // Format the time
  const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min}:${sec < 10 ? '0' + sec : sec}`;
  };

  return (
    <div className="relative w-full min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Background video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={soundscapes[currentIndex].backgroundVideo}
        autoPlay
        loop
        muted
      ></video>

      {/* Overlay for dimming the background */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10"></div>

      {/* Content centered in the middle */}
      <div className="relative z-20 flex items-center justify-center h-full">
        <div
          className={`w-full max-w-sm text-center rounded-lg shadow-lg p-8 ${soundscapes[currentIndex].cardColor} bg-opacity-80`}
        >
          {/* Image Circle */}
          <div className="mb-6">
            <img
              src={soundscapes[currentIndex].image}
              alt={soundscapes[currentIndex].name}
              className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-white"
            />
          </div>

          {/* Header: Audio Therapy */}
          <h3 className="text-2xl font-bold mb-4 text-white">{soundscapes[currentIndex].name}</h3>

          {/* Player Controls */}
          <div className="flex justify-center items-center gap-4 mb-6">
            <button
              onClick={playPrevious}
              title="Rewind"
            >
              ⏪
            </button>
            <button
              onClick={isPlaying ? stopSound : playSound}
              
              title={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? '⏸️' : '▶️'}
            </button>
            <button
              onClick={playNext}
              title="Next"
            >
              ⏩
            </button>
          </div>

          {/* Progress Bar */}
          <input
            type="range"
            min="0"
            max={audioRef.current.duration || 0}
            value={audioRef.current.currentTime || 0}
            onChange={handleProgressChange}
            className="w-full mb-4"
          />
          <div className="flex justify-between text-xs text-white">
            <span>{formatTime(audioRef.current.currentTime)}</span>
            <span>{formatTime(audioRef.current.duration)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioTherapy;
