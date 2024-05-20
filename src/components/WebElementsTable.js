// JSX
import React from 'react';
import './TableElements.css';

function WebElementsTable() {
  return (
    <div className="card-container fade-in">

      <div className="card">
        <h3 className="text-title">Uiverse.io</h3>
        <p className="text-body">Open-Source UI elements for any project. Create, share, and use beautiful custom elements made with CSS or Tailwind.</p>
        <a href="https://uiverse.io/" className="card-button" target="_blank" rel="noopener noreferrer">More info</a>
      </div>

      <div className="card">
        <h3 className="text-title">Bootstrap</h3>
        <p className="text-body">CSS, HTML, and JS framework for developing responsive and mobile-first interfaces.</p>
        <a href="https://getbootstrap.com/" className="card-button" target="_blank" rel="noopener noreferrer">More info</a>
      </div>

      <div className="card">
        <h3 className="text-title">Font Awesome</h3>
        <p className="text-body">Collection of scalable icons.</p>
        <a href="https://fontawesome.com/" className="card-button" target="_blank" rel="noopener noreferrer">More info</a>
      </div>

      <div className="card">
        <h3 className="text-title">Tailwind CSS</h3>
        <p className="text-body">Highly customizable utility-first CSS framework.</p>
        <a href="https://tailwindcss.com/" className="card-button" target="_blank" rel="noopener noreferrer">More info</a>
      </div>

      <div className="card">
        <h3 className="text-title">Animate.css</h3>
        <p className="text-body">Library for simple CSS animations.</p>
        <a href="https://animate.style/" className="card-button" target="_blank" rel="noopener noreferrer">More info</a>
      </div>

      <div className="card">
        <h3 className="text-title">React Icons</h3>
        <p className="text-body">Library containing popular icons for React applications.</p>
        <a href="https://react-icons.github.io/react-icons/" className="card-button" target="_blank" rel="noopener noreferrer">More info</a>
      </div>

      <div className="card">
        <h3 className="text-title">Lodash</h3>
        <p className="text-body">Utility library delivering consistency, modularity, and performance to your JS code.</p>
        <a href="https://lodash.com/" className="card-button" target="_blank" rel="noopener noreferrer">More info</a>
      </div>

      <div className="card">
        <h3 className="text-title">React Router</h3>
        <p className="text-body">Declarative routing for React applications.</p>
        <a href="https://reactrouter.com/" className="card-button" target="_blank" rel="noopener noreferrer">More info</a>
      </div>

      <div className="card">
        <h3 className="text-title">Jest</h3>
        <p className="text-body">Delightful JavaScript testing framework with a focus on simplicity.</p>
        <a href="https://jestjs.io/" className="card-button" target="_blank" rel="noopener noreferrer">More info</a>
      </div>
    </div>
  );
}

export default WebElementsTable;
