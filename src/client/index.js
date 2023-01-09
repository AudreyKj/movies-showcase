import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import {
  RouterProvider,
} from 'react-router-dom';
import router from './router';
import App from './App';

const container = document.getElementById('root');
hydrateRoot(container, <RouterProvider router={router}><App /></RouterProvider>);
