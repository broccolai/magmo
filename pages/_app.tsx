import { AppProps } from 'next/app';
import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalReset = createGlobalStyle`
  body {
    margin: 0;
  }
`;

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <GlobalReset />
    <Component {...pageProps} key="key" />
  </>
);

export default App;
