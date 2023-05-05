import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container, StyledNavLink, StyledNav } from './SharedLayout.styled';

export default function SharedLayout() {
  return (
    <Container>
      <header>
        <StyledNav>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </StyledNav>
        <hr />
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
}
