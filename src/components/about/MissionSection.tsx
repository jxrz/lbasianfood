import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const MissionSection: React.FC = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-white dark:bg-neutral-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-2">
            {t('about.mission.title')}
          </h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-8"
          >
            <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">
              {t('about.mission.missionTitle')}
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400">
              {t('about.mission.missionContent')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-8"
          >
            <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">
              {t('about.mission.visionTitle')}
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400">
              {t('about.mission.visionContent')}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;