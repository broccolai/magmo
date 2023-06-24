import '@fontsource/open-sans';
import '@fontsource/sen';
import type { JSX } from 'solid-js';
import { AbsoluteContainer } from '../global/Containers';
import Footer from '../global/Footer';

interface Props {
  title: string;
  children: JSX.Element;
}

const Layout = (props: Props) => (
  <html>
    <head>
      {/* <Meta charSet="UTF-8" /> */}
      <meta name="description" content="broccolai's personal page" />
      <title>{props.title || 'broccol.ai'}</title>

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://tickets.broccol.ai" />
    </head>
    <AbsoluteContainer>
      {props.children}
      <Footer />
    </AbsoluteContainer>
  </html>
);

export default Layout;
