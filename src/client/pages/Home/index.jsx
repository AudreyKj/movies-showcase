import React, { useState, useEffect } from 'react';
import Carousel from '../../components/Carousel/index';
import Loader from '../../components/Loader/index';
import HomeLayout from './HomeLayout';
import getMoviesCollection from '../../api/collection';
import './styles.scss';

const Home = () => {
  const [comedyMoviesList, setComedyMoviesList] = useState(null);
  const [westernMoviesList, setWesternMoviesList] = useState(null);
  const [musicMoviesList, setMusicMoviesList] = useState(null);
  const [error, setError] = useState(false);

  const isListDataReady = (movieList) => Array.isArray(movieList) && movieList.length > 0;
  const isDataLoading = !isListDataReady(comedyMoviesList)
  || !isListDataReady(westernMoviesList)
  || !isListDataReady(musicMoviesList);

  useEffect(() => {
    getMoviesCollection().then((collection) => {
      setComedyMoviesList(collection.comedy);
      setWesternMoviesList(collection.western);
      setMusicMoviesList(collection.music);
    }).catch(() => {
      setError(true);
    });
  }, []);

  if (isDataLoading && !error) {
    return (
      <HomeLayout><Loader /></HomeLayout>
    );
  }

  return (
    <HomeLayout>
      {error && <p> Error: movie list could not be fetched. Please try again later! </p>}
      {isListDataReady(westernMoviesList) && <Carousel movieList={westernMoviesList} genre="western" />}
      {isListDataReady(musicMoviesList) && <Carousel movieList={musicMoviesList} genre="music" />}
      {isListDataReady(comedyMoviesList) && <Carousel movieList={comedyMoviesList} genre="comedy" />}
    </HomeLayout>
  );
};

export default Home;
