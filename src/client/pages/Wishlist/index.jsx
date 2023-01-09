import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PosterImage } from "../../components/PosterImage";
import "./styles.scss";

export const Wishlist = () => {
    const [wishlistItemList, setWishlistItemList] = useState([]);
    const isWishlistEmpty = wishlistItemList && wishlistItemList.length === 0;

    useEffect(() => {
        getWishlistItems();
    }, []);

    const getWishlistItems = () => {
        const itemsArr = Object.entries(localStorage);
        const formattedList = [];

        itemsArr.forEach(elem => {
            if (elem[0] !== "sync_storageMap") {
                formattedList.push({ "imgUrl": elem[1] });
            }
        });
        setWishlistItemList(formattedList);
    }

    const EmptyWishlistText = () => {
        return (
            <>
                <p>There are no items on your wishlist.</p>
                <p>Check out our collection and start adding to your wishlist now!</p>
                <button className="wishlist_empty-cta"><Link to="/home">Browse movies</Link></button>
            </>
        )
    }

    return (
        <section className="wishlist">
            {isWishlistEmpty ? (
                <EmptyWishlistText />
            ) : (
                <>
                    <p>Wishlist: {wishlistItemList.length} item(s)</p>
                    <ul className="wishlist__list">
                        {wishlistItemList.map(({ imgUrl }) => {
                            return (
                                <li key={imgUrl} className="wishlist__item">
                                    <PosterImage posterPath={imgUrl} />
                                </li>
                            )
                        })}
                    </ul>
                </>
            )}
        </section>
    )
}