import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { fetchPopularMovies, searchMovies } from '../services/tmdb';
import MovieCard from '../components/MovieCard';
import SearchBar from '../components/SearchBar';

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [listTitle, setListTitle] = useState('Popular Movies');
  const { addMovieToWatchlist } = useOutletContext(); // Get the add function from the context

  useEffect(() => {
    const getMovies = async () => {
      const popularMovies = await fetchPopularMovies();
      setMovies(popularMovies);
    };
    getMovies();
  }, []);

  const handleSearch = async (query) => {
    const searchResults = await searchMovies(query);
    setMovies(searchResults);
    setListTitle(`Search Results for: "${query}"`);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <h2 className="text-2xl font-semibold mb-6">{listTitle}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {movies.map(movie => (
          <MovieCard 
            key={movie.id} 
            movie={movie} 
            onAddToWatchlist={addMovieToWatchlist} 
          />
        ))}
      </div>
    </>
  );
}

export default HomePage;