import React, { useState, useRef } from "react";
import "./styles.scss";

export const Carousel = ({ images }) => {
    const carouselRef = useRef(null);

    const handleNextSlide = () => {
        const scrollLeft = carouselRef.current.scrollLeft;
        const itemWidth = parseInt(carouselRef.current.children[0].width)
        const scrollLeftPx = scrollLeft + itemWidth * 3;
        carouselRef.current.scroll({
            left: scrollLeftPx,
            behavior: 'smooth'
        })
      };

    return (
        <section className="carousel" ref={carouselRef}>
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

           <button className="carousel-next" onClick={handleNextSlide}> N </button>
        </section>
    )
}