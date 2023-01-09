import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

test('renders correctly', () => {
  render(<App />, { wrapper: MemoryRouter });

  expect(screen.getByTestId("heading-title").innerHTML).toBe("Movies Showcase");
  cleanup();
});
