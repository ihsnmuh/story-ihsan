import Seo from 'components/Molecules/Seo';
import PortofolioComponent from '../../components/Organism/Portofolio';

export default function PortofolioPage() {
  return (
    <>
      <Seo title={`Portofolio | Muhammmad Ihsan`} description={'This page is about all project i have created'} />
      <PortofolioComponent />
    </>
  );
}
