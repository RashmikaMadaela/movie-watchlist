import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Import all your components
import App from './App.jsx';
import HomePage from './pages/HomePage.jsx';
import WatchlistPage from './pages/WatchlistPage.jsx';
import MovieDetailPage from './pages/MovieDetailPage.jsx'; // Import the new page
import ErrorPage from './pages/ErrorPage.jsx';           // Import the error page
import './index.css';

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />, // Add the errorElement here
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'watchlist',
        element: <WatchlistPage />,
      },
      {
        path: 'movie/:movieId', // This is our new dynamic route
        element: <MovieDetailPage />,
      },
    ],
  },
];

const router = createBrowserRouter(routes, {
  basename: "/movie-watchlist/", // Your repo name
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);