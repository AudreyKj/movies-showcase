import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PosterImage } from "../../components/PosterImage/index.jsx";
import "./styles.scss";

export const Wishlist = () => {
    const [wishlistItemList, setWishlistItemList] = useState(null);

    useEffect(() => {
        formatWishlistItemsList();
    }, []);

    const formatWishlistItemsList = () => {
        const itemsArr = Object.entries(localStorage);
        if (itemsArr.length === 0) {
            setWishlistItemList([]);
        } else {
            const formattedList = itemsArr.map(elem => elem = { "imgUrl": elem[1] });
            setWishlistItemList(formattedList);
        }
    }

    const EmptyWishlistMessage = () => {
        return (
            <section className="wishlist--empty">
                <p>There are no items on your wishlist.</p>
                <p>Check out our collection and start adding to your wishlist now!</p>
                <button><Link to="/home">Browse movies</Link></button>
            </section>
        )
    }

    return (
        <section className="wishlist">
            {wishlistItemList && Array.isArray(wishlistItemList) && wishlistItemList.length > 0 ?
                <p className="wishlist--item-count">Wishlist: {wishlistItemList.length} item(s)</p>
                : <EmptyWishlistMessage />}
            {wishlistItemList && wishlistItemList.length > 0 && (
                <ul className="wishlist-items">
                    {wishlistItemList.map(({ imgUrl }) => {
                        return (
                            <li key={imgUrl}>
                                <PosterImage posterPath={imgUrl} />
                            </li>
                        )
                    })}
                </ul>
            )}
        </section>
    )
}