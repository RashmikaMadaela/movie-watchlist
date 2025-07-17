import React from 'react';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

function MovieCard({ 
  movie, 
  onAddToWatchlist, 
  onRemoveFromWatchlist, 
  isWatchlist = false // Default isWatchlist to false
}) {
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

        <div className="mt-auto">
          {isWatchlist ? (
            // If it's on the watchlist, show the "Remove" button
            <button
              onClick={() => onRemoveFromWatchlist(movie.id)}
              className="w-full bg-red-600 text-white font-semibold py-2 rounded hover:bg-red-700 transition-colors"
            >
              Remove
            </button>
          ) : (
            // Otherwise, show the "Add to Watchlist" button
            <button
              onClick={() => onAddToWatchlist(movie)}
              className="w-full bg-cyan-600 text-white font-semibold py-2 rounded hover:bg-cyan-700 transition-colors"
            >
              Add to Watchlist
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default MovieCard;