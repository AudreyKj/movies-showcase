import React, { useEffect, useState } from 'react';
import './styles.scss';

const WishlistButton = ({ genre, title, imgUrl }) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [text, setText] = useState('');

  const genreCustomStyling = `wishlist-cta_${genre}`;

  useEffect(() => {
    if (localStorage.getItem(title)) setIsDisabled(true);
  }, [title]);

  useEffect(() => {
    if (isDisabled) {
      setText('Added to Wishlist!');
    } else {
      setText('Add to Wishlist');
    }
  }, [isDisabled]);

  const addItemToWishlist = () => {
    localStorage.setItem(title, imgUrl);
    setIsDisabled(true);
  };

  return (
    <button type="button" className={`${genreCustomStyling}`} onClick={addItemToWishlist} disabled={isDisabled}>
      {text}
    </button>
  );
};

export default WishlistButton;
