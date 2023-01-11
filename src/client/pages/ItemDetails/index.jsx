/* eslint-disable camelcase */
import React from 'react';
import { useLocation } from 'react-router-dom';
import ImageDescriptionArea from '../../components/ImageDescriptionArea';
import AdditionalInfoArea from '../../components/AdditionalInfoArea';
import './styles.scss';

const ItemDetails = () => {
  const {
    state: {
      genre, overview, original_title, original_language, release_date, poster_path,
    },
  } = useLocation();

  const genreCustomStyling = `item-details_${genre}`;

  return (
    <section className={`item-details ${genreCustomStyling}`} data-testid="item-details-page">
      <ImageDescriptionArea
        posterPath={poster_path}
        originalTitle={original_title}
        description={overview}
        genre={genre}
      />
      <AdditionalInfoArea
        originalTitle={original_title}
        originalLanguage={original_language}
        releaseDate={release_date}
        genre={genre}
      />
    </section>
  );
};

export default ItemDetails;
