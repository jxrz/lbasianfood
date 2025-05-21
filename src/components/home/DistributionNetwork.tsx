import React from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Globe, TruckIcon, Award } from 'lucide-react';

const DistributionNetwork: React.FC = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const features = [
    {
      icon: <Globe className="w-12 h-12 text-primary-blue" />,
      title: t('home.distribution.coverage'),
      description: 'Nationwide distribution network with strategic locations for efficient delivery.'
    },
    {
      icon: <TruckIcon className="w-12 h-12 text-primary-red" />,
      title: t('home.distribution.service'),
      description: 'Reliable logistics and flexible delivery options to meet your business needs.'
    },
    {
      icon: <Award className="w-12 h-12 text-primary-yellow" />,
      title: t('home.distribution.quality'),
      description: 'Temperature-controlled transport ensuring product quality from warehouse to delivery.'
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-neutral-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">
            {t('home.distribution.title')}
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            {t('home.distribution.content')}
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-8 text-center transform transition-transform hover:scale-105"
            >
              <div className="flex justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 flex justify-center">
          <img 
            src="https://images.pexels.com/photos/3989578/pexels-photo-3989578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Distribution Center" 
            className="rounded-lg shadow-lg max-w-full h-auto object-cover max-h-96"
          />
        </div>
      </div>
    </section>
  );
};

export default DistributionNetwork;