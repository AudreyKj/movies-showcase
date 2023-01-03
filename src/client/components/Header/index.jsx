import React from "react";
import {
    Link
} from "react-router-dom";
import wishlistIcon from "../../assets/icons/wishlist.svg"
import "./styles.scss";

export const Header = () => {
    return(
        <header>
            <h1> My movies Showcase</h1>
            <button> <img src={wishlistIcon} alt="wishlist" /> <Link to="mywishlist"> my wishlist</Link> </button> 
        </header>
    )
}