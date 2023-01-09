import React from 'react';
import {
  createBrowserRouter,
  Navigate,
} from 'react-router-dom';
import Home from './pages/Home';
import ItemDetails from './pages/ItemDetails';
import Wishlist from './pages/Wishlist';
import App from './App';

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Navigate to="/home" />,
      },
      {
        path: 'home',
        element: <Home />,
        index: true,
      },
      {
        path: 'movies/:movieId',
        element: <ItemDetails />,
      },
      {
        path: 'mywishlist',
        element: <Wishlist />,
      },
    ],
  }]);

export default router;
