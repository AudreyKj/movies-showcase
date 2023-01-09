import React from 'react';
import 'intersection-observer';
import {
  render, screen,
} from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom';
import WishlistButton from '../../../components/WishlistButton';

test('cta button toggles text and disabled attribute on click', async () => {
  render(<WishlistButton genre="comedy" title="My Fav Movie" imgUrl="/0.jpg" />);
  const button = screen.getByRole('button');

  expect(button.innerHTML).toBe('Add to Wishlist');
  expect(button).not.toBeDisabled();

  act(() => {
    button.click();
  });

  expect(button.innerHTML).toBe('Added to Wishlist!');
  expect(button).toBeDisabled();
});
