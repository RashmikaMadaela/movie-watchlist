import { useState, useEffect } from 'react';
import { useParams, useOutletContext } from 'react-router-dom';
import { fetchMovieDetails } from '../services/tmdb';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

function MovieDetailPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // 1. Get the watchlist state and functions from the context
  const { watchlist, addMovieToWatchlist, removeMovieFromWatchlist } = useOutletContext();

  useEffect(() => {
    const getDetails = async () => {
      setIsLoading(true);
      const details = await fetchMovieDetails(movieId);
      setMovie(details);
      setIsLoading(false);
    };
    getDetails();
  }, [movieId]);

  // This check has to happen after the loading is complete and the movie exists
  const isMovieInWatchlist = movie ? watchlist.some(item => item.id === movie.id) : false;

  if (isLoading) {
    // ... skeleton loader code remains the same
    return (
      <div className="w-full p-4 flex flex-col md:flex-row gap-8 animate-pulse max-w-7xl mx-auto">
        <div className="bg-gray-700 w-full md:w-1/3 h-96 rounded-lg"></div>
        <div className="md:w-2/3">
          <div className="bg-gray-700 h-10 w-3/4 mb-4 rounded"></div>
          <div className="bg-gray-700 h-6 w-1/2 mb-6 rounded"></div>
          <div className="bg-gray-700 h-5 w-1/4 mb-6 rounded"></div>
          <div className="bg-gray-700 h-24 w-full rounded"></div>
        </div>
      </div>
    );
  }

  if (!movie) {
    return <div className="text-center text-xl mt-10 w-full">Movie not found.</div>;
  }

  const posterUrl = movie.poster_path
    ? `${IMAGE_BASE_URL}${movie.poster_path}`
    : 'https://via.placeholder.com/500x750?text=No+Image';

  return (
    <div className="w-full p-4 flex flex-col md:flex-row gap-8 max-w-7xl mx-auto">
      <img src={posterUrl} alt={movie.title} className="w-full md:w-1/3 rounded-lg shadow-lg self-start" />
      <div className="md:w-2/3">
        <h1 className="text-4xl font-bold mb-2">{movie.title}</h1>
        <p className="text-gray-400 italic mb-4">{movie.tagline}</p>

        <div className="flex items-center mb-6">
          <span className="text-yellow-400 font-bold text-lg mr-4">⭐ {movie.vote_average.toFixed(1)} / 10</span>
          <span className="text-gray-300">{movie.runtime} min</span>
        </div>
        
        {/* 2. Add the conditional button here */}
        <div className="mb-6">
          {isMovieInWatchlist ? (
            <button 
              onClick={() => removeMovieFromWatchlist(movie.id)}
              className="w-full md:w-auto bg-red-600 text-white font-semibold py-2 px-6 rounded hover:bg-red-700 transition-colors"
            >
              Remove from Watchlist
            </button>
          ) : (
            <button 
              onClick={() => addMovieToWatchlist(movie)}
              className="w-full md:w-auto bg-cyan-600 text-white font-semibold py-2 px-6 rounded hover:bg-cyan-700 transition-colors"
            >
              Add to Watchlist
            </button>
          )}
        </div>

        <div className="mb-6">
          {movie.genres.map(genre => (
            <span key={genre.id} className="bg-gray-700 text-sm rounded-full px-3 py-1 mr-2 mb-2 inline-block">
              {genre.name}
            </span>
          ))}
        </div>
        
        <h2 className="text-2xl font-semibold mb-2">Overview</h2>
        <p className="text-gray-300 leading-relaxed">{movie.overview}</p>
      </div>
    </div>
  );
}

export default MovieDetailPage;