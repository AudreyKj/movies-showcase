import React, {useEffect} from "react";
import { useLocation } from "react-router-dom";
import { WishlistButton } from "../../components/WishlistButton/index.jsx";
import "./styles.scss";

export const ItemDetail = () => {
    const { state: {genre, overview, original_title, original_language, release_date, poster_path} } = useLocation();

    useEffect(() => {
        window.scrollTo({top: "200px", left: 0,  block: 'nearest', behavior: 'smooth'});
      }, []);
   

    return (
        <section className="item-wrapper">
            <section className="details-wrapper">
                <div className="details">
                <div className="image-area">
                    <img
                        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
                        alt="movie poster"
                    /> 
                </div>
                <div className="info">
                    <WishlistButton genre={genre} title={original_title} imgUrl={poster_path}/>
                    <p>{overview}</p> 
                </div>
                </div>
            </section>
            <section className="additional-info-wrapper">
            <div className="additional-info">
                <ul>
                <li>Genre: {genre}</li>
                <li>Original Title: {original_title}</li>
                <li>Original Language: {original_language}</li>
                <li>Release Date: {release_date}</li>
                </ul>
            </div>
            </section>
        </section>
    )
}