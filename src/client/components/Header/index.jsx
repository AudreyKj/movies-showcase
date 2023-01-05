import React from "react";
import {
    NavLink
} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import wishlistIcon from "../../assets/icons/wishlist.svg";

import "./styles.scss";

export const Header = () => {
    const navigate = useNavigate();

    return(
        <header>
            <h1 onClick={() => navigate("/home")}> My movies Showcase</h1>
            <button> <img src={wishlistIcon} alt="wishlist" /> <NavLink to="mywishlist" className={({ isActive }) =>
              isActive ? "active-nav-link" : "default-nav-link"
            }
          > my wishlist</NavLink> </button> 
        </header>
    )
}