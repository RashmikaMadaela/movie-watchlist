import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import HomePage from './pages/HomePage.jsx';
import WatchlistPage from './pages/WatchlistPage.jsx';
import './index.css';

// Define the application's routes
const router = createBrowserRouter([
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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);