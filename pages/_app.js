import { h } from 'preact'
import App, { Container } from 'next/app'

import { GlobalStyles } from '../components/global/Styles'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <GlobalStyles />
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default MyApp;
