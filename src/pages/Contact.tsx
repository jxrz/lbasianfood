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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.5735199155853!2d126.9762378768309!3d37.57124812619176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca2ffd3aa0985%3A0xc3a4acd4a8481d17!2sJongno-gu%2C%20Seoul%2C%20South%20Korea!5e0!3m2!1sen!2sus!4v1625234567890!5m2!1sen!2sus" 
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