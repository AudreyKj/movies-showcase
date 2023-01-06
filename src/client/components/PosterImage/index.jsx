import React, { useState } from "react";
import "./styles.scss";

//useRef, useEffect

export const PosterImage = ({ isCarousel, posterPath }) => {
    //const imageRef = useRef(null);
    const [loaded, setLoaded] = useState(false);

    const handleImageLoad = () => {
        console.log("loaded")
        setLoaded(true);
    }

    // useEffect(() => {
    //     if (imageRef && imageRef.current) {
    //         console.log("COMPLETE", imageRef.current.complete)
    //     }
    // }, []);

    //size: carousel | detail page | wishlist => always 100%?
    //loading: lazy? isCarousel = loading lazy


    return (
        <>
            {!loaded && <div className="movie-poster-img--loading-skeleton"></div>}
            <img
                onLoad={handleImageLoad}
                //ref={imageRef}
                className={!loaded ? "img-invisible" : "movie-poster-img"}
                src={`https://image.tmdb.org/t/p/original/${posterPath}`}
                alt="movie poster"
                //loading={isCarousel ? "lazy" : "auto"}
            />
        </>
    )
}