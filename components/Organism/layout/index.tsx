import Footer from './components/Footer';
import Navbar from './components/Navbar';

export const Layout: React.FC = (props) => {
  return (
    <>
      <Navbar />
      <main className='min-h-screen min-w-full mx-auto'>{props.children}</main>
      <Footer />
    </>
  );
};
