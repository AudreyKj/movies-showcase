import React from 'react';
import {
  createBrowserRouter,
  Navigate,
} from 'react-router-dom';
import { Home } from './pages/Home';
import { ItemDetail } from './pages/ItemDetail';
import { Wishlist } from './pages/Wishlist';
import App from './App';

export const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <Navigate to="/home" />,
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
        element: <ItemDetail />,
      },
      {
        path: 'mywishlist',
        element: <Wishlist />,
      },
    ],
  }]);
