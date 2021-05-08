import React from 'react';
import MoviesList from '../components/MoviesList';
import moviesApi from '../services/movies-api';

class HomeView extends React.Component {
  state = {
    movies: null,
  };

  async componentDidMount() {
    try {
      const {
        data: { results },
      } = await moviesApi.fetchPopular();
      this.setState({ movies: results });
    } catch (error) {
      alert("Couldn't get movies, please refresh");
    }
  }

  render() {
    const { movies } = this.state;
    return <div>{movies && <MoviesList movies={movies} />}</div>;
  }
}

export default HomeView;
