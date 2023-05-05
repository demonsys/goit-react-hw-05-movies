import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  padding: 10px 20px;
`;
export const StyledNavLink = styled(NavLink)`
  font-family: 'Source Sans Pro', Arial, sans-serif;
  font-size: 16px;
  color: black;
  text-decoration: none;
  padding: 10px;
  &:hover {
    text-decoration: underline;
  }
  &.active {
    color: rgb(183, 30, 71);
  }
`;

export const StyledNav = styled.nav`
  padding: 15px;
`;
