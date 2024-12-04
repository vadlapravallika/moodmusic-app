## Mood Music

### Overview

**Mood Music** is a personalized music streaming app designed to curate music playlists based on a user's current emotional state. The app helps users find the right music for any mood they are in, whether they are feeling **happy**, **sad**, **relaxed**, **energetic**, or even looking for **motivational** tracks. 

It also integrates features like **mood tracking**, **audio therapy** for relaxation, **mood quotes**, and even engaging **games** related to mood identification. 

**Mood Music** offers a unique combination of music, mental wellness, and entertainment in one platform!

---

### Features

1. **Mood-Based Playlist Generation**:
   - Select your current mood, and the app generates a personalized playlist of songs based on that mood.
   - Moods available: Happy, Sad, Relaxed, Energetic, Motivational, etc.

2. **Mood Tracker**:
   - Track your mood over time and visualize the frequency of each mood.
   - Provides insight into your emotional well-being with a graphical representation (using **Chart.js**).

3. **Audio Therapy**:
   - Includes soothing soundscapes and therapeutic background sounds designed to reduce stress and help with focus.

4. **Mood Quotes**:
   - Daily uplifting quotes that match your mood. These motivational and comforting quotes can help boost your mental well-being.

5. **Games**:
   - **Mood Emoji Game**: Match emotions with the right emoji.
   - **Whack-a-Mood**: A fun game to whack the correct mood emoji as it pops up on the screen.

6. **Music Player**:
   - **In-App Music Player** with basic controls like Play/Pause, Skip, Volume control, and Seekbar.
   - Adjustable **volume control** and **mute button**.
   - Display of **album art** and **album information** along with the song.

7. **Seamless Navigation**:
   - Built with **React Router**, users can seamlessly navigate between features like Playlist, Mood Selector, and Games.

8. **Responsive Design**:
   - Built with **Tailwind CSS** for a fully responsive and mobile-friendly UI.

---

### Technologies Used

- **React.js**:
   - For building the app's user interface.
   - Utilizes React’s **useState**, **useEffect**, **useContext**, and **useRef** hooks for state management, effects, and component references.
   
- **Tailwind CSS**:
   - A utility-first CSS framework for fast and responsive UI development. It provides custom design solutions and responsiveness across devices.

- **React Router**:
   - Enables client-side routing for navigating between different pages like Mood Selector, Playlist, and Games.

- **Chart.js**:
   - Used for visualizing mood history and frequency over time in the **Mood Tracker** feature.

- **React Context API**:
   - For managing global states such as **selected mood**, **playlist**, and **user language preference** across the app.

- **React Icons**:
   - Used for adding interactive icons like volume control, play/pause buttons, and other UI elements.

- **React-Confetti**:
   - Used to create a celebratory confetti effect when the user wins a game or achieves a goal (e.g., completing a mood tracker).

- **JavaScript**:
   - Used to handle core logic for controlling audio playback, song selection, playlist management, and user interactions.

---

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/mood-music.git
   ```

2. **Navigate to the Project Folder**:
   ```bash
   cd mood-music
   ```

3. **Install Dependencies**:
   Make sure you have **Node.js** installed. Then, run:
   ```bash
   npm install
   ```

4. **Start the Development Server**:
   ```bash
   npm start
   ```
   Visit [http://localhost:3000](http://localhost:3000) in your browser to access the app.

---

### How to Use

1. **Select a Mood**: On the homepage, choose your current mood from the available options.
2. **Listen to Your Playlist**: Based on the selected mood, a custom playlist will be generated for you.
3. **Track Your Mood**: Use the **Mood Tracker** to log and track your mood over time. The app will visualize it for you.
4. **Engage with Games**: Play **Mood Emoji Game** or **Whack-a-Mood** for fun while reflecting on your emotional state.
5. **Enjoy Music & Quotes**: Play relaxing or motivational songs while reading mood-based quotes to uplift yourself.

---

### Resources and Links

- **React Documentation**: [React Docs](https://reactjs.org/docs/getting-started.html)
- **Tailwind CSS Documentation**: [Tailwind Docs](https://tailwindcss.com/docs)
- **Chart.js Documentation**: [Chart.js Docs](https://www.chartjs.org/docs/latest/)
- **React Router Documentation**: [React Router Docs](https://reactrouter.com/)
- **React Icons Documentation**: [React Icons Docs](https://react-icons.github.io/react-icons/)
- **React-Confetti Documentation**: [React Confetti Docs](https://www.npmjs.com/package/react-confetti)

---

### Screenshots

![Mood Music Screenshot](./screenshots/screenshot.png)

---

### Contributing

Feel free to fork the repository, create a new branch, and submit a pull request. Contributions are always welcome, whether it’s for bug fixes, new features, or improving documentation.

---

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Created by Pravallika**  
For inquiries, contact at (pvadla@hawk.iit.edu)


