import styled from 'styled-components';

import svg from '../svg/Hero.svg';
import webSvg from '../svg/WebHero.svg';

const Hero = styled.div`
  background: url(${svg}) no-repeat;
  background-size: contain;
  height: 100vh;

  @media (max-width: 776px) {
    background: url(${webSvg}) no-repeat;
    background-size: contain;
  }
`;

export default Hero;
