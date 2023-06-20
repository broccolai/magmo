import '@fontsource/open-sans';
import '@fontsource/sen';
import { JSX } from 'solid-js';
import { Head, Html, Link, Meta, Title } from 'solid-start';
import { AbsoluteContainer } from '../global/Containers';
import Footer from '../global/Footer';

interface Props {
  title: string;
  children: JSX.Element;
}

const Layout = (props: Props) => (
  <Html>
    <Head>
      {/* <Meta charSet="UTF-8" /> */}
      <Meta name="description" content="broccolai's personal page" />
      <Title>{props.title || 'broccol.ai'}</Title>

      <Meta name="viewport" content="width=device-width, initial-scale=1" />
      <Link rel="icon" href="/favicon.ico" />
      <Link rel="preconnect" href="https://tickets.broccol.ai" />
    </Head>
    <AbsoluteContainer>
      {props.children}
      <Footer />
    </AbsoluteContainer>
  </Html>
);

export default Layout;
