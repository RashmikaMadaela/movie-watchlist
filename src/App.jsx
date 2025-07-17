import { useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';

function App() {
  // We'll load the initial state from localStorage
  const [watchlist, setWatchlist] = useState(() => {
    const savedWatchlist = localStorage.getItem('watchlist');
    return savedWatchlist ? JSON.parse(savedWatchlist) : [];
  });

  // useEffect to save to localStorage whenever the watchlist changes
  useEffect(() => {
    localStorage.setItem('watchlist', JSON.stringify(watchlist));
  }, [watchlist]);


  const addMovieToWatchlist = (movieToAdd) => {
    const isAlreadyAdded = watchlist.some(movie => movie.id === movieToAdd.id);
    if (!isAlreadyAdded) {
      setWatchlist(prevWatchlist => [...prevWatchlist, movieToAdd]);
    } else {
      alert(`${movieToAdd.title} is already in your watchlist!`);
    }
  };

  // 1. Create the function to remove a movie
  const removeMovieFromWatchlist = (movieIdToRemove) => {
    setWatchlist(prevWatchlist => 
      prevWatchlist.filter(movie => movie.id !== movieIdToRemove)
    );
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <header className="p-4 shadow-md shadow-gray-800">
        <nav className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-cyan-400">
            MovieApp
          </Link>
          <Link to="/watchlist" className="bg-cyan-600 text-white font-semibold py-2 px-4 rounded hover:bg-cyan-700 transition-colors">
            My Watchlist <span className="bg-cyan-800 text-xs rounded-full px-2 py-1 ml-1">{watchlist.length}</span>
          </Link>
        </nav>
      </header>

      <main className="p-4 md:p-8">
        <Outlet context={{ 
          watchlist, 
          addMovieToWatchlist, 
          removeMovieFromWatchlist // 2. Pass the new function down
        }} />
      </main>
    </div>
  );
}

export default App;