import React from "react";
import {useNavigate} from "react-router-dom";
import {PosterImage} from "../../components/PosterImage/index.jsx";
import "./styles.scss";

export const Carousel = ({ movieList, genre }) => {
    const navigate = useNavigate();

    return (
        <section className="carousel" >
            <ul className="carousel-scroll">
                {movieList.map(movieItem => {
                    return (
                        <li key={movieItem.id} onClick={() => navigate(`/movies/${movieItem.id}`, {state: {genre, ...movieItem}})}>
                           <PosterImage isCarousel={true} posterPath={movieItem.poster_path}/>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}