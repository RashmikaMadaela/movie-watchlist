import React from 'react';
import { useOutletContext } from 'react-router-dom';
import MovieCard from '../components/MovieCard';

function WatchlistPage() {
  // 1. Get the remove function from the context
  const { watchlist, removeMovieFromWatchlist } = useOutletContext(); 

  return (
    <div className="w-full p-4 flex flex-col items-center"> 
      <h2 className="text-3xl font-bold mb-6">My Watchlist</h2>
      {watchlist.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 w-full max-w-7xl mx-auto">
          {watchlist.map(movie => (
            <MovieCard 
              key={movie.id} 
              movie={movie} 
              onRemoveFromWatchlist={removeMovieFromWatchlist}
              isWatchlist={true}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center w-full min-h-[40vh]">
          <p className="text-gray-400 text-xl">Your watchlist is empty. Add some movies!</p>
        </div>
      )}
    </div>
  );
}

export default WatchlistPage;