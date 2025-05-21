import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import MissionSection from '../components/about/MissionSection';
import ValuesSection from '../components/about/ValuesSection';
import CultureSection from '../components/about/CultureSection';

const About: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <>
      <Helmet>
        <title>About Us | LB Asian Food</title>
        <meta name="description" content="Learn about LB Asian Food, our mission, vision, and commitment to bringing authentic Korean food products to global markets." />
      </Helmet>
      
      <main>
        {/* Hero Section */}
        <section className="pt-28 pb-20 bg-gradient-to-b from-neutral-100 to-white dark:from-neutral-900 dark:to-neutral-800">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6"
              >
                {t('about.hero.title')}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-neutral-600 dark:text-neutral-300"
              >
                {t('about.hero.subtitle')}
              </motion.p>
            </div>
          </div>
        </section>
        
        {/* Mission and Vision Section */}
        <MissionSection />
        
        {/* Values Section */}
        <ValuesSection />
        
        {/* Korean Food Culture Section */}
        <CultureSection />
      </main>
    </>
  );
};

export default About;