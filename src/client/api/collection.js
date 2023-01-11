import axios from 'axios';

const getMoviesCollection = async () => {
  try {
    const { data } = await axios.get(`${process.env.API_URL}/movies/collection`);
    return data.error ? Promise.reject(data.error) : Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error);
  }
};

export default getMoviesCollection;
