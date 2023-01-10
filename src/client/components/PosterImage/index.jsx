import React, { useState } from 'react';
import PosterImagePlaceholder from './PosterImagePlaceholder';
import './styles.scss';

const PosterImage = ({ posterPath }) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const isLoadingProgress = !loaded && !error;
  const isLoadingSuccessful = !error;

  const handleImageLoaded = () => setLoaded(true);
  const handleImageLoadError = () => setError(true);

  return (
    <>
      {isLoadingProgress && <PosterImagePlaceholder />}

      {isLoadingSuccessful ? (
        <picture>
          <source media="(min-width:2000px)" srcSet={`https://image.tmdb.org/t/p/w780${posterPath}`} />
          <img
            onLoad={handleImageLoaded}
            onError={handleImageLoadError}
            className={loaded ? 'poster-img' : 'poster-img_hidden'}
            src={`https://image.tmdb.org/t/p/w500${posterPath}`}
            alt="movie poster"
          />
        </picture>
      ) : (
        <PosterImagePlaceholder>
          <p className="poster-img_error">could not load image</p>
        </PosterImagePlaceholder>
      )}
    </>
  );
};

export default PosterImage;
