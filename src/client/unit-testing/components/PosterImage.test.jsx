import React from 'react';
import 'intersection-observer';
import {
  render, screen,
} from '@testing-library/react';
import PosterImage from '../../components/PosterImage';
import '@testing-library/jest-dom';

const imageBaseUrl = "https://image.tmdb.org/t/p/w500";
const posterPathMock= "/0.jpg";

test("displays an image by composing a path with its prop", () => {
    render(<PosterImage posterPath={posterPathMock}/>);

    const image = screen.getByRole('img');
    expect(image.src).toBe(`${imageBaseUrl}${posterPathMock}`);
    expect(image.alt).toBe('movie poster');
})