import React from 'react';
import 'intersection-observer';
import {
  render, screen, within, fireEvent,
} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Carousel from '../../../components/Carousel';
import '@testing-library/jest-dom';

const mockImagesList = [{ id: '120', poster_path: '0.jpg', original_title: 'movie 0' }, { id: '121', poster_path: '1.jpg', original_title: 'movie 1' }, { id: '122', poster_path: '2.jpg', original_title: 'movie 2' }, { id: '123', poster_path: '3.jpg', original_title: 'movie 3' }, { id: '124', poster_path: '4.jpg', original_title: 'movie 4' }, { id: '125', poster_path: '5.jpg', original_title: 'movie 5' }, { id: '126', poster_path: '6.jpg', original_title: 'movie 6' }, { id: '127', poster_path: '7.jpg', original_title: 'movie 7' }, { id: '128', poster_path: '8.jpg', original_title: 'movie 8' }, { id: '129', poster_path: '9.jpg', original_title: 'movie 9' }];

describe('carousel displays a scrollable list of interactive images', () => {
  it('displays a scrollable list of items', async () => {
    const { getByTestId } = render(<Carousel movieList={mockImagesList} genre="comedy" />, { wrapper: MemoryRouter });

    const carouselElement = getByTestId('carousel-element');
    const list = getByTestId('carousel-list');

    fireEvent.scroll(carouselElement, { target: { scrollX: 100 } });
    const { getAllByRole } = within(list);
    const items = getAllByRole('listitem');
    expect(items.length).toBe(10);
  });

  it('on click, each item navigates to its detail page', async () => {
    const { getAllByTestId } = render(<Carousel movieList={mockImagesList} genre="comedy" />, { wrapper: MemoryRouter });

    const imageItem = getAllByTestId('carousel-item-button');
    fireEvent.click(imageItem[0]);

    (() => {
      expect(screen.getByText(imageItem[0].original_title)).toBeInTheDocument();
    });
  });
});
