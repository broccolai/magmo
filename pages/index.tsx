import Head from 'next/head';
import React from 'react';
import Layout from '../components/hocs/Layout';
import Intro from '../components/index/Intro';
import Splash from '../components/index/Splash';
import { black } from '../components/utilities/Colors';

const Index = () => (
  <>
    <Head>
      <link rel="preconnect" href="https://tickets.broccol.ai" />
    </Head>
    <Layout title="Home" backing={black}>
      <Splash />
      <Intro />
    </Layout>
  </>
);

export default Index;
