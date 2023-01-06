import React from "react";
import {useNavigate} from "react-router-dom";
import {PosterImage} from "../../components/PosterImage/index.jsx";
import "./styles.scss";

const Carousel = ({ movieList, genre }) => {
    const navigate = useNavigate();

    console.log("movieList", movieList);

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

export default Carousel;