const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchPopularMovies = async () => {
  try {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Failed to fetch popular movies:", error);
    return []; // Return an empty array on error
  }
};


export const searchMovies = async (query) => {
  try {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&language=en-US&page=1`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Failed to search movies:", error);
    return [];
  }
};