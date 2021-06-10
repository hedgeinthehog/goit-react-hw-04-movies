import React from 'react';
import styles from './Searchbar.module.css';

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
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <input
          type="text"
          value={query}
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          onChange={this.handleChange}
          className={styles.searchInput}
        />
        <button type="submit" className={styles.btn}>
          &#10148;
        </button>
      </form>
    );
  }
}

export default Searchbar;
