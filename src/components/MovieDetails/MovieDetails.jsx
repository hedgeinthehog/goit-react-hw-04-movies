import getImgPath from '../../helpers/getImgPath';
import styles from './MovieDetails.module.css';

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
    <div className={styles.detailsWrapper}>
      <div className={styles.moviePoster}>
        <img src={posterPath} alt={title} />
      </div>
      <div className={styles.details}>
        <h3 className={styles.title}>
          {title} ({releaseYear})
        </h3>
        <p>User score: {score}%</p>
        <h2 className={styles.detailsItemName}>Overview</h2>
        <p>{overview}</p>
        <h2 className={styles.detailsItemName}>Genres</h2>
        <p>{genreNames}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
