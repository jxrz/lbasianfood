import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import SupplierSection from '../components/wholesale/SupplierSection';
import PdfViewer from '../components/wholesale/PdfViewer';

const Wholesale: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <>
      <Helmet>
        <title>Wholesale | LB Asian Food</title>
        <meta name="description" content="Browse our wholesale Korean food products. LB Asian Food offers premium Korean groceries for retailers, restaurants, and food service providers." />
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
                {t('wholesale.hero.title')}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-neutral-600 dark:text-neutral-300 mb-8"
              >
                {t('wholesale.hero.subtitle')}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <a 
                  href="#suppliers" 
                  className="inline-block bg-primary-blue hover:bg-blue-700 text-white py-3 px-8 rounded-lg font-medium transition-colors"
                >
                  {t('wholesale.hero.cta')}
                </a>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Introduction Section */}
        <section className="py-16 bg-white dark:bg-neutral-900">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6">
                  {t('wholesale.intro.title')}
                </h2>
                <p className="text-neutral-600 dark:text-neutral-400 mb-8">
                  {t('wholesale.intro.content')}
                </p>
                <a 
                  href="#catalog" 
                  className="text-primary-blue hover:text-blue-700 font-medium transition-colors"
                >
                  Browse our digital catalog →
                </a>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.pexels.com/photos/5945559/pexels-photo-5945559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Korean food products" 
                  className="rounded-lg h-64 object-cover" 
                />
                <img 
                  src="https://images.pexels.com/photos/2454533/pexels-photo-2454533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Korean products display" 
                  className="rounded-lg h-64 object-cover" 
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Suppliers Section */}
        <SupplierSection />
        
        {/* PDF Catalog Section */}
        <PdfViewer />
      </main>
    </>
  );
};

export default Wholesale;