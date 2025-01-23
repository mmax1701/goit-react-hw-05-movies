import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import MovieDetails from './MovieDetails';

const Movies = () => {
  return (
    <div>
      <nav>
        <NavLink to="/movies/:movieId">MovieDetails</NavLink>
      </nav>

      <Routes>
        <Route path="/movies/:movieId" element={<MovieDetails />} />
      </Routes>
    </div>
  );
};

export default Movies;
