import React from 'react';
import { Route, Link } from 'react-router-dom';
import MovieDetails from '../components/MovieDetails';
import MovieReviews from '../components/MovieReviews';
import MovieCast from '../components/MovieCast';
import movieApi from '../services/movies-api';
import { paths } from '../router/routes';

class MovieDetailsView extends React.Component {
  state = { movieId: '', movie: null };

  componentDidMount() {
    const { match, location, history } = this.props;
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

  render() {
    const { movie, movieId } = this.state;
    return (
      <>
        {' '}
        {movie && (
          <>
            <div>
              <MovieDetails movie={movie} />
            </div>
            <div>
              <p>Additional information</p>
              <Link to={`${paths.movieDetails(movieId)}/cast`}>Cast</Link>
              <Link to={`${paths.movieDetails(movieId)}/reviews`}>Reviews</Link>
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
