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
      <section className="additional-info-wrapper">
        <ul className="additional-info-wrapper__list">
          <li>
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
            Release date:
            {' '}
            {release_date}
          </li>
        </ul>
      </section>
    </section>
  );
};

export default ItemDetails;
