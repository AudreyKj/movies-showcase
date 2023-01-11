import React from 'react';
import {
  render, screen,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import ImageDescriptionArea from '../../../components/ImageDescriptionArea';

test('displays item image & description as well as a wishlist button', async () => {
  render(<ImageDescriptionArea posterPath="/0.jpg" originalTitle="Comedy 001" description="An amazing movie" genre="comedy" />);

  expect(screen.getByRole('img').src).toContain('/0.jp');
  expect(screen.getByText('An amazing movie')).toBeInTheDocument();
  expect(screen.getByRole('button').innerHTML).toBe('Add to Wishlist');
});
