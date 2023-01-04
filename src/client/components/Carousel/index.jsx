import React from "react";
import {useNavigate} from "react-router-dom";
import "./styles.scss";

export const Carousel = ({ images, genre }) => {
    const navigate = useNavigate();

    return (
        <section className="carousel" >
            <ul className="carousel-scroll">
                {images.map((movie) => {
                    return (
                        <li key={movie.id} onClick={() => navigate(`/movies/${movie.id}`, {state: {genre, ...movie}})}>
                            <img
                                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                                loading="lazy"
                                alt="movie poster"
                            />
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}