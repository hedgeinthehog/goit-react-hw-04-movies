import React from 'react';
import movieApi from '../../services/movies-api';
import getImgPath from '../../helpers/getImgPath';
import styles from './MovieCast.module.css';
import PropTypes from 'prop-types';

class MovieCast extends React.Component {
  state = {
    cast: null,
  };

  async componentDidMount() {
    const { id } = this.props;

    try {
      const cast = await movieApi.fetchMovieCast(id);

      this.setState({ cast });
    } catch (error) {
      console.log(error.message);
    }
  }

  render() {
    const { cast } = this.state;
    const isCastAvailable = cast ? cast.length : null;

    return (
      <div>
        {cast && isCastAvailable ? (
          <ul className={styles.castList}>
            {cast.map(({ profile_path, name, character, id }) => {
              return (
                <li key={id} className={styles.castItem}>
                  {profile_path && (
                    <div className={styles.thumb}>
                      <img
                        src={getImgPath(profile_path)}
                        alt={name}
                        className={styles.img}
                      />
                    </div>
                  )}
                  <div className={styles.name}>
                    <p>{name}</p>
                    <p>Character: {character}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          <p>No cast available</p>
        )}
      </div>
    );
  }
}

MovieCast.propTypes = {
  id: PropTypes.string,
};

export default MovieCast;
