import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar fixed left-0 top-0 h-full w-64 bg-gray-800 text-white flex flex-col">
      <div className="sidebar-content flex-grow">
        <NavLink
          to="/"
          className="p-4 hover:bg-gray-700 block"
        >
          Home
        </NavLink>
        <NavLink
          to="/mood-selector"
          className="p-4 hover:bg-gray-700 block"
        >
          Mood Selector
        </NavLink>
        <NavLink
          to="/playlist"
          className="p-4 hover:bg-gray-700 block"
        >
          Playlist
        </NavLink>
        <NavLink
          to="/games"
          className="p-4 hover:bg-gray-700 block"
        >
          Games
        </NavLink>
        {/* Add other routes as needed */}
      </div>

      {/* Login at the Bottom */}
      <div className="sidebar-footer p-4 bg-gray-900">
        <NavLink
          to="/login"
          className="block p-2 bg-indigo-500 rounded text-center hover:bg-indigo-600"
        >
          Login
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
