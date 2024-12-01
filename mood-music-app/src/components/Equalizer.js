import React, { useState } from 'react';

const Equalizer = () => {
  const [bass, setBass] = useState(50);  // Bass frequency slider (range 0-100)
  const [mid, setMid] = useState(50);    // Mid frequency slider (range 0-100)
  const [treble, setTreble] = useState(50);  // Treble frequency slider (range 0-100)

  const handleBassChange = (e) => setBass(e.target.value);
  const handleMidChange = (e) => setMid(e.target.value);
  const handleTrebleChange = (e) => setTreble(e.target.value);

  return (
    <div className="p-6 bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-white text-2xl font-semibold mb-4">Audio Equalizer</h2>

      <div className="space-y-6">
        {/* Bass Slider */}
        <div className="flex items-center justify-between">
          <label htmlFor="bass" className="text-white text-lg">Bass</label>
          <input
            id="bass"
            type="range"
            min="0"
            max="100"
            value={bass}
            onChange={handleBassChange}
            className="w-full max-w-xs bg-gray-600 rounded-lg"
          />
          <span className="text-white">{bass}</span>
        </div>

        {/* Mid Slider */}
        <div className="flex items-center justify-between">
          <label htmlFor="mid" className="text-white text-lg">Mid</label>
          <input
            id="mid"
            type="range"
            min="0"
            max="100"
            value={mid}
            onChange={handleMidChange}
            className="w-full max-w-xs bg-gray-600 rounded-lg"
          />
          <span className="text-white">{mid}</span>
        </div>

        {/* Treble Slider */}
        <div className="flex items-center justify-between">
          <label htmlFor="treble" className="text-white text-lg">Treble</label>
          <input
            id="treble"
            type="range"
            min="0"
            max="100"
            value={treble}
            onChange={handleTrebleChange}
            className="w-full max-w-xs bg-gray-600 rounded-lg"
          />
          <span className="text-white">{treble}</span>
        </div>
      </div>
    </div>
  );
};

export default Equalizer;
