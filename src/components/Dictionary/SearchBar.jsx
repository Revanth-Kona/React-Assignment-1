// src/components/SearchBar.jsx
import React from 'react';
import './SearchBar.css';

const SearchBar = ({ word, setWord, fetchDefinition }) => (
  <div className="search-bar">
    <input
      type="text"
      placeholder="Enter a word..."
      value={word}
      onChange={(e) => setWord(e.target.value)}
    />
    <button onClick={fetchDefinition}>Search</button>
  </div>
);

export default SearchBar;
