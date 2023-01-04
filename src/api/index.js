const express = require("express");
const cors = require("cors");
const axios = require('axios');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;


const musicGenreId = 10402;
const westernGenreId = 37;
const comedyGenreId = 35;

app.use(cors())

app.get("/movies/genre/comedy", async (req, res) => {
    const comediesList = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.MOVIESDB_API_KEY}&with_genres=${comedyGenreId}&certification_country=US&certification.lte=PG`)
    const {data: {results}} = comediesList;
    console.log(comediesList)

    return res.json(results);
})

app.get("/movies/genre/music", async (req, res) => {
    const comediesList = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.MOVIESDB_API_KEY}&with_genres=${musicGenreId}&certification_country=US&certification.lte=PG`)
    const {data: {results}} = comediesList;
    console.log(comediesList)

    return res.json(results);
})

app.get("/movies/genre/western", async (req, res) => {
    const comediesList = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.MOVIESDB_API_KEY}&with_genres=${westernGenreId}&certification_country=US&certification.lte=PG`)
    const {data: {results}} = comediesList;
    console.log(comediesList)

    return res.json(results);
})


app.listen(port)