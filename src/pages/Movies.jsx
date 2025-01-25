import React, { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [data, setData] = useState([]);
  const location = useLocation();
  const searchStr = searchParams.get('query');

  useEffect(() => {
    if (searchStr) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=b4edd14713c6281ee6da10d38b062efd&language=en-US&query=${searchStr}&page=1&include_adult=false`
      )
        .then(res => res.json())
        .then(data => {
          setData(data.results);
        })
        .catch(error => console.error('Error fetching data:', error));
    }
  }, [searchStr]);

  const handleSumit = e => {
    e.preventDefault();
    setSearchParams({ query: e.target.searchStr.value });
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSumit}>
          <input
            type="text"
            name="searchStr"
            required
            placeholder="Enter movie title"
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <div>
        {data && (
          <ul>
            {data.map(({ id, original_title }) => (
              <li key={id}>
                <Link to={`/movies/${id}`} state={{ from: location }}>
                  {original_title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Movies;
