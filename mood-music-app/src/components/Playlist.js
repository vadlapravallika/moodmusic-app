import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MusicPlayerContext } from "../MusicPlayerContext"; // Import the context

const Playlist = ({ songs }) => {
  const navigate = useNavigate();
  const { updatePlaylist, setCurrentSong } = useContext(MusicPlayerContext);

  const handleUpdatePlaylist = (songs, index) => {
    updatePlaylist(songs);
    setCurrentSong(songs[index]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white px-6 py-8">
      {/* Back Button */}
      <button
        onClick={() => navigate("/mood-selector")}
        className="bg-indigo-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-indigo-600 transition-transform mb-6"
      >
        Back to Mood Selection
      </button>

      {/* No Songs Message */}
      {(!songs || songs.length === 0) ? (
        <p className="text-gray-400 text-center text-lg">
          No songs available. Select a mood to get started!
        </p>
      ) : (
        <>
          {/* Playlist Title */}
          <h2 className="text-3xl font-extrabold text-center mb-8">Your Playlist</h2>

          {/* Songs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {songs.map((song, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 overflow-hidden cursor-pointer"
                onClick={() => handleUpdatePlaylist(songs, index)}
              >
                {/* Album Art */}
                <img
                  src={song.albumArt || "/default-album-art.png"}
                  alt={`${song.title} Album Art`}
                  className="w-full h-64 object-cover"
                />

                {/* Song Info */}
                <div className="p-4 space-y-2">
                  <h3 className="text-lg font-semibold">{song.title}</h3>
                  <p className="text-sm text-gray-400">by {song.artist}</p>
                  <p className="text-sm text-gray-500">{song.albumInfo || "No album info available"}</p>
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
