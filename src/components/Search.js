import * as React from 'react';

function Search({ onSearch }) {
  const [query, setQuery] = React.useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    if (onSearch && query) {
      onSearch(query);
      setQuery('');
    }
  };

  return (
    <div className="flex items-center">
      <input
        type="text"
        className="bg-white text-gray-900 rounded-l-md px-4 py-2 h-10 w-48 text-lg"
        placeholder="Search..."
        value={query}
        onChange={handleInputChange}
      />
      <button
        className="bg-blue-900 text-white rounded-r-md px-4 py-2 h-10 text-lg"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
}

export default Search;