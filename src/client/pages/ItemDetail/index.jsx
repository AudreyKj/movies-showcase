import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { WishlistButton } from "../../components/WishlistButton/index.jsx";
import { PosterImage } from "../../components/PosterImage/index.jsx";
import "./styles.scss";

export const ItemDetail = () => {
    const { state: { genre, overview, original_title, original_language, release_date, poster_path } } = useLocation();

    const genreCustomStyling = `item-wrapper ${genre}`;

    useEffect(() => {
        window.scrollTo({ top: "500px", left: 0, block: 'nearest', behavior: 'smooth' });
    }, []);


    return (
        <section className={genreCustomStyling}>
            <section className="details-wrapper">
                <div className="details">
                    <div className="image-area">
                    <PosterImage posterPath={poster_path}/>
                    </div>
                    <div className="info">
                        <WishlistButton genre={genre} title={original_title} imgUrl={poster_path} />
                        <p>{overview}</p>
                    </div>
                </div>
            </section>
            <section className="additional-info-wrapper">
                <div className="additional-info">
                    <ul>
                        <li>Genre: {genre}</li>
                        <li>Original Title: {original_title}</li>
                        <li>Original Language: {original_language}</li>
                        <li>Release Date: {release_date}</li>
                    </ul>
                </div>
            </section>
        </section>
    )
}