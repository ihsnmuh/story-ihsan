import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { Layout } from '../components/Organism/layout';
import Head from 'next/dist/shared/lib/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class'>
      <Layout>
        <Head>
          <title>Muhammad Ihsan</title>
          <link rel='icon' href='/icon/ihsan-logo.svg' />
          <meta
            name='viewport'
            content='initial-scale=1.0, width=device-width'
          />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
export default MyApp;
