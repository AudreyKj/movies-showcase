import React, { useState } from "react";
import "./styles.scss";

export const PosterImage = ({ posterPath }) => {
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(false);

    const isImageLoading = !loaded && !error;
    const isLoadingSuccessful = !error;

    const handleImageLoaded = () => setLoaded(true);
    const handleImageLoadError = () => setError(true);


    const PosterImagePlaceholder = ({ children }) => {
        return (
            <div className="poster-img_placeholder">{children}</div>
        )
    }

    return (
        <>
            {isImageLoading && <PosterImagePlaceholder />}

            {isLoadingSuccessful ? (
                <img
                    onLoad={handleImageLoaded}
                    onError={handleImageLoadError}
                    className={loaded ? "poster-img" : "poster-img_invisible"}
                    src={`https://image.tmdb.org/t/p/w500/${posterPath}`}
                    alt="movie poster"
                />
            ) : (
                <PosterImagePlaceholder>
                    <p className="poster-img_error">could not load image</p>
                </PosterImagePlaceholder>
            )}
            </>
    )
}