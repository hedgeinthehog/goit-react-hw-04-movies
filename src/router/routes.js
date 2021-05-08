import Homepage from '../views/HomeView';
import MoviesView from '../views/MoviesView';
import MovieDetailsView from '../views/MovieDetailsView';

export const paths = {
  home: '/',
  movies: '/movies',
  movieDetails: '/movies/:movieId',
  movieDetails: id => `/movies/${id}`,
};

const routes = [
  {
    path: paths.home,
    component: Homepage,
    exact: true,
  },
  {
    path: paths.movieDetails(':movieId'),
    component: MovieDetailsView,
  },
  {
    path: paths.movies,
    component: MoviesView,
  },
];

export default routes;
