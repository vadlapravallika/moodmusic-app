import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css'; 


const Sidebar = () => {
  const menuItems = [
    { path: '/', name: 'Home' },
    { path: '/games', name: 'Games' },
    { path: '/playlist', name: 'Playlist' },
    { path: '/mood-quotes', name: 'Mood Quotes' },
    { path: '/audio-therapy', name: 'Audio Therapy' },
    { path: '/supriseme', name: 'Suprise Me' },
    { path: '/mood-tracker', name: 'MoodTracker'},
  ];

  return (
    <div className="w-64 bg-gray-800 text-white h-screen fixed">
      <h2 className="text-xl font-bold p-4 border-b border-gray-700">Mood Music</h2>
      <nav className="mt-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `block px-4 py-2 hover:bg-gray-700 ${
                    isActive ? 'bg-gray-700' : ''
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
