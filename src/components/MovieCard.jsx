import React from 'react';

// The base URL for TMDb images
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

function MovieCard({ movie }) {
  const posterUrl = movie.poster_path 
    ? `${IMAGE_BASE_URL}${movie.poster_path}`
    : 'https://via.placeholder.com/500x750?text=No+Image'; // Placeholder if no poster

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-cyan-500/50 transition-shadow duration-300 ease-in-out">
      <img 
        src={posterUrl} 
        alt={`Poster for ${movie.title}`} 
        className="w-full h-auto"
      />
      <div className="p-4">
        <h3 className="font-bold text-lg truncate" title={movie.title}>
          {movie.title}
        </h3>
        <p className="text-gray-400 text-sm">
          Release Date: {movie.release_date}
        </p>
      </div>
    </div>
  );
}

export default MovieCard;