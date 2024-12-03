import React from "react";
import { useNavigate } from "react-router-dom";


const GameSelection = () => {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex justify-start items-center relative"
      style={{ backgroundImage: "url('/game.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Game Cards */}
      <div className="relative z-10 flex flex-col gap-6 pl-10">
        {/* Title */}
        <h2 className="text-4xl font-extrabold text-white mb-6">
          🎮 Choose Your Game
        </h2>

        {/* Emoji Mood Matching */}
        <div
          className="group bg-gradient-to-br from-purple-500 to-pink-400 p-4 rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 cursor-pointer w-56"
          onClick={() => navigate("/emoji-mood-game")}
        >
          <div className="flex flex-col items-center">
            <div className="text-4xl mb-2">🌈</div>
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gray-100 text-center">
              Emoji Mood Matching
            </h3>
            <button className="bg-white text-purple-600 font-medium px-4 py-2 rounded-full shadow-md hover:bg-gray-100 transition-all">
              Play
            </button>
          </div>
        </div>

        {/* Whack-a-Mood */}
        <div
          className="group bg-gradient-to-br from-green-500 to-teal-400 p-4 rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 cursor-pointer w-56"
          onClick={() => navigate("/whack-a-mood")}
        >
          <div className="flex flex-col items-center">
            <div className="text-4xl mb-2">🎯</div>
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gray-100 text-center">
              Whack-a-Mood
            </h3>
            <button className="bg-white text-green-600 font-medium px-4 py-2 rounded-full shadow-md hover:bg-gray-100 transition-all">
              Play
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameSelection;
