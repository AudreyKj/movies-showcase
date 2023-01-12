/* eslint-disable camelcase */
import React, { useEffect, useRef, useState } from 'react';
import ArrowButton from './ArrowButton';
import CarouselItem from './CarouselItem';
import useIsInViewport from './useInViewport';
import './styles.scss';

const Carousel = ({ movieList, genre }) => {
  const [isPrevButtonVisible, setIsPrevButtonVisible] = useState(false);
  const [isNextButtonVisible, setIsNextButtonVisible] = useState(true);

  const firstItemRef = useRef(null);
  const lastItemRef = useRef(null);
  const itemRef = useRef(null);
  const carouselRef = useRef(null);

  const isFirstItemInViewport = useIsInViewport(firstItemRef);
  const isLastItemInViewport = useIsInViewport(lastItemRef);

  useEffect(() => {
    setIsPrevButtonVisible(!isFirstItemInViewport);
  }, [isFirstItemInViewport]);

  useEffect(() => {
    setIsNextButtonVisible(!isLastItemInViewport);
  }, [isLastItemInViewport]);

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
      <ArrowButton position="prev" handleClick={handlePrevClick} />
      )}
      <ul ref={carouselRef} className="carousel__list" data-testid="carousel-list">
        {movieList.map(({
          overview, original_title, original_language,
          release_date, poster_path, id,
        }, index) => (
          <li className="carousel__item" key={id} ref={index === 0 ? firstItemRef : index === movieList.length - 1 ? lastItemRef : itemRef}>
            <CarouselItem
              id={id}
              genre={genre}
              overview={overview}
              originalTitle={original_title}
              originalLanguage={original_language}
              releaseDate={release_date}
              posterPath={poster_path}
            />
          </li>
        ))}
      </ul>
      {isNextButtonVisible && (
      <ArrowButton position="next" handleClick={handleNextClick} />
      )}
    </section>
  );
};

export default Carousel;
