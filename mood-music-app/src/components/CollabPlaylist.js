import React, { useState } from 'react';

const CollabPlaylist = () => {
  const [contributors, setContributors] = useState([]);

  const addContributor = (name) => {
    setContributors([...contributors, name]);
  };

  return (
    <div>
      <h2>Collaborative Playlist</h2>
      <button onClick={() => addContributor('User ' + (contributors.length + 1))}>
        Add Contributor
      </button>
      <ul>
        {contributors.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CollabPlaylist;
