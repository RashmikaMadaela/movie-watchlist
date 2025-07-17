import { useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom'; // Import Outlet and Link

function App() {
  const [watchlist, setWatchlist] = useState([]);

  // This function adds a movie to the watchlist
  const addMovieToWatchlist = (movieToAdd) => {
    const isAlreadyAdded = watchlist.some(movie => movie.id === movieToAdd.id);
    if (!isAlreadyAdded) {
      setWatchlist(prevWatchlist => [...prevWatchlist, movieToAdd]);
    } else {
      alert(`${movieToAdd.title} is already in your watchlist!`);
    }
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
        {/* The Outlet component renders the current page (HomePage or WatchlistPage) */}
        {/* We pass state and functions down to them via the 'context' prop */}
        <Outlet context={{ watchlist, addMovieToWatchlist }} />
      </main>
    </div>
  );
}

export default App;