import React from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactInfo: React.FC = () => {
  const { t } = useTranslation();
  
  const contactDetails = [
    {
      icon: <MapPin className="w-5 h-5 text-primary-blue" />,
      title: t('contact.info.address'),
      content: 'Bolivar 219, Int 102 Col. Obrera, Cuauhtémoc, 06800, CDMX, México'
    },
    {
      icon: <Phone className="w-5 h-5 text-primary-red" />,
      title: t('contact.info.phone'),
      content: '55 55 78 78 63'
    },
    {
      icon: <Mail className="w-5 h-5 text-primary-yellow" />,
      title: t('contact.info.email'),
      content: 'info@lbasianfood.com'
    },
    {
      icon: <Clock className="w-5 h-5 text-secondary-green" />,
      title: t('contact.info.hours'),
      content: t('contact.info.hoursValue')
    }
  ];

  return (
    <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-md p-8">
      <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6">
        {t('contact.info.title')}
      </h3>
      
      <div className="space-y-6">
        {contactDetails.map((item, index) => (
          <div key={index} className="flex">
            <div className="mr-4">{item.icon}</div>
            <div>
              <h4 className="font-medium text-neutral-800 dark:text-neutral-200 mb-1">{item.title}</h4>
              <p className="text-neutral-600 dark:text-neutral-400">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8">
        <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
          {t('contact.wholesale.title')}
        </h3>
        <p className="text-neutral-600 dark:text-neutral-400 mb-4">
          {t('contact.wholesale.content')}
        </p>
        <a 
          href="mailto:wholesale@lbasianfood.com" 
          className="inline-block bg-primary-blue hover:bg-blue-700 text-white py-2 px-4 rounded-md font-medium transition-colors"
        >
          {t('contact.wholesale.cta')}
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;