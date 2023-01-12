import React from 'react';
import arrowRightIcon from '../../assets/icons/arrowRight.svg';
import arrowLeftIcon from '../../assets/icons/arrowLeft.svg';
import './styles.scss';

const ArrowButton = ({ position, handleClick }) => {
  const isPrev = position === 'prev';

  return (
    <button data-testid={`carousel-${position}-button`} type="button" className={`carousel__arrow-button carousel__${position}-item`} onClick={handleClick}>
      {isPrev ? <img src={arrowLeftIcon} alt="arrow left" /> : <img src={arrowRightIcon} alt="arrow right" />}
    </button>
  );
};

export default ArrowButton;
