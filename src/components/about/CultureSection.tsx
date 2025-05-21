import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink } from 'lucide-react';

const CultureSection: React.FC = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 bg-white dark:bg-neutral-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">
              {t('about.culture.title')}
            </h2>
            <h3 className="text-xl text-neutral-700 dark:text-neutral-300 mb-6">
              {t('about.culture.subtitle')}
            </h3>
            <div className="space-y-4">
              <p className="text-neutral-600 dark:text-neutral-400">
                {t('about.culture.content1')}
              </p>
              <p className="text-neutral-600 dark:text-neutral-400">
                {t('about.culture.content2')}
              </p>
            </div>
            <a 
              href="https://en.wikipedia.org/wiki/Korean_cuisine" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary-blue hover:underline mt-6"
            >
              {t('about.culture.learn')}
              <ExternalLink size={16} className="ml-1" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <img 
                src="https://images.pexels.com/photos/2313682/pexels-photo-2313682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Korean Food" 
                className="rounded-lg h-48 w-full object-cover"
              />
              <img 
                src="https://images.pexels.com/photos/1630495/pexels-photo-1630495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Kimchi" 
                className="rounded-lg h-32 w-full object-cover"
              />
            </div>
            <div className="space-y-4">
              <img 
                src="https://images.pexels.com/photos/6249404/pexels-photo-6249404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Korean Dishes" 
                className="rounded-lg h-32 w-full object-cover"
              />
              <img 
                src="https://images.pexels.com/photos/5835353/pexels-photo-5835353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Traditional Korean Meal" 
                className="rounded-lg h-48 w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CultureSection;