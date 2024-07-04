import React, { useState } from 'react';

/**
 * SearchBar component that provides a text input for filtering products.
 */
const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div id="search-bar" className="mb-4">
      <input
        type="text"
        id="search-input"
        className="form-control"
        placeholder="Search for a product"
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
