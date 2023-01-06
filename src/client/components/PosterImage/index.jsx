import React, { useState } from "react";
import "./styles.scss";

export const PosterImage = ({ isCarousel, posterPath }) => {
    const [loaded, setLoaded] = useState(false);

    const handleImageLoad = () => setLoaded(true);

    return (
        <>
            {!loaded && <div className="movie-poster-img--loading-skeleton"></div>}
            <img
                onLoad={handleImageLoad}
                className={!loaded ? "img-invisible" : "movie-poster-img"}
                src={`https://image.tmdb.org/t/p/w500/${posterPath}`}
                alt="movie poster"
            />
        </>
    )
}