import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';
import { FaHome, FaGamepad, FaListUl, FaQuoteRight, FaHeadphones, FaHeartbeat } from 'react-icons/fa';

const Sidebar = () => {
  const menuItems = [
    { path: '/', name: 'Home', icon: <FaHome /> },
    { path: '/games', name: 'Games', icon: <FaGamepad /> },
    { path: '/playlist', name: 'Playlist', icon: <FaListUl /> },
    { path: '/mood-quotes', name: 'Mood Quotes', icon: <FaQuoteRight /> },
    { path: '/audio-therapy', name: 'Audio Therapy', icon: <FaHeadphones /> },
    { path: '/mood-tracker', name: 'Mood Tracker', icon: <FaHeartbeat /> },
  ];

  return (
    <div className="sidebar-container">
      {/* App Logo */}
      <div className="logo-container">
  <img src="/logo.png" alt="App Logo" className="logo" /></div>
      <h2 className="sidebar-title">Mood Music</h2>
      <nav className="sidebar-menu">
        <ul>
          {menuItems.map((item) => (
            <li key={item.path} className="menu-item">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `menu-link ${isActive ? 'active' : ''}`
                }
              >
                <span className="icon">{item.icon}</span>
                <span className="name">{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
