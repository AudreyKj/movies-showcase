import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import {
  RouterProvider,
} from 'react-router-dom';
import { router } from './router';

const container = document.getElementById('root');
hydrateRoot(container, <RouterProvider router={router} />);
