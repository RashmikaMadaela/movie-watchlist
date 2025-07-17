import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Import only the components you have created
import App from './App.jsx';
import HomePage from './pages/HomePage.jsx';
import WatchlistPage from './pages/WatchlistPage.jsx';
import './index.css';

// Define the routes for the pages that exist
const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'watchlist',
        element: <WatchlistPage />,
      },
    ],
  },
];

// Create the router with the correct basename for GitHub Pages
const router = createBrowserRouter(routes, {
  basename: "/movie-watchlist/",
});

// Render the application
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);