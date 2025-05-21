import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import Hero from '../components/home/Hero';
import AboutSection from '../components/home/AboutSection';
import InfiniteCarousel from '../components/home/InfiniteCarousel';
import DistributionNetwork from '../components/home/DistributionNetwork';

const Home: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <>
      <Helmet>
        <title>LB Asian Food | Korean Grocery Distribution</title>
        <meta name="description" content="LB Asian Food is a premier distributor of authentic Korean groceries and food products. Discover the rich flavors of Korean cuisine." />
      </Helmet>
      
      <main>
        <Hero />
        <AboutSection />
        <InfiniteCarousel />
        <DistributionNetwork />
      </main>
    </>
  );
};

export default Home;