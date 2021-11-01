import type { NextPage } from 'next';
import Head from 'next/head';
import HomeComponent from '../components/Organism/Home';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta charSet='UTF-8' />
        <link rel='icon' href='/icon/ihsan-logo.svg' />
        <link rel='icon' href='/icon/ihsan-logo.svg' sizes='32x32' />
        <link rel='icon' href='/icon/ihsan-logo.svg' sizes='192x192' />

        <title>Muhammad Ihsan</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta
          name='description'
          content='Personal blog Muhammad Ihsan created with love'
        />
        <meta name='publisher' content='Muhammad Ihsan' />
        <meta name='author' content='Muhammad Ihsan' />
      </Head>
      <HomeComponent />
    </>
  );
};

export default Home;
