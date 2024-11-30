import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sidebar from './sidebar'; // Import the Sidebar
import LandingPage from './components/LandingPage';
import MoodSelector from './components/MoodSelector';
import EmotionVisualizer from './components/EmotionVisualizer';
import Playlist from './components/Playlist';
import CollabPlaylist from './components/CollabPlaylist';
import MoodEmojiGame from './games/MoodEmojiGame';
import MoodQuotes from './components/MoodQuotes';
import MoodTracker from './components/MoodTracker';
import AudioTherapy from './components/AudioTherapy';
import Search from './components/Search';
import Settings from './components/Settings';
import GameSelection from './games/GameSelection';
import WhackAMood from './games/WhackAMood';
import { MusicPlayerProvider } from './MusicPlayerContext'; // Correct import

const App = () => {
  const [currentMood, setCurrentMood] = React.useState('');
  const [songs, setSongs] = React.useState([]);

  const handleMoodSelect = async (mood) => {
    setCurrentMood(mood);
    try {
      const response = await fetch('/songs.json'); // Ensure the songs.json file is in the public folder
      const data = await response.json();
      const filteredSongs = data.filter((song) => song.mood === mood); // Filter songs by mood
      setSongs(filteredSongs);
    } catch (error) {
      console.error('Error fetching songs:', error);
    }
  };

  return (
    <MusicPlayerProvider> {/* Wrap the app with the provider */}
      <Router>
        <div className="flex">
          <Sidebar />
          <div className="flex flex-col flex-grow ml-64">
            <Navbar />
            <main className="flex-grow container mx-auto p-4">
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route
                  path="/mood-selector"
                  element={<MoodSelector onMoodSelect={handleMoodSelect} />}
                />
                <Route
                  path="/emotion-visualizer"
                  element={<EmotionVisualizer mood={currentMood} />}
                />
                <Route path="/playlist" element={<Playlist songs={songs} />} />
                <Route path="/collab-playlist" element={<CollabPlaylist />} />

                <Route path="/game-selection" element={<GameSelection />} />
                <Route path="/emoji-mood-game" element={<MoodEmojiGame />} />
                <Route path="/whack-a-mood" element={<WhackAMood />} />

                <Route path="/mood-quotes" element={<MoodQuotes />} />
                <Route path="/mood-tracker" element={<MoodTracker />} />
                <Route path="/audio-therapy" element={<AudioTherapy />} />
                <Route
                  path="/search"
                  element={
                    <Search
                      onSearch={(query) => alert(`Searching for ${query}`)}
                    />
                  }
                />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </div>
      </Router>
    </MusicPlayerProvider>
  );
};

export default App;
