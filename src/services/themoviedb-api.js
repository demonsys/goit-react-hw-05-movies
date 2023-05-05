import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'b40401eeb8ead0377250c446133586af';
// const IMAGES_URL = 'https://image.tmdb.org/t/p';
// const IMAGE_SIZE = '/w500';
// Возможные размеры: "w154","w185","w342","w500","w780","original"

const getMovieDetails = async movieId => {
  const response = await axios.get(BASE_URL + 'movie/' + movieId, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data;
};

const getTrending = async () => {
  const response = await axios.get(BASE_URL + 'trending/movie/day', {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data.results;
};

const getCast = async movie_id => {
  const response = await axios.get(
    BASE_URL + 'movie/' + movie_id + '/credits',
    {
      params: {
        api_key: API_KEY,
      },
    }
  );
  return response.data.cast;
};

const getReviews = async movie_id => {
  const response = await axios.get(
    BASE_URL + 'movie/' + movie_id + '/reviews',
    {
      params: {
        api_key: API_KEY,
      },
    }
  );
  return response.data.results;
};

const searchMovies = async query => {
  const response = await axios.get(BASE_URL + 'search/movie', {
    params: {
      api_key: API_KEY,
      query,
    },
  });
  return response.data.results;
};

export { getMovieDetails, getTrending, getCast, getReviews, searchMovies };
