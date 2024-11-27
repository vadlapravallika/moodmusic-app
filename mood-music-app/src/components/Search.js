import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
    setQuery('');
  };

  return (
    <div className="p-6 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Search</h2>
      <input
        type="text"
        placeholder="Search for songs or moods..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full border px-4 py-2 rounded mb-4"
      />
      <button
        onClick={handleSearch}
        className="bg-indigo-500 text-white px-4 py-2 rounded"
      >
        Search
      </button>
    </div>
  );
};

export default Search;
