// src/App.jsx
import React, { useState } from 'react';
import axios from 'axios';
import DefinitionCard from './DefinitionCard';
import './Dictionary.css'
import SearchBar from './SearchBar'


const Dictionary = () => {
  const [word, setWord] = useState('');
  const [definition, setDefinition] = useState(null);

  const fetchDefinition = async () => {
    try {
      const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      setDefinition(response.data[0]);
    } catch (error) {
      console.error("Error fetching the word's definition", error);
      setDefinition(null);
    }
  };

  return (
    <div className="app">
      <h1>Dictionary App</h1>
      <SearchBar word={word} setWord={setWord} fetchDefinition={fetchDefinition} />
      {definition && <DefinitionCard definition={definition} />}
    </div>
  );
};

export default Dictionary;
