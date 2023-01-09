import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from '../../components/Header';
import '@testing-library/jest-dom';

test('renders title and nav link to wishlist', () => {
  render(<Header />, { wrapper: MemoryRouter });

  expect(screen.getByTestId('heading-title').innerHTML).toBe('Movies Showcase');
  expect(screen.getByText('my wishlist').closest('a')).toHaveAttribute('href', '/mywishlist');
  //onClick myWishlist
  cleanup();
});
