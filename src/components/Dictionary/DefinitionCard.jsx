// src/components/DefinitionCard.jsx
import React from 'react';
import './DefinitionCard.css';

const DefinitionCard = ({ definition }) => {
  const { word, meanings, phonetics } = definition;
  return (
    <div className="definition-card">
      <h2>{word}</h2>
      <p className="phonetic">{phonetics[0]?.text}</p>
      {meanings.map((meaning, index) => (
        <div key={index} className="meaning">
          <h3>{meaning.partOfSpeech}</h3>
          <p>{meaning.definitions[0]?.definition}</p>
          {meaning.definitions[0]?.example && (
            <p className="example">Example: {meaning.definitions[0].example}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default DefinitionCard;
