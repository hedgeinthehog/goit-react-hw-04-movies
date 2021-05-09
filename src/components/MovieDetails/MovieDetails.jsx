import getImgPath from '../../helpers/getImgPath';

const MovieDetails = ({ movie }) => {
  const {
    poster_path,
    title,
    genres,
    overview,
    vote_average,
    release_date,
  } = movie;

  const releaseDate = new Date(release_date);
  const releaseYear = releaseDate.getFullYear();
  const genreNames = genres.map(genre => genre.name).join(' ');
  const posterPath = getImgPath(poster_path);
  const score = vote_average * 10;

  return (
    <div>
      <div>
        <img src={posterPath} alt={title} />
      </div>
      <div>
        <h3>
          {title} ({releaseYear})
        </h3>
        <p>User score: {score}%</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h2>Genres</h2>
        <p>{genreNames}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
