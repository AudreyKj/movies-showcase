import axios from 'axios';

const port = process.env.PORT || 8080;

const getMoviesCollection = async () => {
  try {
    const { data } = await axios.get(`http://localhost:${port}/movies/collection`);
    return data.error ? Promise.reject(data.error) : Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error);
  }
};

export default getMoviesCollection;
