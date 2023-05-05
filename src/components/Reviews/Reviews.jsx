import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getReviews } from '../../services/themoviedb-api';
import { SubTitle } from '../../pages/MovieDetails.styled';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviewsState, setReviewsState] = useState([]);
  useEffect(() => {
    getReviews(movieId).then(setReviewsState).catch(console.log);
  }, [movieId]);
  return (
    <>
      <ul>
        {reviewsState.map(review => (
          <li key={review.id}>
            <SubTitle>{review.author}</SubTitle>
            {review.content}
          </li>
        ))}
      </ul>
      {reviewsState.length === 0 && <div>No reviews for this film</div>}
    </>
  );
}
