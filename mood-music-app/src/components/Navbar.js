import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Mood Music</h1>
        <div>
          <a href="/" className="mx-4">Home</a>
          <a href="/search" className="mx-4">Search</a>
          <a href="/settings" className="mx-4">Settings</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
