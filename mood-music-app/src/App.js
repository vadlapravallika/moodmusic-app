import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import MoodSelector from './components/MoodSelector';
import EmotionVisualizer from './components/EmotionVisualizer';
import Playlist from './components/Playlist';
import CollabPlaylist from './components/CollabPlaylist';
import SurpriseMe from './components/SurpriseMe';
import MoodGame from './components/MoodGame';
import MoodQuotes from './components/MoodQuotes';
import MoodTracker from './components/MoodTracker';
import AudioTherapy from './components/AudioTherapy';
import Search from './components/Search';
import Settings from './components/Settings';

const App = () => {
  const [currentMood, setCurrentMood] = React.useState('');
  const [songs, setSongs] = React.useState([]);
  

  // Fetch songs based on mood
  const handleMoodSelect = async (mood) => {
    setCurrentMood(mood);
    try {
      const response = await fetch('/songs.json'); // Ensure songs.json is in the public folder
      const data = await response.json();
      console.log(data);
      const filteredSongs = data.filter((song) => song.mood === mood); // Filter songs by moo
      setSongs(filteredSongs);
    } catch (error) {
      console.error('Error fetching songs:', error);
    }
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
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
            <Route
              path="/surprise-me"
              element={<SurpriseMe onSurpriseMood={handleMoodSelect} />}
            />
            <Route path="/mood-game" element={<MoodGame />} />
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
    </Router>
  );
};

export default App;
