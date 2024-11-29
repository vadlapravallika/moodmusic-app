import React, { createContext, useState } from 'react';

export const MusicPlayerContext = createContext();

export const MusicPlayerProvider = ({ children }) => {
  const [currentSong, setCurrentSong] = useState(null);

  return (
    <MusicPlayerContext.Provider value={{ currentSong, setCurrentSong }}>
      {children}
    </MusicPlayerContext.Provider>
  );
};
