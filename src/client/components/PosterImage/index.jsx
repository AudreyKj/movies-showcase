import React from "react";
import "./styles.scss";

export const PosterImage = ({isCarousel, posterPath}) => {

    //size: carousel | detail page | wishlist => always 100%?
    //loading: lazy? isCarousel = loading lazy

    return(
        <img
        className="movie-poster-img"
        src={`https://image.tmdb.org/t/p/original/${posterPath}`}
        loading={isCarousel ? "lazy" : "auto"}
        alt="movie poster"
    />
    )
}