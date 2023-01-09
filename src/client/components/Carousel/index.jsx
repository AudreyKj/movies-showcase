import React from "react";
import {useNavigate} from "react-router-dom";
import {PosterImage} from "../../components/PosterImage";
import "./styles.scss";

const Carousel = ({ movieList, genre }) => {
    const navigate = useNavigate();

    console.log("movieList", movieList);

    return (
        <section className="carousel" >
            <ul className="carousel__list">
                {movieList.map(movieItem => {
                    return (
                        <li className="carousel__item" key={movieItem.id} onClick={() => navigate(`/movies/${movieItem.id}`, {state: {genre, ...movieItem}})} >
                           <PosterImage posterPath={movieItem.poster_path}/>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

export default Carousel;