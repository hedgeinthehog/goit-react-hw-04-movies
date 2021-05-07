import Homepage from '../views/HomeView';
import MoviesView from '../views/MoviesView';
import MovieDetailsView from '../views/MovieDetailsView';

const paths = {
  home: '/',
  movies: '/movies',
  movieDetails: '/movies/:movieId',
};

const routes = [
  {
    path: paths.home,
    component: Homepage,
    exact: true,
  },
  {
    path: paths.movieDetails,
    component: MovieDetailsView,
  },
  {
    path: paths.movies,
    component: MoviesView,
  },
];

export default routes;
