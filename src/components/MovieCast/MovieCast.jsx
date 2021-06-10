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
      alert("Couldn't get cast");
    }
  }

  render() {
    const { cast } = this.state;

    return (
      <div>
        {cast && (
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
        )}
      </div>
    );
  }
}

MovieCast.propTypes = {
  id: PropTypes.string,
};

export default MovieCast;
