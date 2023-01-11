import React, { Suspense } from 'react';
import {
  createBrowserRouter,
  Navigate,
} from 'react-router-dom';
import Loader from './components/Loader/index';
import App from './App';

const Home = React.lazy(() => import('./pages/Home'));
const ItemDetails = React.lazy(() => import('./pages/ItemDetails'));
const Wishlist = React.lazy(() => import('./pages/Wishlist'));

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
        element: <Suspense fallback={null}><Home /></Suspense>,
        index: true,
      },
      {
        path: 'movies/:movieId',
        element: <Suspense fallback={<Loader />}><ItemDetails /></Suspense>,
      },
      {
        path: 'mywishlist',
        element: <Suspense fallback={<Loader />}><Wishlist /></Suspense>,
      },
    ],
  }]);

export default router;
