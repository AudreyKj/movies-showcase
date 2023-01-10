import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import PosterImage from '../PosterImage';
import useIsInViewport from './useInViewport';
import arrowRightIcon from '../../assets/icons/arrowRight.svg';
import arrowLeftIcon from '../../assets/icons/arrowLeft.svg';
import './styles.scss';

const Carousel = ({ movieList, genre }) => {
  const firstItemRef = useRef(null);
  const lastItemRef = useRef(null);
  const itemRef = useRef(null);
  const carouselRef = useRef(null);
  const navigate = useNavigate();

  const isFirstItemInViewport = useIsInViewport(firstItemRef);
  const isLastItemInViewport = useIsInViewport(lastItemRef);

  const isPrevButtonVisible = !isFirstItemInViewport;
  const isNextButtonVisible = !isLastItemInViewport;

  const handleNextClick = () => {
    const { scrollLeft } = carouselRef.current;

    const itemWidth = parseInt(carouselRef.current.children[0].clientWidth, 10);
    const scrollLeftPx = scrollLeft + itemWidth * 3;

    carouselRef.current.scroll({
      left: scrollLeftPx,
      behavior: 'smooth',
    });
  };

  const handlePrevClick = () => {
    const { scrollLeft } = carouselRef.current;

    const itemWidth = parseInt(carouselRef.current.children[0].clientWidth, 10);
    const scrollLeftPx = scrollLeft - itemWidth * 3;

    carouselRef.current.scroll({
      left: scrollLeftPx,
      behavior: 'smooth',
    });
  };

  return (
    <section className="carousel" data-testid={`carousel-element-${genre}`}>
      {isPrevButtonVisible && (
      <button data-testid="carousel-prev-button" type="button" className="carousel__arrow-button prev-item-cta" onClick={handlePrevClick}>
        <img src={arrowLeftIcon} alt="arrow left" />
      </button>
      )}
      <ul ref={carouselRef} className="carousel__list" data-testid="carousel-list">
        {movieList.map((movieItem, index) => (
          <li className="carousel__item" key={movieItem.id} ref={index === 0 ? firstItemRef : index === movieList.length - 1 ? lastItemRef : itemRef}>
            <button type="button" onClick={() => navigate(`/movies/${movieItem.id}`, { state: { genre, ...movieItem } })} data-testid="carousel-item-button">
              <PosterImage posterPath={movieItem.poster_path} />
            </button>
          </li>
        ))}
      </ul>
      {isNextButtonVisible && (
      <button data-testid="carousel-next-button" type="button" className="carousel__arrow-button next-item-cta" onClick={handleNextClick}>
        <img src={arrowRightIcon} alt="arrow right" />
      </button>
      )}
    </section>
  );
};

export default Carousel;
