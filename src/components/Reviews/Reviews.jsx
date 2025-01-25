import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=b4edd14713c6281ee6da10d38b062efd&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(data => setReviews(data));
  }, [movieId]);

  if (!reviews) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {reviews.results.length > 0 ? (
        <ul>
          {reviews.results.map(({ id, author, content }) => (
            <li key={id}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </div>
  );
};

export default Reviews;
