import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import HomePage from './pages/HomePage.jsx';
import WatchlistPage from './pages/WatchlistPage.jsx';
import './index.css';

// Define the application's routes
const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />, // App is now the main layout
    children: [
      {
        index: true, // This makes HomePage the default child route
        element: <HomePage />,
      },
      {
        path: 'watchlist',
        element: <WatchlistPage />,
      },
    ],
  },
]);
// Pass the routes AND an options object with the basename
const router = createBrowserRouter(routes, {
  basename: "/movie-watchlist/", // Replace with your actual repo name
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);