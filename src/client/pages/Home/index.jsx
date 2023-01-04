import React, {useState, useEffect} from "react";
import axios from "axios";
import {Carousel} from "../../components/Carousel/index.jsx";
import "./styles.scss";

export const Home = () => {
    const [comedyMoviesList, setComedyMoviesList] = useState([]);
    const [westernMoviesList, setWesternMoviesList] = useState([]);
    const [musicMoviesList, setMusicMoviesList] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8080/movies/genre/comedy").then(({data}) => {
            console.log(data)
            setComedyMoviesList(data)
    }).catch(() => setError(true))
    }, [])

    useEffect(() => {
        axios.get("http://localhost:8080/movies/genre/western").then(({data}) => {
            console.log(data)
            setWesternMoviesList(data)
    }).catch(() => setError(true))
    }, [])

    useEffect(() => {
        axios.get("http://localhost:8080/movies/genre/music").then(({data}) => {
            console.log(data)
            setMusicMoviesList(data)
    }).catch(() => setError(true))
    }, [])

    return(
        <section className="home">
            {error && <p> Error: movie list could not be fetched. Please try again later! </p>}
            {comedyMoviesList && comedyMoviesList.length > 0 && <Carousel images={comedyMoviesList}/>}
            {westernMoviesList && westernMoviesList.length > 0 && <Carousel images={westernMoviesList}/>}
            {musicMoviesList && musicMoviesList.length > 0 && <Carousel images={musicMoviesList}/>}
        </section>
    )
}