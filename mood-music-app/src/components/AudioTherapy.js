import React, { useState } from 'react';
import './AudioTherapy.css';

const AudioTherapy = () => {
  const soundscapes = [
    {
      name: 'Rain',
      video: '/videos/rain.mp4', // Path to the video file
      audio: '/sounds/rain.mp3',
    },
    {
      name: 'Ocean Waves',
      video: '/videos/ocean.mp4',
      audio: '/sounds/ocean-waves.mp3',
    },
    {
      name: 'Forest',
      video: '/videos/forest.mp4',
      audio: '/sounds/forest.mp3',
    },
  ];

  const [currentSound, setCurrentSound] = useState('');
  const [audioPlayer, setAudioPlayer] = useState(null);

  const playSound = (sound) => {
    if (audioPlayer) {
      audioPlayer.pause();
    }
    const newAudio = new Audio(sound.audio);
    setAudioPlayer(newAudio);
    newAudio.play();
    setCurrentSound(sound.name);
  };

  return (
    <div className="audio-therapy">
      <h2 className="title">Audio Therapy</h2>
      <p className="subtitle">Relax and unwind with these soothing soundscapes</p>
      <div className="soundscapes">
        {soundscapes.map((sound, index) => (
          <div key={index} className="soundscape-card">
            {/* Replace Image with Video */}
            <video
              className="soundscape-video"
              src={sound.video}
              autoPlay
              loop
              muted
            ></video>
            <h3 className="soundscape-name">{sound.name}</h3>
            <button
              onClick={() => playSound(sound)}
              className="play-button"
            >
              Play
            </button>
          </div>
        ))}
      </div>
      {currentSound && (
        <p className="current-sound">Currently playing: {currentSound}</p>
      )}
    </div>
  );
};

export default AudioTherapy;
