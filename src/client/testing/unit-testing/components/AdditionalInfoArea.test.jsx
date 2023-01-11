import React from 'react';
import {
  render, screen,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import AdditionalInfoArea from '../../../components/AdditionalInfoArea';

test('displays additional info & the genre for the movie item', async () => {
  render(<AdditionalInfoArea originalTitle="Zorro" originalLanguage="EN" releaseDate="2000" genre="western" />);

  expect(screen.getByText(/Zorro/)).toBeInTheDocument();
  expect(screen.getByText(/EN/)).toBeInTheDocument();
  expect(screen.getByText(/2000/)).toBeInTheDocument();
  expect(screen.getByText(/Western/)).toBeInTheDocument();
});
