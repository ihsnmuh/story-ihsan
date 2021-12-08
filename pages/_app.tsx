import { Layout } from 'components/Organism/layout';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/dist/client/router';
import { SnackbarProvider } from 'notistack';
import { useEffect } from 'react';
import 'tailwindcss/tailwind.css';
import * as ga from 'lib/ga';
import 'styles/globals.css';
import 'styles/mdx.css';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_MODE === 'production') {
      const handleRouteChange = (url: any) => {
        ga.pageview(url);
      };
      router.events.on('routeChangeComplete', handleRouteChange);
      return () => {
        router.events.off('routeChangeComplete', handleRouteChange);
      };
    }
  }, [router.events]);

  return (
    <ThemeProvider attribute='class' defaultTheme='system'>
      <SnackbarProvider maxSnack={3}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SnackbarProvider>
    </ThemeProvider>
  );
}
export default MyApp;
