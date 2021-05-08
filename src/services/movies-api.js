import axios from 'axios';

axios.defaults.baseURL = 'https://www.themoviedb.org/3';
const API_KEY = 'a3368b25f03d671fc46c253c64d35f5e';

const moviesApi = {
  fetchPopular() {
    return axios.get(`/trending?api_key=${API_KEY}`);
  },

  fetchByQuery(query) {
    return axios.get(`/search/movie?api_key=${API_KEY}&query=${query}`);
  },

  fecthMovieById(id) {
    return axios.get(`/movie/${id}?api_key=${API_KEY}`);
  },

  fetchMovieCredits(id) {
    return axios.get(`/movie/${id}/credits?api_key=${API_KEY}`);
  },

  fetchMovieReviews(id) {
    return axios.get(`/movie/${id}/reviews?api_key=${API_KEY}`);
  },
};

export default moviesApi;
