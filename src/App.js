import React, { useState, useEffect } from 'react';
import './App.css';
import WebElementsTable from './components/WebElementsTable';
import HeaderHandler from './components/HeaderHandler';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showWebElements, setShowWebElements] = useState(false);
  const [showDefaultContent, setShowDefaultContent] = useState(true); 
  const [categoryElements, setCategoryElements] = useState([]);
  const [elementsByCategory, setElementsByCategory] = useState({});
  const { headerText, headerSubtext, updateHeaderText, categoryHeaders } = HeaderHandler();

  useEffect(() => {
    fetch('/elementsByCategory.json')
      .then(response => response.json())
      .then(data => setElementsByCategory(data))
      .catch(error => console.error('Error loading JSON data:', error));
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleCategory = (category) => {
    setShowDefaultContent(false); 
    setShowWebElements(true);
    updateHeaderText(category, categoryHeaders[category]);
    setCategoryElements(elementsByCategory[category] || []);
  };

  const toggleDefaultContent = () => {
    setShowDefaultContent(true); 
    setShowWebElements(false); 
    updateHeaderText("Empowering Developers Everywhere", "Discover a vast collection of free, open-source resources designed to elevate your projects. Start building better, faster, and smarter today!");
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : 'light-mode'} fade-in`}>
      <nav className="navbar">
        <div className="navbar-brand">OpenDevTools</div>
        <div>
          <button className="back-to-home" onClick={toggleDefaultContent} style={{ display: showWebElements ? 'block' : 'none' }}><span>Home</span></button>
          <label className="switch">
            <input type="checkbox" onChange={toggleDarkMode} />
            <span className="slider"></span>
          </label>
        </div>
      </nav>

      <header className="App-header fade-in">
        <h1>{headerText}</h1>
        <h2>{headerSubtext}</h2>
      </header>
      <main>
        {showDefaultContent ? (
           <div className="grid-container fade-in">
             {Object.keys(elementsByCategory).map(category => (
               <div className="grid-item fade-in" key={category}>
                 <button onClick={() => toggleCategory(category)}><h3>{category}</h3></button>
               </div>
             ))}
           </div>
        ) : (
          <WebElementsTable elements={categoryElements} />
        )}
      </main>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <p>Webpage designed & developed by <a href='https://github.com/Z4k3n'>Z4k3n</a>, hope it helps you. Happy coding!</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
