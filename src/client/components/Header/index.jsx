import React from "react";
import {
  NavLink
} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import wishlistIcon from "../../assets/icons/wishlist.svg";

import "./styles.scss";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header" role="banner">
      <h1 className="header__heading" onClick={() => navigate("/home")}> Movies Showcase</h1>

      <nav className="header__nav">
        <ul className="header__nav-list">
          <li>
            <button className="header__wishlist-button">
              <NavLink to="mywishlist" className={({ isActive }) =>
                isActive ? "header__nav-link nav-link_active" : "header__nav-link"
              }
              > <img className="header__wishlist-icon" src={wishlistIcon} alt="heart shape" /> my wishlist</NavLink> 
            </button>
          </li>
        </ul>
      </nav>

    </header>
  )
}