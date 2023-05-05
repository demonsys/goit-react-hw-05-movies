import { useState, useEffect } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { searchMovies } from 'services/themoviedb-api';

export default function Movies() {
  const [results, setResults] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const query = searchParams.get('query') ?? '';
  useEffect(() => {
    if (query === '') return;
    searchMovies(query).then(setResults);
  }, [query]);
  const handleSubmit = event => {
    event.preventDefault();
    const inputValue = event.target.elements.searchInput.value;
    setSearchParams({ query: inputValue });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchInput"
          placeholder="Enter movie title"
          autoComplete="on"
        />
        <button type="submit">Search</button>
      </form>
      <br />
      {results && (
        <ul>
          {results.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title || movie.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
