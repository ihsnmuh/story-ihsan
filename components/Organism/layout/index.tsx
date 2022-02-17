import { BarRainbow } from 'components/Atoms/BarRainbow';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

export const Layout: React.FC = (props) => {
  return (
    <>
      <BarRainbow />
      <Navbar />
      <main className='min-h-screen min-w-full mx-auto'>{props.children}</main>
      <Footer />
    </>
  );
};
