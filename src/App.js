import React, { useState } from 'react';
import './App.css';
import WebElementsTable from './components/WebElementsTable'; // Importa el componente
import HeaderHandler from './components/HeaderHandler'; // Importa el manejador del encabezado

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showWebElements, setShowWebElements] = useState(false);
  const [showDefaultContent, setShowDefaultContent] = useState(true); 
  const { headerText, headerSubtext, updateHeaderText, categoryHeaders } = HeaderHandler(); // Utiliza el HeaderHandler

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleCategory = (category) => {
    setShowDefaultContent(false); 
    setShowWebElements(true);
    updateHeaderText(category, categoryHeaders[category]);
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
           <div className="grid-item fade-in" >
              <button onClick={() => toggleCategory("Web Elements")}><h3>Web Elements</h3></button>
            </div>
            <div className="grid-item fade-in">
              <button onClick={() => toggleCategory("APIs")}><h3>APIs</h3></button>
           </div>
           <div className="grid-item fade-in">
              <button onClick={() => toggleCategory("IDEs & Editors")}><h3>IDEs & Editors</h3></button>
           </div>
           <div className="grid-item fade-in">
              <button onClick={() => toggleCategory("Courses")}><h3>Courses</h3></button>
           </div>
           <div className="grid-item fade-in">
              <button onClick={() => toggleCategory("Databases")}><h3>Databases</h3></button>
           </div>
           <div className="grid-item fade-in">
              <button onClick={() => toggleCategory("Design Tools")}><h3>Design Tools</h3></button>
           </div>
           <div className="grid-item fade-in">
              <button onClick={() => toggleCategory("Hosting")}><h3>Hosting</h3></button>
           </div>
           <div className="grid-item fade-in">
              <button onClick={() => toggleCategory("Forums")}><h3>Forums</h3></button>
           </div>
         </div>
        ) : (
          <WebElementsTable />
        )}
      </main>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <p>Check out what the Open Source community has to offer. Thanks for visiting!</p>
          </div>
          <div className="footer-section">
            <ul className="legal-links">
              <li><a href="/terms-and-conditions" target="_blank" rel="noreferrer">Terms and Conditions</a></li>
              <li><a href="/privacy-policy" target="_blank" rel="noreferrer">Privacy Policy</a></li>
              <li><a href="/cookie-policy" target="_blank" rel="noreferrer">Cookie Policy</a></li>
              <li><a href="/disclaimer" target="_blank" rel="noreferrer">Disclaimer</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;