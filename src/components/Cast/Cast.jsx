import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCast } from '../../services/themoviedb-api';
import styled from 'styled-components';
const IMAGES_URL = 'https://image.tmdb.org/t/p/w500';
// Возможные размеры: "w154","w185","w342","w500","w780","original"
const StyledCardList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: start;
  text-align: center;
  gap: 30px;
  flex-wrap: wrap;
  padding: 0;
  // color: #212121;
  // &.active {
  //   color: orangered;
  // }
`;

const StyledCard = styled.li`
  padding: 5px;
  width: 90px;
`;

export default function Cast() {
  const { movieId } = useParams();
  const [castState, setCastState] = useState([]);
  useEffect(() => {
    getCast(movieId).then(setCastState).catch(console.log);
  }, [movieId]);
  return (
    <div>
      <p>Cast:</p>
      <StyledCardList>
        {castState.map(person => (
          <StyledCard key={person.name}>
            {person.profile_path ? (
              <img
                src={IMAGES_URL + person.profile_path}
                alt={person.name}
                width="80"
              />
            ) : (
              <div
                style={{
                  width: '90px',
                  height: '120px',
                }}
              >
                No photo {person.name}
              </div>
            )}
            <p>{person.name}</p>
            <p>Character: {person.character}</p>
          </StyledCard>
        ))}
      </StyledCardList>
    </div>
  );
}
