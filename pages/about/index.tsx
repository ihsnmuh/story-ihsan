import React from 'react';
import AboutComponent from '../../components/Organism/About';
import Head from 'next/head';

export default function AboutPage() {
  return (
    <div>
      <Head>
        <title>About | Muhammad Ihsan</title>
      </Head>
      <AboutComponent />
    </div>
  );
}
