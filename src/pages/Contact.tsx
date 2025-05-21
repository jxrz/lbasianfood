import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <>
      <Helmet>
        <title>Contact Us | LB Asian Food</title>
        <meta name="description" content="Get in touch with LB Asian Food. Contact us for inquiries about our Korean food products, wholesale opportunities, and more." />
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
                {t('contact.hero.title')}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-neutral-600 dark:text-neutral-300"
              >
                {t('contact.hero.subtitle')}
              </motion.p>
            </div>
          </div>
        </section>
        
        {/* Contact Form and Info Section */}
        <section className="py-16 bg-neutral-50 dark:bg-neutral-800">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <ContactForm />
              </div>
              <div>
                <ContactInfo />
              </div>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="py-16 bg-white dark:bg-neutral-900">
          <div className="container mx-auto px-4">
            <div className="rounded-lg overflow-hidden shadow-md h-96">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.8276148489317!2d-99.14344762389747!3d19.41985284108613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ffb29951aa35%3A0xfb42c00cf3ca36f3!2sLB%20Asian%20Food!5e0!3m2!1ses-419!2smx!4v1747866140749!5m2!1ses-419!2smx" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                title="LB Asian Food Location"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;