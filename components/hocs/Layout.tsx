import GoogleFonts from 'next-google-fonts';
import NextHead from 'next/head';
import React, { ReactNode } from 'react';

import Footer from '../global/Footer';
import Header from '../global/Header';

type Props = {
  title: string;
  backing: string;
  children: ReactNode;
};

const Layout = ({ title, backing, children }: Props) => (
  <>
    <GoogleFonts href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Sen&display=swap" />
    <NextHead>
      <meta charSet="UTF-8" />
      <title>MAGMO | {title || ''}</title>

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
    <Header />
    {children}
    <Footer background={backing} />
  </>
);

export default Layout;
