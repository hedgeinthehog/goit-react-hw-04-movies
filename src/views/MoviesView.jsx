import React from 'react';
import Searchbar from '../components/Searchbar';
import MoviesList from '../components/MoviesList';
import Loader from '../components/Spinner';
import moviesApi from '../services/movies-api';

class MoviesView extends React.Component {
  state = {
    movies: null,
    query: '',
    isLoading: false,
  };

  componentDidMount() {
    const { location } = this.props;
    const searchParams = new URLSearchParams(location.search);

    const query = searchParams.has('query') ? searchParams.get('query') : null;

    if (query) {
      this.setState({ query });
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    const { query } = this.state;

    if (query && query !== prevState.query) {
      this.toggleLoading();

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
      } finally {
        this.toggleLoading();
      }
    }
  }

  toggleLoading = () => {
    this.setState(prevState => ({
      isLoading: !prevState.isLoading,
    }));
  };

  handleQueryChange = query => {
    this.setState({ query });

    if (!query) {
      this.props.history.push({
        pathname: this.props.location.pathname,
      });
      this.setState({ movies: null });
      return;
    }

    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `query=${query}`,
    });
  };

  render() {
    const { movies, isLoading } = this.state;

    return (
      <div>
        {isLoading && <Loader />}
        <Searchbar onSubmit={this.handleQueryChange} />
        {movies && <MoviesList movies={movies} />}
      </div>
    );
  }
}

export default MoviesView;
