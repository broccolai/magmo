import GoogleFonts from 'next-google-fonts';
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
    <GoogleFonts href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Sen&display=swap" />
    <NextHead>
      <meta charSet="UTF-8" />
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
