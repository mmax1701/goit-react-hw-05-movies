import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=b4edd14713c6281ee6da10d38b062efd&language=en-US`
    )
      .then(res => res.json())
      .then(data => setCast(data));
  }, [movieId]);

  if (!cast) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ul>
        {cast.cast &&
          cast.cast.map(({ id, name, character, profile_path }) => (
            <li key={id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                alt={name}
                width="100"
              />
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Cast;
