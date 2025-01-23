import React, { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=b4edd14713c6281ee6da10d38b062efd&language=en-US`
    )
      .then(res => res.json())
      .then(data => setMovie(data));
  }, [movieId]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>
        <button>Go back</button>
      </div>
      <div>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.original_title}
          />
        </div>
        <div>
          <h1>{movie.original_title}</h1>
          <p>User score: {movie.vote_average}</p>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <ul>
            {movie.genres &&
              movie.genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
          </ul>
        </div>
      </div>
      <div>
        <h4>Additional information</h4>
        <ul>
          <li>
            <Link to={`/movies/${movieId}/cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetails;
