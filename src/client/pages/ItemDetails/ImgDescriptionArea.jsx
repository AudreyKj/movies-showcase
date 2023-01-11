import React from 'react';
import PosterImage from '../../components/PosterImage';
import WishlistButton from '../../components/WishlistButton';
import './styles.scss';

const ImageDescriptionArea = ({ posterPath, originalTitle, description, genre }) => (
  <section className="item-details__img-description-wrapper">
    <div className="item-details__img-description-container">
      <div className="item-details__image-area">
        <div className="item-details__poster-image">
          <PosterImage posterPath={posterPath} />
        </div>
      </div>
      <div className="item-details__cta-description">
        <WishlistButton genre={genre} title={originalTitle} imgUrl={posterPath} />
        <p className="item-details__description-text">{description}</p>
      </div>
    </div>
  </section>
);

export default ImageDescriptionArea;
