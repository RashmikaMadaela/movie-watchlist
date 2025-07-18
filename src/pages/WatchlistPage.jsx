import React from 'react';
import { useOutletContext } from 'react-router-dom';
import MovieCard from '../components/MovieCard';

function WatchlistPage() {
  // 1. Get the remove function from the context
  const { watchlist, removeMovieFromWatchlist } = useOutletContext(); 

  return (
    <div className="container mx-auto p-4"> 
      <h2 className="text-3xl font-bold mb-6">My Watchlist</h2>
      {watchlist.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {watchlist.map(movie => (
            <MovieCard 
              key={movie.id} 
              movie={movie} 
              // 2. Pass the remove function instead of the add function
              onRemoveFromWatchlist={removeMovieFromWatchlist}
              // 3. Add a prop to identify this as a watchlist card
              isWatchlist={true}
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