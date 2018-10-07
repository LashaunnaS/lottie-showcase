import React from 'react';

import Hero from './Hero';
import Navigation from './Navigation';
import NavigationGrid from './NavigationGrid';
import NavigationItem from './NavigationItem';
import Title from './Title';

export default () => (
  <Hero>
    <NavigationGrid>
      <Title>lottieshowcase</Title>
      <Navigation>
        <NavigationItem>hello</NavigationItem>
        <NavigationItem>goodbye</NavigationItem>
        <NavigationItem>hellogoodbye</NavigationItem>
      </Navigation>
    </NavigationGrid>
  </Hero>
);
