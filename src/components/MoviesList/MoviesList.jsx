import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { paths } from '../../router/routes';

const MoviesList = ({ movies, location }) => {
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link
            to={{
              pathname: paths.movieDetails(movie.id),
              state: { from: location },
            }}
          >
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
    }),
  ),
};

export default withRouter(MoviesList);
