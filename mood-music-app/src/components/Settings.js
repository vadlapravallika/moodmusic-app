import React from 'react';
import Equalizer from './Equalizer'; // Import the Equalizer component

const Settings = () => {
  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>
      
      {/* Equalizer Component */}
      <Equalizer />
    </div>
  );
};

export default Settings;
