import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { paths } from '../../router/routes';
import styles from './MoviesList.module.css';

const MoviesList = ({ movies, location }) => {
  return (
    <ul className={styles.moviesList}>
      {movies.map(movie => (
        <li key={movie.id} className={styles.movie}>
          <Link
            to={{
              pathname: paths.movieDetails(movie.id),
              state: { from: location },
            }}
            className={styles.movieLink}
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
