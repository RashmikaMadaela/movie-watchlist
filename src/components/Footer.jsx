import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    <footer className="bg-gray-800 text-gray-400 text-center p-6 mt-auto">
      <div className="container mx-auto">
        <p>&copy; {currentYear} Movie Watchlist by Rashmika Madaela. All Rights Reserved.</p>
        <p className="text-sm mt-1">
          This product uses the TMDb API but is not endorsed or certified by TMDb.
        </p>
      </div>
    </footer>
  );
}

export default Footer;