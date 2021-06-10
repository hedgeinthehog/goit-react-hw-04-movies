import React from 'react';
import MoviesList from '../../components/MoviesList';
import Loader from '../../components/Spinner';
import moviesApi from '../../services/movies-api';
import styles from './HomeView.module.css';

class HomeView extends React.Component {
  state = {
    movies: null,
    isLoading: false,
  };

  async componentDidMount() {
    this.toggleLoading();

    try {
      const {
        data: { results },
      } = await moviesApi.fetchPopular();
      this.setState({ movies: results });
    } catch (error) {
      alert("Couldn't get movies, please refresh");
    } finally {
      this.toggleLoading();
    }
  }

  toggleLoading = () => {
    this.setState(prevState => ({
      isLoading: !prevState.isLoading,
    }));
  };

  render() {
    const { movies, isLoading } = this.state;
    return (
      <div>
        {isLoading && <Loader />}
        <h1 className={styles.title}>Trending this week</h1>
        {movies && <MoviesList movies={movies} />}
      </div>
    );
  }
}

export default HomeView;
