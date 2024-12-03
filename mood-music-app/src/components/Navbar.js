import React from 'react';
import { useLanguage } from '../LanguageContext'; // Import the language context

const Navbar = () => {
  const { getTranslation } = useLanguage(); // Access the translation function

  return (
    <nav className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">{getTranslation('home')}</h1> {/* Using translation */}
        <div>
          <a href="/" className="mx-4">{getTranslation('home')}</a> {/* Using translation */}
          <a href="/search" className="mx-4">{getTranslation('search')}</a> {/* Using translation */}
          <a href="/settings" className="mx-4">{getTranslation('settings')}</a> {/* Using translation */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
