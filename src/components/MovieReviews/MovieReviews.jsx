import React from 'react';
import movieApi from '../../services/movies-api';
import styles from './MovieReviews.module.css';
import PropTypes from 'prop-types';

class MovieReviews extends React.Component {
  state = {
    reviews: null,
  };

  async componentDidMount() {
    const { id } = this.props;
    try {
      const reviews = await movieApi.fetchMovieReviews(id);

      this.setState({ reviews });
    } catch (error) {
      alert("Couldn't get reviews");
    }
  }

  render() {
    const { reviews } = this.state;

    return (
      <div>
        {reviews && reviews.length > 0 ? (
          <ul className={styles.reviewsList}>
            {reviews.map(({ author, content, id }) => (
              <li key={id} className={styles.review}>
                <p>Author: {author}</p>
                <p>{content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No reviews yet</p>
        )}
      </div>
    );
  }
}

MovieReviews.propTypes = {
  id: PropTypes.string,
};

export default MovieReviews;
