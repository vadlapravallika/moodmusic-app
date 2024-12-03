import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2'; // Importing the Line chart from react-chartjs-2
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const MoodTracker = () => {
  const [moodHistory, setMoodHistory] = useState([]);
  const [mood, setMood] = useState('');

  // Load mood history from localStorage when the component mounts
  useEffect(() => {
    const savedMoodHistory = JSON.parse(localStorage.getItem('moodHistory'));
    if (savedMoodHistory) {
      setMoodHistory(savedMoodHistory);
    }
  }, []);

  // Save mood history to localStorage whenever moodHistory changes
  useEffect(() => {
    localStorage.setItem('moodHistory', JSON.stringify(moodHistory));
  }, [moodHistory]);

  const addMood = () => {
    if (mood) {
      const newMood = { mood, date: new Date().toLocaleString() };
      setMoodHistory([...moodHistory, newMood]);
      setMood('');
    }
  };

  // Data for the graph
  const moodCounts = moodHistory.reduce((acc, { mood }) => {
    acc[mood] = (acc[mood] || 0) + 1;
    return acc;
  }, {});

  // Prepare data for the chart
  const chartData = {
    labels: Object.keys(moodCounts), // Mood names as labels
    datasets: [
      {
        label: 'Mood Frequency',
        data: Object.values(moodCounts), // Mood counts as data
        borderColor: 'rgba(54, 162, 235, 1)', // Use a pleasant color for the graph
        backgroundColor: 'rgba(54, 162, 235, 0.2)', // Slight transparency for better visibility
        tension: 0.4,
        pointRadius: 5,
        pointBackgroundColor: 'rgba(54, 162, 235, 1)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Mood Frequency Over Time',
        font: {
          size: 18,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
        },
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-400 to-indigo-500 p-6">
      {/* Header */}
      <h2 className="text-4xl font-bold text-center text-white mb-6">Mood Tracker</h2>

      <div className="max-w-xl mx-auto bg-white rounded-lg shadow-xl p-6 mb-6">
        {/* Input field for mood */}
        <input
          type="text"
          placeholder="How are you feeling? (Happy, Sad, etc.)"
          value={mood}
          onChange={(e) => setMood(e.target.value)}
          className="w-full border-2 border-gray-300 rounded-md p-4 text-lg focus:outline-none focus:border-teal-500 mb-4"
        />
        <button
          onClick={addMood}
          className="w-full bg-teal-500 text-white py-2 rounded-md text-lg font-semibold hover:bg-teal-600 transition duration-300"
        >
          Add Mood
        </button>
      </div>

      {/* Display Mood Frequency Graph */}
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl p-6">
        <Line data={chartData} options={options} />
      </div>

      {/* Display Mood History */}
      <div className="mt-6 max-w-xl mx-auto bg-white rounded-lg shadow-xl p-6">
        <h3 className="text-xl font-semibold mb-4">Mood History</h3>
        <ul className="space-y-4">
          {moodHistory.map((entry, index) => (
            <li key={index} className="flex justify-between text-lg text-gray-800">
              <span className="font-semibold">{entry.mood}</span>
              <span className="text-sm text-gray-600">{entry.date}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MoodTracker;
