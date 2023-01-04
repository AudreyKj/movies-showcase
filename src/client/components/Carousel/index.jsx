import React from "react";
import "./styles.scss";

export const Carousel = ({ images }) => {
    return (
        <section className="carousel" >
            <div className="carousel-scroll">
                {images.map((movie) => {
                    return (
                        <img
                            key={movie.id}
                            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                            loading="lazy"
                            alt="movie"
                        />
                    )
                })}
            </div>
        </section>
    )
}