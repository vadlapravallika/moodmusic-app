import React from 'react';
import './Playlist.css'; // Import the CSS file

const Playlist = ({ songs }) => {
  if (!songs || songs.length === 0) {
    return (
      <p className="text-gray-500">
        No songs available. Select a mood to get started!
      </p>
    );
  }

  return (
    <div className="playlist-container">
      <h2 className="playlist-title">Your Playlist</h2>
      <div className="song-card-grid">
        {songs.map((song, index) => (
          <div key={index} className="song-card">
            {/* Album Art */}
            <img
              src={song.albumArt || '/default-album-art.png'} // Use default image if albumArt is missing
              alt={`${song.title} Album Art`}
              className="album-art"
            />
            {/* Song Info */}
            <div className="song-info">
              <h3 className="song-title">{song.title}</h3>
              <p className="song-artist">by {song.artist}</p>
              <p className="album-info">{song.albumInfo || 'No album info available'}</p>
              {/* Audio Player */}
              <audio controls src={song.url} className="audio-player"></audio>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Playlist;
