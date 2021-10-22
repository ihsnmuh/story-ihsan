import type { NextPage } from 'next';
import Header from '../components/Organism/header';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Muhammad Ihsan</title>
        <link rel='icon' href='/icon/ihsan-logo.svg' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Header />
    </>
  );
};

export default Home;
