import React from "react";
import {
    Link
} from "react-router-dom";
import wishlistIcon from "../../assets/icons/wishlist.svg"
import "./styles.scss";

export const WishlistButton = ({genre, title, imageUrl}) => {

    //disable if item is already in localStorage

    const addItemToWishlist = () => {
        localStorage.setItem(title, imageUrl)
    }

    //comedy
    //western
    //music 

    //color 
    //background-color
    //animation

    return(
       <button className="wishlist-action" onClick={addItemToWishlist}>
            Add to Wishlist
       </button>
    )
}