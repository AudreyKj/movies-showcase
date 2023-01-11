import React from 'react';
import './styles.scss';

const AdditionalInfoArea = ({
  originalTitle, originalLanguage, releaseDate, genre,
}) => {
  const capitalizeFirstLetter = (word) => word.charAt(0).toUpperCase() + word.slice(1);
  const getReleaseYear = (date) => date.split('-')[0];

  return (
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
          {originalTitle}
        </li>
        <li>
          Original language:
          {' '}
          {originalLanguage}
        </li>
        <li>
          Release year:
          {' '}
          {getReleaseYear(releaseDate)}
        </li>
      </ul>
    </section>
  );
};

export default AdditionalInfoArea;
