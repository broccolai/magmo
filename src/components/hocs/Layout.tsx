import '@fontsource/open-sans'
import '@fontsource/sen'
import { Component, JSX } from 'solid-js';
import { AbsoluteContainer } from '../global/Containers';
import Footer from '../global/Footer';
import { Head, Html, Link, Meta, Style, Title } from 'solid-start';

type Props = {
  title: string;
  children: JSX.Element;
};

const Layout = ({ title, children }: Props) => (
  <Html>
    <Head>
      {/* <Meta charSet="UTF-8" /> */}
      <Meta name="description" content="broccolai's personal page" />
      <Title>{title || 'broccol.ai'}</Title>

      <Meta name="viewport" content="width=device-width, initial-scale=1" />
      <Link rel="icon" href="/favicon.ico" />
      <Link rel="preconnect" href="https://tickets.broccol.ai" />
    </Head>
    <AbsoluteContainer>
      {children}
      <Footer />
    </AbsoluteContainer>
  </Html>
);

export default Layout;
