import React from 'react';
import { useNavigate } from 'react-router-dom';
import PosterImage from '../PosterImage';

const CarouselItem = ({
  genre, id, overview, originalTitle, originalLanguage, releaseDate, posterPath,
}) => {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => navigate(`/movies/${id}`, {
        state: {
          genre, overview, originalTitle, originalLanguage, releaseDate, posterPath,
        },
      })}
      data-testid="carousel-item-button"
    >
      <PosterImage posterPath={posterPath} />
    </button>
  );
};

export default CarouselItem;
