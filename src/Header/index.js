import React from 'react';
import styled from 'styled-components';

import Hero from './Hero';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 2fr;
  height: 2vh;
  padding-top: 1%;
`;

const Title = styled.h1`
  font-family: 'Work Sans', sans-serif;
  color: #fbfbfb;
  display: flex;
  justify-self: center;
  align-self: center;
  font-size: 1.25 rem;
`;

const Navigation = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  grid-column: 3;
`;

const NavigationItem = styled.p`
  font-family: 'Roboto', sans-serif;
  color: #252525;
  font-size: 1.25rem;
`;

export default () => (
  <Hero>
    <Grid>
      <Title>lottieshowcase</Title>
      <Navigation>
        <NavigationItem>hello</NavigationItem>
        <NavigationItem>goodbye</NavigationItem>
        <NavigationItem>hellogoodbye</NavigationItem>
      </Navigation>
    </Grid>
  </Hero>
);
