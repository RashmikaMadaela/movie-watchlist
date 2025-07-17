import React from 'react';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

// 1. Receive the 'onAddToWatchlist' function as a prop
function MovieCard({ movie, onAddToWatchlist }) {
  const posterUrl = movie.poster_path 
    ? `${IMAGE_BASE_URL}${movie.poster_path}`
    : 'https://via.placeholder.com/500x750?text=No+Image';

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-cyan-500/50 transition-shadow duration-300 ease-in-out flex flex-col">
      <img 
        src={posterUrl} 
        alt={`Poster for ${movie.title}`} 
        className="w-full h-auto"
      />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-bold text-lg truncate" title={movie.title}>
          {movie.title}
        </h3>
        <p className="text-gray-400 text-sm mb-4">
          Release Date: {movie.release_date}
        </p>

        {/* 2. Add the button at the bottom */}
        <button
          onClick={() => onAddToWatchlist(movie)}
          className="mt-auto w-full bg-cyan-600 text-white font-semibold py-2 rounded hover:bg-cyan-700 transition-colors"
        >
          Add to Watchlist
        </button>
      </div>
    </div>
  );
}

export default MovieCard;