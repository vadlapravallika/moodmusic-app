import React, { createContext, useContext, useState } from 'react';

const AudioContext = createContext();

export const AudioContextProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(null);

  const playAudio = (song) => {
    if (currentSong !== song) {
      setCurrentSong(song);
    }
    setIsPlaying(true);
  };

  const pauseAudio = () => {
    setIsPlaying(false);
  };

  return (
    <AudioContext.Provider value={{ isPlaying, currentSong, playAudio, pauseAudio }}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => useContext(AudioContext);
