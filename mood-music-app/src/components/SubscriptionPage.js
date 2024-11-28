import React from 'react';
import { useNavigate } from 'react-router-dom';

const SubscriptionPage = () => {
  const navigate = useNavigate();

  const handleSubscription = (plan) => {
    alert(`Subscribed to ${plan} plan!`);
    navigate('/mood-selector'); // Navigate to Mood Selector
  };

  return (
    <div className="subscription-container p-6 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Choose Your Plan</h2>
      <div className="subscription-plan bg-gray-100 p-4 rounded mb-4">
        <h3>Basic Plan - $5/month</h3>
        <button
          onClick={() => handleSubscription('Basic')}
          className="bg-indigo-500 text-white px-4 py-2 rounded mt-2"
        >
          Subscribe
        </button>
      </div>
      <div className="subscription-plan bg-gray-100 p-4 rounded mb-4">
        <h3>Premium Plan - $10/month</h3>
        <button
          onClick={() => handleSubscription('Premium')}
          className="bg-indigo-500 text-white px-4 py-2 rounded mt-2"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default SubscriptionPage;
