import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext"; // Import the ThemeContext

const SettingsPage = () => {
  const { theme, toggleTheme } = useContext(ThemeContext); // Access theme and toggleTheme

  return (
    <div className={`min-h-screen ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"} p-8`}>
      <h1 className="text-3xl font-bold mb-6">Settings</h1>

      {/* Theme Toggle */}
      <div className="bg-gray-200 dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Theme</h2>
        <div className="flex items-center justify-between">
          <p>Dark Mode</p>
          <input
            type="checkbox"
            checked={theme === "dark"}
            onChange={toggleTheme}
            className="w-6 h-6 text-teal-500 focus:ring-2 focus:ring-teal-400 rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
