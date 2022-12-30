import React from "react";
import WishlistIcon from '../../assets/wishlist.svg';
import {
    Link
} from "react-router-dom";
import "./styles.scss";

export const Header = () => {
    return(
        <header>
            <h1> My Movies Showcase</h1>
            <button> <Link to="mywishlist" ><WishlistIcon /> My Wishlist </Link></button>
        </header>
    )
}