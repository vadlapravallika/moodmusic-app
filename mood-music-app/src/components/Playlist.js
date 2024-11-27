import React from 'react';

const Playlist = ({ songs }) => {
  if (!songs || songs.length === 0) {
    return <p className="text-gray-500">No songs available. Select a mood to get started!</p>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Playlist</h2>
      <ul>
        {songs.map((song, index) => (
          <li key={index} className="mb-2 border-b pb-2">
            <p><strong>{song.title}</strong></p>
            <p className="text-sm text-gray-600">by {song.artist}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Playlist;
