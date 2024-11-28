import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Playlist.css'; // Import the CSS file

const Playlist = ({ songs }) => {
  const navigate = useNavigate(); // Initialize navigate function

  return (
    <div className="playlist-container">
      <button
        onClick={() => navigate('/')} // Navigate back to the mood selection page
        className="back-button bg-indigo-500 text-white px-4 py-2 rounded mb-4"
      >
        Back to Mood Selection
      </button>

      {(!songs || songs.length === 0) ? (
        <p className="text-gray-500">
          No songs available. Select a mood to get started!
        </p>
      ) : (
        <>
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
                  <p className="album-info">
                    {song.albumInfo || 'No album info available'}
                  </p>
                  {/* Audio Player */}
                  <audio controls src={song.url} className="audio-player"></audio>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Playlist;
