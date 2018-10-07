import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';

import Header from './Header';
import Footer from './Footer';

// eslint-disable-next-line
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Roboto|Work+Sans');
  body, html {
    height: 100%;
    margin: 0;
  }
`;

const App = () => (
  <Fragment>
    <Header />
    <Footer />
  </Fragment>
);

ReactDOM.render(<App />, document.getElementById('root'));
