import Seo from 'components/Molecules/Seo';
import type { NextPage } from 'next';
import Head from 'next/head';
import HomeComponent from '../components/Organism/Home';

const Home: NextPage = () => {
  return (
    <>
      <Seo />
      {/* <Head>
        <meta charSet='UTF-8' />
        <link rel='icon' href='/icon/ihsan-logo.svg' />
        <link rel='icon' href='/icon/ihsan-logo.svg' sizes='32x32' />
        <link rel='icon' href='/icon/ihsan-logo.svg' sizes='192x192' />

        <title>Muhammad Ihsan</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta
          name='description'
          content="Muhammad Ihsan's personal website made with love"
        />
        <meta name='publisher' content='Muhammad Ihsan' />
        <meta name='author' content='Muhammad Ihsan' />
        <link rel='canonical' href='https://ihsanmuh.vercel.app/' />

        <meta property='og:locale' content='id_ID' />
        <meta property='og:title' content='Personal Website | Muhammad Ihsan' />
        <meta
          property='og:description'
          content="Muhammad Ihsan's personal website made with love"
        />
        <meta
          property='og:image'
          content='https://og-image-ihsan.vercel.app/**Home**%20%7C%20ihsanmuh.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fres.cloudinary.com%2Fdoc4dinqa%2Fimage%2Fupload%2Fv1638066468%2Fihsan%2FLogo-ihsan-long_cghzar.svg&widths=250'
        />
        <meta property='og:url' content='https://ihsanmuh.vercel.app/' />
        <meta property='og:site_name' content='Muhammad Ihsan' />

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@ihcaann' />
        <meta name='twitter:url' content='https://ihsanmuh.vercel.app/' />
        <meta name='twitter:title' content='Personal Website Muhammad Ihsan' />
        <meta
          name='twitter:image'
          content='https://og-image-ihsan.vercel.app/**Home**%20%7C%20ihsanmuh.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fres.cloudinary.com%2Fdoc4dinqa%2Fimage%2Fupload%2Fv1638066468%2Fihsan%2FLogo-ihsan-long_cghzar.svg&widths=250'
        />
        <meta name='twitter:creator' content='@ihcaann' />
        <meta
          name='twitter:description'
          content="Muhammad Ihsan's personal website made with love"
        />
      </Head> */}
      <HomeComponent />
    </>
  );
};

export default Home;
