import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const WhatsAppButton: React.FC = () => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const { t } = useTranslation();
  
  const phoneNumber = '1234567890'; // Replace with actual WhatsApp number
  const defaultMessage = t('whatsapp.defaultMessage');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  const showTooltip = () => {
    setIsTooltipVisible(true);
    setTimeout(() => {
      setIsTooltipVisible(false);
    }, 5000); // Hide tooltip after 5 seconds
  };

  return (
    <div className="fixed bottom-8 right-8 z-40">
      {isTooltipVisible && (
        <div className="absolute bottom-16 right-0 bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-lg max-w-xs animate-fade-in">
          <button 
            onClick={() => setIsTooltipVisible(false)}
            className="absolute top-2 right-2 text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200"
            aria-label="Close tooltip"
          >
            <X size={16} />
          </button>
          <p className="text-neutral-800 dark:text-white text-sm">{t('whatsapp.message')}</p>
        </div>
      )}
      
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        onMouseEnter={showTooltip}
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle size={24} className="text-white" />
      </a>
    </div>
  );
};

export default WhatsAppButton;