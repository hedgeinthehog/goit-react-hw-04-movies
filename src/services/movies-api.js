import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = 'a3368b25f03d671fc46c253c64d35f5e';

const moviesApi = {
  fetchPopular() {
    return axios.get(`/trending/movie/week?api_key=${API_KEY}`);
  },

  fetchByQuery(query) {
    return axios.get(`/search/movie?api_key=${API_KEY}&query=${query}`);
  },

  fetchMovieById(id) {
    return axios.get(`/movie/${id}?api_key=${API_KEY}`);
  },

  fetchMovieCast(id) {
    return axios
      .get(`/movie/${id}/credits?api_key=${API_KEY}`)
      .then(response => response.data.cast);
  },

  fetchMovieReviews(id) {
    return axios.get(`/movie/${id}/reviews?api_key=${API_KEY}`);
  },
};

export default moviesApi;
