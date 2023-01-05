import React, {useEffect, useState} from "react";
import { PosterImage } from "../../components/PosterImage/index.jsx";
import "./styles.scss";

export const Wishlist = () => {
    const [wishlistItemList, setWishlistItemList] = useState([]);

    useEffect(() => {
        formatWishlistItemsList();
    }, []);

    const formatWishlistItemsList = () => {
        const itemsArr = Object.entries(localStorage);
        const formattedList = itemsArr.map(elem => elem = {"title": elem[0], "imgUrl": elem[1]});
        setWishlistItemList(formattedList);
    }

    return(
        <section className="wishlist" >
        <ul className="wishlist-items">
            {wishlistItemList.map(({title, imgUrl}) => {
                return (
                    <li key={imgUrl}>
                       <PosterImage posterPath={imgUrl}/>
                       <span>{title}</span>
                    </li>
                )
            })}
        </ul>
    </section>
    )
}