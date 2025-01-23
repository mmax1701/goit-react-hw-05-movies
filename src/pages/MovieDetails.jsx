import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';
import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';

const MovieDetails = () => {
  return (
    <div>
      <nav>
        <NavLink to="/movies/:movieId/cast">Cast</NavLink>
        <NavLink to="/movies/:movieId/reviews">Reviews</NavLink>
      </nav>

      <Routes>
        <Route path="/movies/:movieId/cast" element={<Cast />} />
        <Route path="/movies/:movieId/reviews" element={<Reviews />} />
      </Routes>
    </div>
  );
};

export default MovieDetails;
