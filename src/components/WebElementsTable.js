// JSX
import React from 'react';
import './TableElements.css';

function WebElementsTable() {
  return (
    <div className="card-container fade-in">
      <div className="card">
        <div className="card-details">
          <p className="text-title">Uiverse.io</p>
          <p className="text-body">Open-Source UI elements for any project.
            Create, share, and use
            beautiful custom elements made with CSS or Tailwind.</p>
        </div>
        <a href="https://uiverse.io/" className="card-button" target="_blank" rel="noopener noreferrer">More info</a>
      </div>
    </div>
  );
}

export default WebElementsTable;
