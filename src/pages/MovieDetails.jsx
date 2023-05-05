import { Outlet, useLocation, useParams, Link } from 'react-router-dom';
import { useEffect, useState, useRef, Suspense } from 'react';
import { getMovieDetails } from '../services/themoviedb-api';
import { StyledNavLink } from '../components/SharedLayout/SharedLayout.styled';
import { Poster, MovieCard, SubTitle } from './MovieDetails.styled';
const IMAGES_URL = 'https://image.tmdb.org/t/p/w500';
// Возможные размеры: "w154","w185","w342","w500","w780","original"

export default function MovieDetails() {
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');
  const { movieId } = useParams();
  const [movieInfoState, setMovieInfoState] = useState([]);
  useEffect(() => {
    getMovieDetails(movieId).then(setMovieInfoState).catch(console.log);
  }, [movieId]);
  const {
    title,
    vote_average,
    overview,
    genres = [],
    poster_path,
  } = movieInfoState;
  return (
    <div>
      <Link to={backLinkHref.current}>&#129044; Go back</Link>
      {movieInfoState && (
        <MovieCard>
          {poster_path && (
            <Poster src={IMAGES_URL + poster_path} alt="" width="200" />
          )}
          <h3>{title}</h3>
          <p>User Score: {Math.round(vote_average * 10)}% </p>
          <SubTitle>Overview</SubTitle>
          <p>{overview}</p>
          <SubTitle>Genres</SubTitle>
          <ul>{genres.map(genre => genre.name).join(' ')}</ul>
        </MovieCard>
      )}
      <hr />
      Additional information
      <ul>
        <li>
          <StyledNavLink to="cast">Cast</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="reviews">Reviews</StyledNavLink>
        </li>
      </ul>
      <hr />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
