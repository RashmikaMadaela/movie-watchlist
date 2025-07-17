import { useState } from 'react';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault(); // Prevents the browser from reloading the page
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex justify-center mb-10">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a movie..."
        className="w-full max-w-md px-4 py-2 text-gray-900 bg-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
      />
      <button
        type="submit"
        className="px-6 py-2 bg-cyan-600 text-white font-semibold rounded-r-md hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;