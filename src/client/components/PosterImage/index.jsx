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
        <img
          onLoad={handleImageLoaded}
          onError={handleImageLoadError}
          className={loaded ? 'poster-img' : 'poster-img_invisible'}
          src={`https://image.tmdb.org/t/p/w500${posterPath}`}
          alt="movie poster"
        />
      ) : (
        <PosterImagePlaceholder>
          <p className="poster-img_error">could not load image</p>
        </PosterImagePlaceholder>
      )}
    </>
  );
};

export default PosterImage;
