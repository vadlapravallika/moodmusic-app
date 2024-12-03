import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';
import { FaGamepad, FaListUl, FaQuoteRight, FaHeadphones, FaHeartbeat } from 'react-icons/fa';
import { useLanguage } from './LanguageContext'; // Import the language context hook

const Sidebar = () => {
  const { getTranslation } = useLanguage(); // Access the translation function
  
  const menuItems = [
    { path: '/game-selection', name: 'games', icon: <FaGamepad /> },
    { path: '/playlist', name: 'playlist', icon: <FaListUl /> },
    { path: '/mood-quotes', name: 'moodQuotes', icon: <FaQuoteRight /> },
    { path: '/audio-therapy', name: 'audioTherapy', icon: <FaHeadphones /> },
    { path: '/mood-tracker', name: 'moodTracker', icon: <FaHeartbeat /> },
  ];

  return (
    <div className="sidebar-container">
      {/* App Logo */}
      <div className="logo-container">
        <img src="/logo.png" alt="App Logo" className="logo" />
      </div>
      <h2 className="sidebar-title">{getTranslation('welcome')}</h2> {/* Use translation for title */}
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
                <span className="name">{getTranslation(item.name)}</span> {/* Use translation for each menu item */}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
