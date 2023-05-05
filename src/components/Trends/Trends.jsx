import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTrending } from 'services/themoviedb-api';

export default function Trends() {
  const [trending, setTrending] = useState([]);
  useEffect(() => {
    getTrending().then(setTrending);
  }, []);
  return (
    <div>
      <h2>Trending today</h2>
      <ul>
        {trending.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title || movie.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
