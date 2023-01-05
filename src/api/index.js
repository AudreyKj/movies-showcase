const express = require("express");
const cors = require("cors");
const axios = require('axios');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

const comedyGenreId = 35;
const musicGenreId = 10402;
const westernGenreId = 37;
const pg13Filter = "certification_country=US&certification.lte=PG";

app.use(cors())

app.get("/movies/genre/comedy", async (req, res) => {
    const comediesList = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.MOVIESDB_API_KEY}&with_genres=${comedyGenreId}&${pg13Filter}`)
    const {data: {results}} = comediesList;
        return res.json(results);
})

app.get("/movies/genre/music", async (req, res) => {
    const comediesList = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.MOVIESDB_API_KEY}&with_genres=${musicGenreId}&${pg13Filter}`)
    const {data: {results}} = comediesList;
    return res.json(results);
})

app.get("/movies/genre/western", async (req, res) => {
    const comediesList = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.MOVIESDB_API_KEY}&with_genres=${westernGenreId}&${pg13Filter}`)
    const {data: {results}} = comediesList;
    return res.json(results);
})


app.listen(port)