import React from 'react';

const Track = ({ title, artist }) => (
  <div className="flex flex-col items-center">
    <h3 className="text-lg font-bold">{title}</h3>
    <p className="text-sm text-gray-500">{artist}</p>
  </div>
);

export default Track;
