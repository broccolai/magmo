import NextHead from 'next/head';
import React, { ReactNode } from 'react';
import { AbsoluteContainer } from '../global/Containers';
import Footer from '../global/Footer';

type Props = {
  title: string;
  backing: string;
  children: ReactNode;
};

const Layout = ({ title, backing, children }: Props) => (
  <>
    <NextHead>
      <meta charSet="UTF-8" />
      <meta name="description" content="broccolai's personal page" />
      <title>{title || 'broccol.ai'}</title>

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
    <AbsoluteContainer>
      {/* <Header /> */}
      {children}
      <Footer background={backing} />
    </AbsoluteContainer>
  </>
);

export default Layout;
