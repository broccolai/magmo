import NextHead from 'next/head';
import React, { ReactNode } from 'react';
import Footer from '../global/Footer';
import Header from '../global/Header';

type Props = {
  title: string;
  backing: string;
  children: ReactNode;
};

const Layout = ({ children }: Props) => (
  <>
    <NextHead>
      <meta charSet="UTF-8" />
      <title>MAGMO</title>

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />

      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Sen&display=swap"
        rel="stylesheet"
      />
    </NextHead>
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;
