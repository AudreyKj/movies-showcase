/* eslint-disable camelcase */
import React from 'react';
import { useLocation } from 'react-router-dom';
import WishlistButton from '../../components/WishlistButton';
import PosterImage from '../../components/PosterImage';
import './styles.scss';

const ItemDetails = () => {
  const {
    state: {
      genre, overview, original_title, original_language, release_date, poster_path,
    },
  } = useLocation();

  const genreCustomStyling = `item-details_${genre}`;

  const capitalizeFirstLetter = (word) => word.charAt(0).toUpperCase() + word.slice(1);
  const getReleaseYear = (releaseDate) => releaseDate.split('-')[0];

  return (
    <section className={`item-details ${genreCustomStyling}`} data-testid="item-details-page">
      <section className="item-details__img-description-wrapper">
        <div className="item-details__img-description-container">
          <div className="item-details__image-area">
            <div className="item-details__poster-image">
              <PosterImage posterPath={poster_path} />
            </div>
          </div>
          <div className="item-details__cta-description">
            <WishlistButton genre={genre} title={original_title} imgUrl={poster_path} />
            <p className="item-details__description-text">{overview}</p>
          </div>
        </div>
      </section>
      <section className="item-details__additional-info-wrapper">
        <ul className="item-details__additional-info-list">
          <li data-testid="item-details-category-genre">
            Genre:
            {' '}
            <b>{capitalizeFirstLetter(genre)}</b>
          </li>
          <li>
            Original title:
            {' '}
            {original_title}
          </li>
          <li>
            Original language:
            {' '}
            {original_language}
          </li>
          <li>
            Release year:
            {' '}
            {getReleaseYear(release_date)}
          </li>
        </ul>
      </section>
    </section>
  );
};

export default ItemDetails;
