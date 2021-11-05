import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import { SnackbarProvider } from 'notistack';
import 'tailwindcss/tailwind.css';
import { Layout } from '../components/Organism/layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
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
