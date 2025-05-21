import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutSection: React.FC = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-20 bg-neutral-50 dark:bg-neutral-800">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          {/* Who We Are */}
          <motion.div 
            variants={itemVariants}
            className="bg-white dark:bg-neutral-900 rounded-lg shadow-md p-8 transform transition-transform hover:scale-105"
          >
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">{t('home.about.title')}</h3>
            <p className="text-neutral-600 dark:text-neutral-400">{t('home.about.content')}</p>
          </motion.div>

          {/* Our Mission */}
          <motion.div 
            variants={itemVariants}
            className="bg-white dark:bg-neutral-900 rounded-lg shadow-md p-8 transform transition-transform hover:scale-105"
          >
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">{t('home.mission.title')}</h3>
            <p className="text-neutral-600 dark:text-neutral-400">{t('home.mission.content')}</p>
          </motion.div>

          {/* Our Vision */}
          <motion.div 
            variants={itemVariants}
            className="bg-white dark:bg-neutral-900 rounded-lg shadow-md p-8 transform transition-transform hover:scale-105 md:col-span-2 lg:col-span-1"
          >
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">{t('home.vision.title')}</h3>
            <p className="text-neutral-600 dark:text-neutral-400">{t('home.vision.content')}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;