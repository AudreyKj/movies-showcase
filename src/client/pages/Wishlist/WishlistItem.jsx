import React from 'react';
import PosterImage from '../../components/PosterImage';
import './styles.scss';

const WishlistItem = ({ title, imgUrl }) => (
  <li className="wishlist__item">
    <PosterImage posterPath={imgUrl} />
    <h2 className="wishlist__item-title">{title}</h2>
  </li>
);

export default WishlistItem;
