// Imports
import React from 'react';
import { Icon } from 'semantic-ui-react';

import FooterContainer from './FooterContainer';
import FooterText from './FooterText';

const Header = () => (
  <FooterContainer>
    <FooterText>
      Made with <Icon color="red" name="heart" />
      and <Icon name="coffee" /> by Dyl Bromell.
    </FooterText>
  </FooterContainer>
);

export default Header;
