import { useState, useEffect } from 'react';
import { fetchPopularMovies, searchMovies } from './services/tmdb'; // Import searchMovies
import MovieCard from './components/MovieCard';
import SearchBar from './components/SearchBar'; // Import SearchBar

function App() {
  const [movies, setMovies] = useState([]);
  const [listTitle, setListTitle] = useState('Popular Movies'); // State for the title

  // Fetch popular movies on initial load
  useEffect(() => {
    const getMovies = async () => {
      const popularMovies = await fetchPopularMovies();
      setMovies(popularMovies);
    };
    getMovies();
  }, []);

  // This function will be passed to the SearchBar
  const handleSearch = async (query) => {
    const searchResults = await searchMovies(query);
    setMovies(searchResults);
    setListTitle(`Search Results for: "${query}"`); // Update the title
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen p-4 md:p-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">Movie Watchlist</h1>
      
      {/* Add the SearchBar component */}
      <SearchBar onSearch={handleSearch} />
      
      <h2 className="text-2xl font-semibold mb-6">{listTitle}</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default App;