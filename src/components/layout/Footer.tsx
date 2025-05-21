import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';
import Logo from '../../assets/icons/Logo';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [subscriptionStatus, setSubscriptionStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // In a real implementation, you would send this to a server
      console.log(`Subscribing email: ${email}`);
      setSubscriptionStatus('success');
      setEmail('');
      setTimeout(() => setSubscriptionStatus('idle'), 3000);
    }
  };

  const footerSections = [
    {
      title: t('footer.company'),
      links: [
        { label: t('nav.home'), href: '/' },
        { label: t('nav.about'), href: '/about' },
        { label: t('footer.services'), href: '/services' },
        { label: t('nav.contact'), href: '/contact' }
      ]
    },
    {
      title: t('footer.products'),
      links: [
        { label: t('footer.suppliers'), href: '/wholesale#suppliers' },
        { label: t('footer.wholesale'), href: '/wholesale' },
        { label: t('footer.catalog'), href: '/wholesale#catalog' }
      ]
    },
    {
      title: t('footer.support'),
      links: [
        { label: t('footer.privacy'), href: '/privacy' },
        { label: t('footer.terms'), href: '/terms' }
      ]
    }
  ];

  return (
    <footer className="bg-neutral-100 dark:bg-neutral-900 pt-16 pb-8">
      {/* Main Footer */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and About */}
          <div className="lg:col-span-2">
            <Logo isDark={false} className="mb-4" />
            <p className="text-neutral-600 dark:text-neutral-400 mb-4 max-w-sm">
              Premier distributor of authentic Korean food products, connecting global markets with the rich flavors of Korean cuisine.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-primary-blue dark:text-neutral-400 dark:hover:text-primary-blue transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-primary-blue dark:text-neutral-400 dark:hover:text-primary-blue transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-primary-blue dark:text-neutral-400 dark:hover:text-primary-blue transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Navigation Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-neutral-800 dark:text-white mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      to={link.href} 
                      className="text-neutral-600 hover:text-primary-blue dark:text-neutral-400 dark:hover:text-primary-blue transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-neutral-800 dark:text-white mb-4">{t('footer.subscribe.title')}</h3>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('footer.subscribe.placeholder')}
                  className="px-4 py-2 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary-blue flex-grow"
                  required
                />
                <button
                  type="submit"
                  className="bg-primary-blue text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition-colors"
                >
                  <Mail size={20} />
                </button>
              </div>
              {subscriptionStatus === 'success' && (
                <p className="text-success dark:text-success-light text-sm">{t('footer.subscribe.success')}</p>
              )}
              {subscriptionStatus === 'error' && (
                <p className="text-error dark:text-error-light text-sm">{t('footer.subscribe.error')}</p>
              )}
            </form>
          </div>
        </div>

        <hr className="my-8 border-neutral-200 dark:border-neutral-700" />

        {/* Secondary Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4 md:mb-0">
            {t('footer.copyright')}
          </p>
          <div className="flex space-x-6">
            <Link 
              to="/privacy" 
              className="text-neutral-600 hover:text-primary-blue dark:text-neutral-400 dark:hover:text-primary-blue transition-colors text-sm"
            >
              {t('footer.privacy')}
            </Link>
            <Link 
              to="/terms" 
              className="text-neutral-600 hover:text-primary-blue dark:text-neutral-400 dark:hover:text-primary-blue transition-colors text-sm"
            >
              {t('footer.terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;