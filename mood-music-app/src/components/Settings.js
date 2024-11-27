import React, { useState } from 'react';

const Settings = () => {
  const [theme, setTheme] = useState('Light');

  return (
    <div className="p-6 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Settings</h2>
      <div className="mb-4">
        <label className="block text-lg font-bold mb-2">Theme</label>
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          className="border px-4 py-2 rounded"
        >
          <option>Light</option>
          <option>Dark</option>
        </select>
      </div>
      <p>Current Theme: {theme}</p>
    </div>
  );
};

export default Settings;
