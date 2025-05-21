import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../../assets/icons/Logo';
import { ExternalLink } from 'lucide-react';

interface WelcomeModalProps {
  onClose: () => void;
}

const WelcomeModal: React.FC<WelcomeModalProps> = ({ onClose }) => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300); // Match duration of exit animation
  };

  const goToStore = () => {
    window.open('https://asiaonmart.com/', '_blank');
    handleClose();
  };

  const stayOnSite = () => {
    handleClose();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="bg-white dark:bg-neutral-800 rounded-xl p-8 max-w-md w-full shadow-2xl"
          >
            <div className="flex justify-center mb-6">
              <Logo className="text-2xl" />
            </div>
            
            <h2 className="text-2xl font-bold text-center text-neutral-900 dark:text-white mb-6">
              {t('welcome.title')}
            </h2>
            
            <p className="text-neutral-600 dark:text-neutral-300 text-center mb-8">
              {t('welcome.question')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={stayOnSite}
                className="flex-1 bg-primary-blue hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition-colors"
              >
                {t('welcome.website')}
              </button>
              
              <button
                onClick={goToStore}
                className="flex-1 bg-white dark:bg-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-600 text-neutral-800 dark:text-white border border-neutral-300 dark:border-neutral-600 py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
              >
                {t('welcome.store')}
                <ExternalLink size={16} className="ml-2" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeModal;