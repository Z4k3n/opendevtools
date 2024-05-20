import React, { useState } from 'react';
import './App.css';
import WebElementsTable from './components/WebElementsTable';
import HeaderHandler from './components/HeaderHandler';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showWebElements, setShowWebElements] = useState(false);
  const [showDefaultContent, setShowDefaultContent] = useState(true); 
  const [categoryElements, setCategoryElements] = useState([]);
  const { headerText, headerSubtext, updateHeaderText, categoryHeaders } = HeaderHandler();

const elementsByCategory = {
  "Web Elements": [
    { name: "Uiverse.io", description: "Open-Source UI elements for any project. Create, share, and use beautiful custom elements made with CSS or Tailwind.", url: "https://uiverse.io/" },
    { name: "Bootstrap", description: "CSS, HTML, and JS framework for developing responsive and mobile-first interfaces.", url: "https://getbootstrap.com/" },
    { name: "Font Awesome", description: "Collection of scalable icons.", url: "https://fontawesome.com/" },
    { name: "Tailwind CSS", description: "Highly customizable utility-first CSS framework.", url: "https://tailwindcss.com/" },
    { name: "Animate.css", description: "Library for simple CSS animations.", url: "https://animate.style/" },
    { name: "React Icons", description: "Library containing popular icons for React applications.", url: "https://react-icons.github.io/react-icons/" },
    { name: "Lodash", description: "Utility library delivering consistency, modularity, and performance to your JS code.", url: "https://lodash.com/" },
    { name: "Jest", description: "Delightful JavaScript testing framework with a focus on simplicity.", url: "https://jestjs.io/" }
  ],
  "APIs": [
    { name: "OpenWeatherMap API", description: "Weather data API providing current weather data, forecasts, and historical data.", url: "https://openweathermap.org/api" },
    { name: "GitHub API", description: "API for accessing GitHub data like repositories, users, and organizations.", url: "https://docs.github.com/en/rest" },
    { name: "REST Countries", description: "API providing information about countries including name, population, languages, and more.", url: "https://restcountries.com/" },
    { name: "Chuck Norris API", description: "API for Chuck Norris jokes and facts.", url: "https://api.chucknorris.io/" },
    { name: "The Dog API", description: "API for random pictures of dogs.", url: "https://thedogapi.com/" },
    { name: "NASA API", description: "API for accessing various NASA data including astronomy, earth science, and space imagery.", url: "https://api.nasa.gov/" },
    { name: "Unsplash API", description: "API for high-quality, free images.", url: "https://unsplash.com/developers" },
    { name: "Twilio API", description: "API for building communication apps including SMS, voice, and video.", url: "https://www.twilio.com/docs/usage/api" }
  ],
  "IDEs & Editors": [
    { name: "Visual Studio Code", description: "Free source-code editor developed by Microsoft.", url: "https://code.visualstudio.com/" },
    { name: "Atom", description: "Open-source text editor developed by GitHub.", url: "https://atom.io/" },
    { name: "Sublime Text", description: "Sophisticated text editor for code, markup, and prose.", url: "https://www.sublimetext.com/" },
    { name: "Vim", description: "Highly configurable text editor built to make creating and changing any kind of text very efficient.", url: "https://www.vim.org/" }
  ],
  "Courses": [
    { name: "freeCodeCamp", description: "Learn to code at your own pace with thousands of free courses.", url: "https://www.freecodecamp.org/" },
    { name: "Coursera", description: "Access to courses, specializations, and degrees offered by universities and companies.", url: "https://www.coursera.org/" },
    { name: "edX", description: "Online learning platform offering university-level courses in a wide range of disciplines.", url: "https://www.edx.org/" },
    { name: "Codecademy", description: "Interactive platform that offers coding classes in various programming languages.", url: "https://www.codecademy.com/" }
  ],
  "Databases": [
    { name: "MongoDB", description: "Document-oriented NoSQL database program.", url: "https://www.mongodb.com/" },
    { name: "MySQL", description: "Open-source relational database management system.", url: "https://www.mysql.com/" },
    { name: "PostgreSQL", description: "Object-relational database system known for its reliability and robustness.", url: "https://www.postgresql.org/" },
    { name: "SQLite", description: "Serverless SQL database engine.", url: "https://www.sqlite.org/index.html" }
  ],
  "Design Tools": [
    { name: "Figma", description: "Collaborative interface design tool.", url: "https://www.figma.com/" },
    { name: "Inkscape", description: "Open-source vector graphics editor.", url: "https://inkscape.org/" },
    { name: "GIMP", description: "Free and open-source raster graphics editor.", url: "https://www.gimp.org/" },
    { name: "Canva", description: "Graphic design platform with a drag-and-drop interface and a library of templates.", url: "https://www.canva.com/" }
  ],
  "Hosting": [
    { name: "Netlify", description: "Build, deploy, and manage modern web projects.", url: "https://www.netlify.com/" },
    { name: "Vercel", description: "Deploy web projects with the speed, scale, and reliability of Vercel's global edge network.", url: "https://vercel.com/" },
    { name: "GitHub Pages", description: "Host your static site or blog directly from your GitHub repository.", url: "https://pages.github.com/" },
    { name: "Firebase Hosting", description: "Web hosting for modern web apps.", url: "https://firebase.google.com/products/hosting" }
  ],
  "Forums": [
    { name: "Stack Overflow", description: "Question and answer site for professional and enthusiast programmers.", url: "https://stackoverflow.com/" },
    { name: "GitHub Discussions", description: "Community forum for GitHub users to discuss projects, topics, and more.", url: "https://github.com/features/discussions" },
    { name: "Dev.to", description: "Community of software developers sharing knowledge and ideas.", url: "https://dev.to/" },
    { name: "Reddit r/programming", description: "Subreddit for discussions about programming.", url: "https://www.reddit.com/r/programming/" }
  ]
};


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
             {/* Renderiza botones para cada categoría */}
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
          <p>Discover the endless possibilities of the Open Source community. Dive into a world of innovation and collaboration with these curated resources. From cutting-edge frameworks to essential APIs and everything in between, there's something here for every developer. Be sure to drop by regularly to stay updated on the latest additions. Thanks for joining us on this journey!</p></div>
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