import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-900 via-purple-900 to-indigo-900 text-white px-6 py-12">
      <h1 className="text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-400">
        About Mood Music
      </h1>
      
      <div className="max-w-6xl mx-auto space-y-16">
        {/* App Overview */}
        <section className="bg-gray-800 p-8 rounded-lg shadow-lg space-y-4">
          <h2 className="text-3xl font-semibold mb-4 text-center text-gradient bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500">
            What Makes Mood Music Unique?
          </h2>
          <p className="text-lg leading-relaxed">
            Mood Music is a unique music streaming and mood-based playlist generator that helps users discover and enjoy music based on their current emotional state. Whether you're feeling happy, sad, relaxed, or energetic, Mood Music offers a personalized music experience with playlists tailored to suit your mood.
          </p>
          <p className="text-lg leading-relaxed">
            The app features a mood selector that lets you choose your current mood, and it generates a playlist based on your selection. Additionally, we offer a unique feature that allows you to track and reflect on your mood over time with the Mood Tracker feature. You can also enjoy motivational tracks, emotional quotes, and soothing audio therapies, all in one app.
          </p>
        </section>

        {/* About Myself */}
        <section className="bg-gray-800 p-8 rounded-lg shadow-lg space-y-4">
          <h2 className="text-3xl font-semibold mb-4 text-center text-gradient bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500">
            About Me
          </h2>
          <p className="text-lg leading-relaxed">
            Hello! I'm Pravallika, the creator of Mood Music. I'm passionate about technology and how it can be used to improve people's lives. With this app, I wanted to combine my love for music with my interest in psychology and emotional well-being. I believe that music has the power to affect our mood and emotions, and Mood Music is designed to harness that power to create a better user experience.
          </p>
          <p className="text-lg leading-relaxed">
            As a developer, my goal is to create useful and enjoyable apps that can help people in their everyday lives. I hope Mood Music brings you joy, comfort, and the perfect music for every moment.
          </p>
        </section>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-xl font-semibold mb-6">Ready to find the perfect song for your mood?</p>
          <button
            onClick={() => window.location.href = "/mood-selector"}
            className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white px-6 py-3 rounded-full text-lg hover:bg-gradient-to-l transition-all"
          >
            Start Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
