import React, { useState } from 'react';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : 'light-mode'} fade-in`}>
      <nav className="navbar">
        <div className="navbar-brand">OpenDevTools</div>
        <label className="switch">
          <input type="checkbox" onChange={toggleDarkMode} />
          <span className="slider"></span>
        </label>
      </nav>
      <header className="App-header fade-in" style={{ animationDelay: '0s' }}>
        <h2>Empowering Developers Everywhere</h2>
        <p>Discover a vast collection of free, open-source resources designed to elevate your projects. Start building better, faster, and smarter today!</p>
      </header>
      <main>
        <div className="grid-container fade-in">
          <div className="grid-item fade-in" style={{ animationDelay: '0.2s' }}>
            <button className="learn-more">Web Elements</button>
          </div>
          <div className="grid-item fade-in" style={{ animationDelay: '0.4s' }}>
            <button className="learn-more">APIs</button>
          </div>
          <div className="grid-item fade-in" style={{ animationDelay: '0.6s' }}>
            <button className="learn-more">IDEs & Editors</button>
          </div>
          <div className="grid-item fade-in" style={{ animationDelay: '0.8s' }}>
            <button className="learn-more">Courses</button>
          </div>
          <div className="grid-item fade-in" style={{ animationDelay: '1s' }}>
            <button className="learn-more">Databases</button>
          </div>
          <div className="grid-item fade-in" style={{ animationDelay: '1.2s' }}>
            <button className="learn-more">Design Tools</button>
          </div>
          <div className="grid-item fade-in" style={{ animationDelay: '1.4s' }}>
            <button className="learn-more">Hosting</button>
          </div>
          <div className="grid-item fade-in" style={{ animationDelay: '1.6s' }}>
            <button className="learn-more">Forums</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
