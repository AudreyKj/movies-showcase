import React, {useState, useEffect} from "react";
import axios from "axios";
import {Carousel} from "../../components/Carousel/index.jsx";
import "./styles.scss";

export const Home = () => {
    const [comedyMoviesList, setComedyMoviesList] = useState([]);
    const [westernMoviesList, setWesternMoviesList] = useState([]);
    const [musicMoviesList, setMusicMoviesList] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/movies/genre/comedy").then(({data}) => {
            console.log(data)
            setComedyMoviesList(data)
    })
    }, [])

    useEffect(() => {
        axios.get("http://localhost:8080/movies/genre/western").then(({data}) => {
            console.log(data)
            setWesternMoviesList(data)
    })
    }, [])

    useEffect(() => {
        axios.get("http://localhost:8080/movies/genre/music").then(({data}) => {
            console.log(data)
            setMusicMoviesList(data)
    })
    }, [])

    return(
        <section className="home">
            <Carousel images={comedyMoviesList}/>
            <Carousel images={westernMoviesList}/>
            <Carousel images={musicMoviesList}/>
        </section>
    )
}