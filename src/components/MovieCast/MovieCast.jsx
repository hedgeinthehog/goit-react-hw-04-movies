import React from 'react';
import movieApi from '../../services/movies-api';
import getImgPath from '../../helpers/getImgPath';
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
          <ul>
            {cast.map(({ profile_path, name, character, id }) => {
              return (
                <li key={id}>
                  {profile_path && (
                    <img src={getImgPath(profile_path)} alt={name} />
                  )}
                  <p>{name}</p>
                  <p>Character: {character}</p>
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
