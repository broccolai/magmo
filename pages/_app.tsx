import { AppProps } from 'next/app';
import Router from 'next/router';
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Auth0Provider } from 'use-auth0-hooks';
import Layout from '../components/hocs/Layout';

const GlobalReset = createGlobalStyle`
  body {
    margin: 0;
  }
`;

const onRedirectCallback = (appState: any) => {
  if (appState && appState.returnTo) {
    Router.push({
      pathname: appState.returnTo.pathname,
      query: appState.returnTo.query,
    });
  }
};

const onAccessTokenError = (err: Error, options: any) => {
  console.error('Failed to retrieve access token: ', err);
};

const onLoginError = (err: Error) => {
  Router.push({
    pathname: '/oops',
    query: {
      message: err.message,
    },
  });
};

const onRedirecting = () => {
  return (
    <div>
      <h1>Signing you in</h1>
      <p>
        In order to access this page you will need to sign in. Please wait while we redirect you to the login page...
      </p>
    </div>
  );
};

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <GlobalReset />
    <Auth0Provider
      domain={process.env.AUTH0_DOMAIN as string}
      clientId={process.env.AUTH0_CLIENT_ID as string}
      redirectUri={process.env.REDIRECT_URI as string}
      onLoginError={onLoginError}
      onAccessTokenError={onAccessTokenError}
      onRedirecting={onRedirecting}
      onRedirectCallback={onRedirectCallback}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Auth0Provider>
  </>
);

export default App;
