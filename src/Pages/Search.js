import React, { useState } from 'react';
import './search.css'; // Import a CSS file for styling

export default function Search({ setCity }) {
  const handleChange = (e) => {
    setCurrCity(e.target.value);
  };
  const handleSearch = () => {
    setCity(currCity);
  };
  const [currCity, setCurrCity] = useState('');

  return (
    <div className="search-container">
      <input
        className="search-input"
        type="text"
        placeholder="Enter city name"
        value={currCity}
        onChange={handleChange}
      />
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}
