import React, { useState } from 'react';
import MusicPlayer from './MusicPlayer/MusicPlayer';

const Playlist = ({ songs }) => {
  const [currentSong, setCurrentSong] = useState(null);

  if (!songs || songs.length === 0) {
    return <p className="text-gray-500">No songs available. Select a mood to get started!</p>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Playlist</h2>
      <ul>
        {songs.map((song, index) => (
          <li
            key={index}
            className="mb-4 p-2 border-b pb-2 cursor-pointer hover:bg-gray-100 rounded"
            onClick={() => setCurrentSong(song)}
          >
            <p><strong>{song.title}</strong></p>
            <p className="text-sm text-gray-600">by {song.artist}</p>
          </li>
        ))}
      </ul>
      {currentSong && (
        <div className="mt-6">
          <MusicPlayer song={currentSong} />
        </div>
      )}
    </div>
  );
};

export default Playlist;
