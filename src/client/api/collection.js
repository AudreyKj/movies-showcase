import axios from 'axios';

export const getMoviesCollection = async () => {
  try {
    const { data } = await axios.get('http://localhost:8080/movies/collection');
    return data.error ? Promise.reject(data.error) : Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error);
  }
};
