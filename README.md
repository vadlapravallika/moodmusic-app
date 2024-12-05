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
   [git clone https://github.com/your-username/mood-music.git](https://github.com/vadlapravallika/moodmusic-app.git)
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

   Live Page(https://moodmusic-app-valli-git-main-pravallika-vadlas-projects.vercel.app/)

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

Landing/Home Page
![image](https://github.com/user-attachments/assets/5963df81-ef77-408b-94d2-3406bcb8a50c)
Mood Selector 
![image](https://github.com/user-attachments/assets/714d1994-7c26-43a0-a6c7-57abe6729403)
PlaylistPage
![image](https://github.com/user-attachments/assets/fe5d3acf-fbde-4cc1-b8b9-d344bcc5c1c5)
![image](https://github.com/user-attachments/assets/2f9917aa-d747-4b27-82b8-e8d4b443c441)
Games
![image](https://github.com/user-attachments/assets/b0ac6984-676f-4c01-97be-ac6e986260b0)
![image](https://github.com/user-attachments/assets/aac2cffe-e1db-4285-b0b5-1110399f420b)
![image](https://github.com/user-attachments/assets/da8025c2-7506-4e61-956b-bf81a15736c5)
Quote
![image](https://github.com/user-attachments/assets/cbe62150-c3f6-4486-ad62-7746978627cf)
Mood Tracker
![image](https://github.com/user-attachments/assets/266566b2-fe2d-4b8a-a0be-3a52fa10895c)
Audio Therapy
![image](https://github.com/user-attachments/assets/d77c2ad4-2cf0-42a9-b618-9e5ebc64e81d)
Settings dark
![image](https://github.com/user-attachments/assets/ae5771e3-98c1-46cf-8e7f-d3facfbba372)
About
![image](https://github.com/user-attachments/assets/b24a6dc0-4a1a-4a83-b722-f6c31f75b4b5)

---
Here is how you can add the **Lessons Learned** and **Future Scope** sections to your **README** file:

---

### Lessons Learned

During the development of **Mood Music**, I gained valuable insights and learned several important lessons:

1. **Understanding State Management with React Context**:
   - I gained a deeper understanding of how the **Context API** in React can be used to manage global states, such as selected moods and playlists. It simplified state sharing between components, reducing the complexity of prop drilling.

2. **Handling Audio in React**:
   - Managing audio playback in React, including features like **play/pause**, **volume control**, and **seekbar**, helped me learn how to interact with the HTML5 `<audio>` element and how to manage its state in a React-based app.

3. **Building Responsive Interfaces with Tailwind CSS**:
   - I learned how to rapidly build responsive and aesthetically pleasing interfaces using **Tailwind CSS**. The utility-first approach allowed me to quickly adjust styles without worrying too much about writing custom CSS.

4. **Real-time State Updates and Performance**:
   - I learned how **useState** and **useEffect** can help with handling real-time data (like the current time in a song or mood tracking). Ensuring efficient state updates while maintaining performance was a key takeaway.

5. **Integrating External Libraries**:
   - Integrating third-party libraries like **Chart.js** for mood tracking and **React-Confetti** for celebratory animations taught me the value of leveraging existing tools to save development time and enhance functionality.

6. **Building Interactive Features**:
   - The experience of building interactive features like **Mood Emoji Game** and **Whack-A-Mood** improved my skills in handling user interactions, animations, and keeping track of user input in real-time.

7. **User-Centric Design**:
   - By focusing on user experience (UX), I learned how to design features that cater to users' needs, such as mood-based music generation, personalized playlists, and mood reflection tools.

---

### Future Scope

There are many ways **Mood Music** can evolve in the future. Below are some ideas and features I plan to explore:

1. **AI-Powered Music Recommendation**:
   - Implementing a **machine learning** or **AI** model to provide even more personalized music recommendations based on user listening habits and preferences.

2. **Multi-Language Support**:
   - While the app currently supports a few languages, expanding it to include **more languages** (including regional ones) would increase its accessibility for users worldwide.

3. **Social Integration**:
   - Adding features for users to share their playlists, moods, or favorite quotes on **social media** platforms could make the app more interactive and engaging.

4. **Mood-based Radio**:
   - Implementing a **mood-based radio station** that continuously plays songs related to the user’s selected mood could provide an uninterrupted music experience.

5. **Sleep and Relaxation Mode**:
   - Adding features specifically designed for users looking to relax or fall asleep, such as **ambient soundscapes**, **white noise**, or **guided meditation tracks**, could make the app more useful for wellness.

6. **Enhanced Mood Tracker**:
   - Incorporating **more detailed mood tracking**, such as daily mood logs and historical data, would provide users with deeper insights into their emotional well-being over time.

7. **Offline Mode**:
   - Adding an **offline mode** for users to access their playlists and play music without an internet connection would enhance the usability of the app in low-connectivity environments.

8. **Collaboration Features**:
   - Allow users to **collaborate on playlists** with friends or share music selections with others, making the app more social and community-driven.

9. **User Profiles and Customization**:
   - Allow users to create **personal profiles** with customizable settings, such as theme preferences, favorite moods, and personalized recommendations.

10. **Integration with Fitness Apps**:
    - Integration with **fitness tracking apps** like Fitbit or Apple Health to create playlists based on the user’s activity or workout session (e.g., energetic playlists for workouts, calm playlists for yoga or meditation).

By incorporating these features and improvements, **Mood Music** can become a more comprehensive app for both entertainment and emotional well-being.

### Contributing

Feel free to fork the repository, create a new branch, and submit a pull request. Contributions are always welcome, whether it’s for bug fixes, new features, or improving documentation.


---

**Created by Pravallika**  
For inquiries, contact at (pvadla@hawk.iit.edu)


