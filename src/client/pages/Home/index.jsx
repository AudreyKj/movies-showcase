import React, { useState, useEffect} from "react";
import axios from "axios";
import Carousel from "../../components/Carousel/index.jsx";
import { Loader } from "../../components/Loader/index.jsx";
import "./styles.scss";

export const Home = () => {
    const [comedyMoviesList, setComedyMoviesList] = useState(null);
    const [westernMoviesList, setWesternMoviesList] = useState(null);
    const [musicMoviesList, setMusicMoviesList] = useState(null);
    const [error, setError] = useState(false);

    const isListDataReady = (movieList) => Array.isArray(movieList) && movieList.length > 0;
    const isDataLoading = !isListDataReady(comedyMoviesList) || !isListDataReady(westernMoviesList) || !isListDataReady(musicMoviesList);

    useEffect(() => {
        axios.get("http://localhost:8080/movies/genre/comedy").then(({ data }) => {
            console.log(data)
            setComedyMoviesList(data)
        }).catch((error) => {
            console.log("error", error)
            setError(true)
        })
    }, [])

    useEffect(() => {
        axios.get("http://localhost:8080/movies/genre/western").then(({ data }) => {
            console.log(data)
            setWesternMoviesList(data)
        }).catch(() => setError(true))
    }, [])

    useEffect(() => {
        axios.get("http://localhost:8080/movies/genre/music").then(({ data }) => {
            console.log(data)
            setMusicMoviesList(data)
        }).catch(() => setError(true))
    }, [])

    const HomeLayout = ({ children }) => {
        return (
            <section className="home">{children}</section>
        )
    }

    if (isDataLoading && !error) {
        return (
            <HomeLayout><Loader /></ HomeLayout>
        )
    }

    return (
        <HomeLayout>
            {error && <p> Error: movie list could not be fetched. Please try again later! </p>}
            {isListDataReady(westernMoviesList) && <Carousel movieList={westernMoviesList} genre="western" />}
            {isListDataReady(musicMoviesList) && <Carousel movieList={musicMoviesList} genre="music" />}
            {isListDataReady(comedyMoviesList) && <Carousel movieList={comedyMoviesList} genre="comedy" />}
        </HomeLayout>
    )
}