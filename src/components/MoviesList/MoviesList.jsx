import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { paths } from '../../router/routes';

const MoviesList = ({ movies }) => (
  <ul>
    {movies.map(movie => (
      <li key={movie.id}>
        <Link to={paths.movieDetails(movie.id)}>{movie.title}</Link>
      </li>
    ))}
  </ul>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
    }),
  ),
};

export default MoviesList;
