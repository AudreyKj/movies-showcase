import React from 'react';
import { Link } from 'react-router-dom';

const EmptyWishlistText = () => (
  <>
    <p>There are no items on your wishlist.</p>
    <p>Check out our collection and start adding to your wishlist now!</p>
    <button type="button" className="wishlist_empty-cta"><Link to="/home">Browse movies</Link></button>
  </>
);

export default EmptyWishlistText;
