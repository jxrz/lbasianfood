import React from 'react';
import { useTranslation } from 'react-i18next';
import { Heart, Award, Globe, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ValuesSection: React.FC = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const values = [
    {
      icon: <Award className="w-12 h-12 text-primary-blue" />,
      title: t('about.values.value1.title'),
      content: t('about.values.value1.content')
    },
    {
      icon: <Star className="w-12 h-12 text-primary-yellow" />,
      title: t('about.values.value2.title'),
      content: t('about.values.value2.content')
    },
    {
      icon: <Globe className="w-12 h-12 text-primary-red" />,
      title: t('about.values.value3.title'),
      content: t('about.values.value3.content')
    },
    {
      icon: <Heart className="w-12 h-12 text-secondary-red" />,
      title: t('about.values.value4.title'),
      content: t('about.values.value4.content')
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6 } 
    }
  };

  return (
    <section className="py-20 bg-neutral-50 dark:bg-neutral-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">
            {t('about.values.title')}
          </h2>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-neutral-900 rounded-lg shadow-md p-8 flex flex-col items-center text-center"
            >
              <div className="mb-6">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3">
                {value.title}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                {value.content}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ValuesSection;