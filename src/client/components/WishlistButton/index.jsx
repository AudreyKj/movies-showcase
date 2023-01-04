import React, {useEffect, useState} from "react";
import {
    Link
} from "react-router-dom";
import wishlistIcon from "../../assets/icons/wishlist.svg"
import "./styles.scss";

export const WishlistButton = ({genre, title, imgUrl}) => {
    const [isDisabled, setIsDisabled] = useState(false);
    const [text, setText] = useState("")

    useEffect(() => {
        if(localStorage.getItem(title)) setIsDisabled(true);
    }, [])

    useEffect(() => {
        isDisabled ? setText("Added to Wishlist!") : setText("Add to Wishlist");
    }, [isDisabled])

    const addItemToWishlist = () => {
        localStorage.setItem(title, imgUrl);
        setIsDisabled(true);
    }

    //comedy
    //western
    //music 

    //color 
    //background-color
    //animation

    return(
       <button className="wishlist-action" onClick={addItemToWishlist} disabled={isDisabled} style={{cursor: isDisabled ? "not-allowed" : "pointer"}}>
           {text}
       </button>
    )
}