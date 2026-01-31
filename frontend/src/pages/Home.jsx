import { Header } from '../components/Common/Header';
import { Footer } from '../components/Common/Footer';
import { Hero } from '../components/Home/Hero';
import { Overview } from '../components/Home/Overview';
import { Stats } from '../components/Home/Stats';
import { ServicesPreview } from '../components/Home/ServicesPreview';
import { Customers } from '../components/Home/Customers';

export const Home = () => {
  return (
    <div className="min-h-screen" data-testid="home-page">
      <Header />
      <main>
        <Hero />
        <Overview />
        <Stats />
        <ServicesPreview />
        <Customers />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
