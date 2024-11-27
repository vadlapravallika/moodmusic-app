import React from 'react';

const EmotionVisualizer = ({ mood }) => {
  if (!mood) {
    return <p className="text-gray-500">No mood selected. Please go back and select a mood!</p>;
  }

  const getColor = () => {
    switch (mood.toLowerCase()) {
      case 'happy': return 'bg-yellow-400';
      case 'sad': return 'bg-blue-400';
      case 'relaxed': return 'bg-green-400';
      default: return 'bg-gray-300';
    }
  };

  return (
    <div className="h-40 w-40 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mt-8">
      <div className={`${getColor()} h-full w-full flex items-center justify-center rounded-full`}>
        {mood}
      </div>
    </div>
  );
};

export default EmotionVisualizer;
