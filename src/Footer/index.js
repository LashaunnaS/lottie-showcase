import React, { Fragment } from 'react';
import { Icon } from 'semantic-ui-react';

import FooterContainer from './FooterContainer';
import FooterText from './FooterText';

const Header = () => (
  <Fragment>
    <FooterContainer>
      <FooterText>
        Made with <Icon color="red" name="heart" />
        and <Icon name="coffee" /> by Dyl Bromell.
      </FooterText>
    </FooterContainer>
  </Fragment>
);

export default Header;
