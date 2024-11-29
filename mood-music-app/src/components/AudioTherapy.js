import React, { useState } from 'react';

const AudioTherapy = () => {
  const soundscapes = [
    {
      name: 'Rain',
      video: '/videos/rain.mp4', // Path to the video file
      audio: '/sounds/rain.mp3',
    },
    {
      name: 'Ocean Waves',
      video: '/videos/ocean.mp4',
      audio: '/sounds/ocean-waves.mp3',
    },
    {
      name: 'Forest',
      video: '/videos/forest.mp4',
      audio: '/sounds/forest.mp3',
    },
  ];

  const [currentSound, setCurrentSound] = useState('');
  const [audioPlayer, setAudioPlayer] = useState(null);
  const [selectedSoundscape, setSelectedSoundscape] = useState(null);

  const playSound = (sound) => {
    if (audioPlayer) {
      audioPlayer.pause();
    }
    const newAudio = new Audio(sound.audio);
    setAudioPlayer(newAudio);
    newAudio.play();
    setCurrentSound(sound.name);
    setSelectedSoundscape(sound);
  };

  const resetSoundscape = () => {
    if (audioPlayer) {
      audioPlayer.pause();
    }
    setCurrentSound('');
    setSelectedSoundscape(null);
  };

  return (
    <div className="relative w-full min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Background Video */}
      {selectedSoundscape && (
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src={selectedSoundscape.video}
          autoPlay
          loop
          muted
        ></video>
      )}

      {/* Overlay for Dim Background */}
      {selectedSoundscape && (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10"></div>
      )}

      <div className={`relative z-20 ${selectedSoundscape ? 'flex items-center justify-center' : ''}`}>
        {!selectedSoundscape ? (
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-center mb-4">Audio Therapy</h2>
            <p className="text-center text-lg text-gray-300 mb-10">
              Relax and unwind with these soothing soundscapes
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
              {soundscapes.map((sound, index) => (
                <div
                  key={index}
                  className="soundscape-card relative bg-cover bg-center text-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300"
                  style={{ backgroundImage: "url('/soundscape-bg.jpg')" }} // Add card background image
                >
                  <video
                    className="w-full h-48 object-cover rounded-t-lg"
                    src={sound.video}
                    autoPlay
                    loop
                    muted
                  ></video>
                  <div className="p-4">
                    <h3 className="text-lg font-bold">{sound.name}</h3>
                    <button
                      onClick={() => playSound(sound)}
                      className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
                    >
                      Play
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center text-center p-8 bg-white bg-opacity-90 rounded-lg shadow-xl max-w-lg mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">{selectedSoundscape.name}</h3>
            <p className="text-lg text-gray-700">Currently playing soothing {selectedSoundscape.name} sounds.</p>
            <button
              onClick={resetSoundscape}
              className="mt-6 bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600 transition duration-300"
            >
              Back to Soundscapes
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AudioTherapy;
