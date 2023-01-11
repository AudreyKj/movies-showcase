const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();

// IDs from themoviedb API
const comedyGenreId = 35;
const musicGenreId = 10402;
const westernGenreId = 37;

const baseUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=';
const pg13Filter = 'certification_country=US&certification.lte=PG';

app.use(cors());

app.get('/movies/collection', async (req, res) => {
  try {
    const comedyCategoryList = await axios.get(`${baseUrl}${process.env.MOVIESDB_API_KEY}&with_genres=${comedyGenreId}&${pg13Filter}`);
    const comedyRes = comedyCategoryList.data.results;

    const musicCategoryList = await axios.get(`${baseUrl}${process.env.MOVIESDB_API_KEY}&with_genres=${musicGenreId}&${pg13Filter}`);
    const musicRes = musicCategoryList.data.results;

    const westernCategoryList = await axios.get(`${baseUrl}${process.env.MOVIESDB_API_KEY}&with_genres=${westernGenreId}&${pg13Filter}`);
    const westernRes = westernCategoryList.data.results;

    const collectionRes = {
      comedy: [...comedyRes],
      music: [...musicRes],
      western: [...westernRes],
    };

    return res.json(collectionRes);
  } catch (error) {
    return res.status(500).json({ error: 'API error' });
  }
});

app.listen(process.env.PORT || 8080);
