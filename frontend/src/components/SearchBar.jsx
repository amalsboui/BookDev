import React, { useState } from 'react';
import PropTypes from 'prop-types'; 

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center my-8">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for books..."
        className="px-4 py-2 border border-primary rounded-l-lg focus:outline-none"
      />
      <button
        type="submit"
        className="bg-accent text-dark px-6 py-2 rounded-r-lg hover:bg-primary transition-colors"
      >
        Search
      </button>
    </form>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired  
};

export default SearchBar;