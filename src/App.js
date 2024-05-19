import React, { useState } from 'react';
import './App.css';
import WebElementsTable from './components/WebElementsTable'; // Importa el componente

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showWebElements, setShowWebElements] = useState(false);
  const [showDefaultContent, setShowDefaultContent] = useState(true); // Nuevo estado para controlar la visualización del contenido predeterminado

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleWebElements = () => {
    setShowWebElements(!showWebElements);
    setShowDefaultContent(false); // Al hacer clic en "Web Elements", oculta el contenido predeterminado
  };

  const toggleDefaultContent = () => {
    setShowDefaultContent(true); // Al hacer clic en el botón de inicio, muestra el contenido predeterminado
    setShowWebElements(false); // Oculta la tabla de elementos web cuando se muestra el contenido predeterminado
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

      <header className="App-header fade-in" style={{ animationDelay: '0.2s' }}>
        <h2>Empowering Developers Everywhere</h2>
        <p>Discover a vast collection of free, open-source resources designed to elevate your projects. Start building better, faster, and smarter today!</p>
      </header>
      <main>
        {showDefaultContent ? (
           <div className="grid-container fade-in">
           <div className="grid-item fade-in" style={{ animationDelay: '0.2s' }}>
              <button onClick={toggleWebElements}>Web Elements</button>
            </div>
           <div className="grid-item fade-in" style={{ animationDelay: '0.4s' }}>
             <button >APIs</button>
           </div>
           <div className="grid-item fade-in" style={{ animationDelay: '0.6s' }}>
             <button >IDEs & Editors</button>
           </div>
           <div className="grid-item fade-in" style={{ animationDelay: '0.8s' }}>
             <button >Courses</button>
           </div>
           <div className="grid-item fade-in" style={{ animationDelay: '1s' }}>
             <button >Databases</button>
           </div>
           <div className="grid-item fade-in" style={{ animationDelay: '1.2s' }}>
             <button >Design Tools</button>
           </div>
           <div className="grid-item fade-in" style={{ animationDelay: '1.4s' }}>
             <button >Hosting</button>
           </div>
           <div className="grid-item fade-in" style={{ animationDelay: '1.6s' }}>
             <button >Forums</button>
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
