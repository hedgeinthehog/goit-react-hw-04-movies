import React from 'react';

class Searchbar extends React.Component {
  state = {
    query: '',
  };

  handleChange = event => {
    const { value } = event.target;
    this.setState({ query: value });
  };

  handleSubmit = event => {
    const { query } = this.state;

    event.preventDefault();
    this.props.onSubmit(query);
    this.setState({ query: '' });
  };

  render() {
    const { query } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={query}
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          onChange={this.handleChange}
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default Searchbar;
