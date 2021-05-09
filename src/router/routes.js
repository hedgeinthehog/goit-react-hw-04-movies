import { lazy } from 'react';

const Homepage = lazy(() => import('../views/HomeView'));
const MoviesView = lazy(() => import('../views/MoviesView'));
const MovieDetailsView = lazy(() => import('../views/MovieDetailsView'));

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
