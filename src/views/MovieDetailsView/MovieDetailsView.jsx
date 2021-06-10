import React from 'react';
import { Route, Link } from 'react-router-dom';
import MovieDetails from '../../components/MovieDetails';
import MovieReviews from '../../components/MovieReviews';
import MovieCast from '../../components/MovieCast';
import movieApi from '../../services/movies-api';
import { paths } from '../../router/routes';
import styles from './MovieDetailsView.module.css';

class MovieDetailsView extends React.Component {
  state = { movieId: '', movie: null };

  componentDidMount() {
    const { match } = this.props;
    const { movieId } = match.params;

    this.setState({ movieId });
  }

  async componentDidUpdate(prevProps, prevState) {
    const { movieId: id } = this.state;

    if (id !== prevState.movieId) {
      try {
        const { data } = await movieApi.fetchMovieById(id);

        this.setState({ movie: data });
      } catch (error) {
        alert("Couldn't get movie details, plase try again");
      }
    }
  }

  handleGoBack = () => {
    const { location, history } = this.props;

    if (location.state && location.state.from) {
      return history.push(location.state.from);
    }

    history.push(paths.movies);
  };

  render() {
    const { movie, movieId } = this.state;
    const { location } = this.props;

    return (
      <>
        <button
          type="button"
          onClick={this.handleGoBack}
          className={styles.backBtn}
        >
          &#129044; Go back
        </button>
        {movie && (
          <>
            <div>
              <MovieDetails movie={movie} />
            </div>
            <div className={styles.additionalInfoMenu}>
              {/* <p className={styles.additionalInfoMenuTitle}>
                Additional information
              </p> */}
              <Link
                to={{
                  pathname: `${paths.movieDetails(movieId)}/cast`,
                  state: location.state &&
                    location.state.from && { from: location.state.from },
                }}
                className={styles.link}
              >
                Cast
              </Link>
              <Link
                to={{
                  pathname: `${paths.movieDetails(movieId)}/reviews`,
                  state: location.state &&
                    location.state.from && { from: location.state.from },
                }}
                className={styles.link}
              >
                Reviews
              </Link>
            </div>

            <Route
              path={`${paths.movieDetails(':movieId')}/cast`}
              render={() => <MovieCast id={movieId} />}
            ></Route>
            <Route
              path={`${paths.movieDetails(':movieId')}/reviews`}
              render={() => <MovieReviews id={movieId} />}
            ></Route>
          </>
        )}
      </>
    );
  }
}

export default MovieDetailsView;
