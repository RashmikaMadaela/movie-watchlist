import { useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import logo from './assets/logo.svg';
import Footer from './components/Footer.jsx';

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
    <div className="bg-gradient-to-br from-gray-900 via-gray-950 to-cyan-950 text-white min-h-screen font-sans flex flex-col">
      <header className="p-4 shadow-lg shadow-cyan-900/30 bg-gradient-to-r from-gray-900 via-gray-800 to-cyan-900">
        <nav className="container mx-auto flex justify-between items-center">
          
          <Link to="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
            <img src={logo} alt="MovieApp logo" className="h-9 w-9 drop-shadow-md" />
            <span className="text-2xl font-extrabold text-cyan-400 tracking-tight">
              Movie Watchlist
            </span>
          </Link>
          <Link to="/watchlist" className="relative bg-cyan-700 text-white font-extrabold py-2 px-6 rounded-lg shadow-md hover:bg-cyan-600 transition-colors flex items-center gap-2">
            <span className="drop-shadow-sm">My Watchlist</span>
            <span className="ml-2 px-2 py-0.5 rounded-full bg-white text-cyan-800 font-bold text-xs border border-cyan-400 shadow-sm min-w-[1.5rem] text-center">
              {watchlist.length}
            </span>
          </Link>
        </nav>
      </header>

      <main className="flex-grow flex justify-center items-start p-4 md:p-8">
        <div className="w-full max-w-7xl bg-gray-900/80 rounded-2xl shadow-xl p-4 md:p-12 mt-4">
          <Outlet context={{ 
            watchlist, 
            addMovieToWatchlist, 
            removeMovieFromWatchlist // 2. Pass the new function down
          }} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;