import React, {useEffect, useState} from "react";
import "./styles.scss";

export const WishlistButton = ({genre, title, imgUrl}) => {
    const [isDisabled, setIsDisabled] = useState(false);
    const [text, setText] = useState("")

    const genreCustomStyling = `wishlist-cta_${genre}`;

    useEffect(() => {
        if(localStorage.getItem(title)) setIsDisabled(true);
    }, [])

    useEffect(() => {
        isDisabled ? setText(`Added to Wishlist!`) : setText(`Add to Wishlist`);
    }, [isDisabled])

    const addItemToWishlist = () => {
        localStorage.setItem(title, imgUrl);
        setIsDisabled(true);
    }

    return(
       <button className={`${genreCustomStyling}`} onClick={addItemToWishlist} disabled={isDisabled}>
           {text}
       </button>
    )
}