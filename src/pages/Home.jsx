import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.themoviedb.org/3/trending/movie/day',
          {
            method: 'GET',
            headers: {
              Authorization:
                'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNGVkZDE0NzEzYzYyODFlZTZkYTEwZDM4YjA2MmVmZCIsIm5iZiI6MTczNzYzNDI2NS4yMDIsInN1YiI6IjY3OTIzMWQ5YThjZTM0ODljZWI1N2VlYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.q90fbWtzpqwu0mwaLvlSgpJpUXTHEq3ER40hwSHi-fk',
            },
          }
        );
        const data = await response.json();
        setData(data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {data.map(({ id, original_title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`}>{original_title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;

/* Ключ доступа к API
eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNGVkZDE0NzEzYzYyODFlZTZkYTEwZDM4YjA2MmVmZCIsIm5iZiI6MTczNzYzNDI2NS4yMDIsInN1YiI6IjY3OTIzMWQ5YThjZTM0ODljZWI1N2VlYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.q90fbWtzpqwu0mwaLvlSgpJpUXTHEq3ER40hwSHi-fk
Ключ API
b4edd14713c6281ee6da10d38b062efd
*/
