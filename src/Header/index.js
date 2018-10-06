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
  color: #fbfbfb;
  display: flex;
  justify-self: center;
  align-self: center;
`;

const Navigation = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  grid-column: 3;
`;

const NavigationItem = styled.p`
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
