import React, { createContext, useState } from 'react';

export const MusicPlayerContext = createContext();

export const MusicPlayerProvider = ({ children }) => {
  const [playlist, setPlaylist] = useState([]); // Start with an empty playlist
  const [currentIndex, setCurrentIndex] = useState(-1); // No song selected initially

  const addSong = (song) => {
    setPlaylist((prevPlaylist) => [...prevPlaylist, song]);
    if (currentIndex === -1) {
      setCurrentIndex(0); // Automatically select the first song if none is playing
    }
  };

  const updatePlaylist = (newPlaylist) => {
    setPlaylist(newPlaylist);
    setCurrentIndex(newPlaylist.length > 0 ? 0 : -1); // Reset current song to the first song in the new playlist, or none if it's empty
  };

  const setCurrentSong = (song) => {
    const index = playlist.indexOf(song);
    if (index !== -1) {
      setCurrentIndex(index);
    }
  };

  const nextSong = () => {
    if (playlist.length > 0) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % playlist.length);
    }
  };

  const prevSong = () => {
    if (playlist.length > 0) {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + playlist.length) % playlist.length);
    }
  };

  return (
    <MusicPlayerContext.Provider
      value={{
        currentSong: playlist[currentIndex] || null,
        playlist,
        addSong,
        updatePlaylist,
        setCurrentSong,
        nextSong,
        prevSong,
      }}
    >
      {children}
    </MusicPlayerContext.Provider>
  );
};
