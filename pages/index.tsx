import type { NextPage } from 'next';
import Header from '../components/Organism/Header';
import Head from 'next/head';
import Summary from '../components/Organism/Summary';
import Hope from '../components/Organism/Hope';
import SkillSet from '../components/Organism/SkillSet';
import Portofolio from '../components/Organism/Portofolio';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Muhammad Ihsan</title>
        <link rel='icon' href='/icon/ihsan-logo.svg' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Header />
      <Summary />
      <Hope />
      <SkillSet />
      <Portofolio />
    </>
  );
};

export default Home;
