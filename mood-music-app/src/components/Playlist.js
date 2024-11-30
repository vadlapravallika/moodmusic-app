import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './Playlist.css';
import { MusicPlayerContext } from '../MusicPlayerContext'; // Import the context

const Playlist = ({ songs }) => {
  const navigate = useNavigate();
  
  const { updatePlaylist, setCurrentSong } = useContext(MusicPlayerContext);

  const handleUpdatePlaylist = (songs, index) => {
    updatePlaylist(songs);
    setCurrentSong(songs[index]);
  };

  return (
    <div className="playlist-container">
      <button
        onClick={() => navigate('/mood-selector')}
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
              <div
                key={index}
                className="song-card"
                onClick={() => handleUpdatePlaylist(songs, index)} // Play the song in the footer
              >
                <img
                  src={song.albumArt || '/default-album-art.png'}
                  alt={`${song.title} Album Art`}
                  className="album-art"
                />
                <div className="song-info">
                  <h3 className="song-title">{song.title}</h3>
                  <p className="song-artist">by {song.artist}</p>
                  <p className="album-info">
                    {song.albumInfo || 'No album info available'}
                  </p>
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
