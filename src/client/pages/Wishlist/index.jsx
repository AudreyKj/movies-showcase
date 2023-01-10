import React, { useEffect, useState } from 'react';
import EmptyWishlistText from './EmptyWishlistText';
import PosterImage from '../../components/PosterImage';
import './styles.scss';

const Wishlist = () => {
  const [wishlistItemList, setWishlistItemList] = useState([]);
  const isWishlistEmpty = wishlistItemList && wishlistItemList.length === 0;

  const getWishlistItems = () => {
    const itemsArr = Object.entries(localStorage);
    const formattedList = [];

    itemsArr.forEach((elem) => {
      if (elem[0] !== 'sync_storageMap') {
        formattedList.push({ title: elem[0], imgUrl: elem[1] });
      }
    });
    setWishlistItemList(formattedList);
  };

  useEffect(() => {
    getWishlistItems();
  }, []);

  return (
    <section className="wishlist" data-testid="wishlist-section">
      {isWishlistEmpty ? (
        <EmptyWishlistText />
      ) : (
        <>
          <span className="wishlist__count">
            Wishlist:
            {' '}
            {wishlistItemList.length}
            {' '}
            item(s)
          </span>
          <ul className="wishlist__list">
            {wishlistItemList.map(({ title, imgUrl }) => (
              <li key={imgUrl} className="wishlist__item">
                <PosterImage posterPath={imgUrl} />
                <h2 className="wishlist__item-title">{title}</h2>
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
};

export default Wishlist;
