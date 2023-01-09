import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from '../../../components/Header';
import '@testing-library/jest-dom';

test('header includes title and link to wishlist', () => {
  render(<Header />, { wrapper: MemoryRouter });
  const wishlistNav = screen.getByText('my wishlist');

  expect(screen.getByTestId('heading-title').innerHTML).toBe('Movies Showcase');
  expect(wishlistNav.closest('a')).toHaveAttribute('href', '/mywishlist');
  fireEvent.click(wishlistNav);

  expect(screen.getByText(/wishlist/i)).toBeInTheDocument();
});
