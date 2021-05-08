import React from 'react';
import Searchbar from '../components/Searchbar';
import MoviesList from '../components/MoviesList';
import moviesApi from '../services/movies-api';

class MoviesView extends React.Component {
  state = {
    movies: null,
    query: '',
  };

  async componentDidUpdate(prevProps, prevState) {
    const { query } = this.state;

    if (query && query !== prevState.query) {
      try {
        const {
          data: { results },
        } = await moviesApi.fetchByQuery(query);

        this.setState({ movies: results });

        if (results.length === 0) {
          alert('No results found');
        }
      } catch (error) {
        alert("Couldn't get movies, please try again");
      }
    }
  }

  handleQueryChange = query => {
    this.setState({ query });
  };

  render() {
    const { movies } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.handleQueryChange} />
        {movies && <MoviesList movies={movies} />}
      </div>
    );
  }
}

export default MoviesView;
