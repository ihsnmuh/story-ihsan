import Seo from 'components/Molecules/Seo';
import Feedback from 'components/Organism/General/Feedback';
import React from 'react';
import AboutComponent from '../../components/Organism/About';

export default function AboutPage() {
  return (
    <div>
      <Seo
        title={`About | Muhammmad Ihsan`}
        description={
          "Hello! I'm Ihsan, graduate of Agricultural Engineering, Bogor Agriculture University. I became a web developer especially Frontend Developer starting in June 2021."
        }
      />
      <AboutComponent />
      <Feedback />
    </div>
  );
}
