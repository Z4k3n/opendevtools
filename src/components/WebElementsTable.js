import React from 'react';
import './TableElements.css';

function WebElementsTable({ elements }) {
  return (
    <div className="card-container fade-in">
      {elements.map((element, index) => (
        <div className="card" key={index}>
          <h3 className="text-title">{element.name}</h3>
          <p className="text-body">{element.description}</p>
          <a href={element.url} className="card-button" target="_blank" rel="noopener noreferrer">More info</a>
        </div>
      ))}
    </div>
  );
}

export default WebElementsTable;
