import React from 'react';
import { useLocation } from 'react-router-dom';
import ImageDescriptionArea from '../../components/ImageDescriptionArea';
import AdditionalInfoArea from '../../components/AdditionalInfoArea';
import './styles.scss';

const ItemDetails = () => {
  const {
    state: {
      genre, overview, originalTitle, originalLanguage, releaseDate, posterPath,
    },
  } = useLocation();

  const genreCustomStyling = `item-details_${genre}`;

  return (
    <section className={`item-details ${genreCustomStyling}`} data-testid="item-details-page">
      <ImageDescriptionArea
        posterPath={posterPath}
        originalTitle={originalTitle}
        description={overview}
        genre={genre}
      />
      <AdditionalInfoArea
        originalTitle={originalTitle}
        originalLanguage={originalLanguage}
        releaseDate={releaseDate}
        genre={genre}
      />
    </section>
  );
};

export default ItemDetails;
