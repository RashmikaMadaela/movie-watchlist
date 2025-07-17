import React from 'react';
import { useOutletContext } from 'react-router-dom';
import MovieCard from '../components/MovieCard';

function WatchlistPage() {
  const { watchlist, addMovieToWatchlist } = useOutletContext(); // Get the watchlist from the context

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">My Watchlist</h2>
      {watchlist.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {watchlist.map(movie => (
            <MovieCard 
              key={movie.id} 
              movie={movie} 
              onAddToWatchlist={addMovieToWatchlist} // We'll replace this soon
            />
          ))}
        </div>
      ) : (
        <p className="text-gray-400">Your watchlist is empty. Add some movies!</p>
      )}
    </div>
  );
}

export default WatchlistPage;