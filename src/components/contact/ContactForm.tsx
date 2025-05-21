import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Send, Check, X } from 'lucide-react';

const ContactForm: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate form submission with delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In a real implementation, you would send this to a server
      console.log('Form submitted:', formData);
      
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        business: '',
        message: ''
      });
      
      // Reset form status after 5 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    } catch (error) {
      setFormStatus('error');
      
      // Reset error status after 5 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-md p-8">
      {formStatus === 'success' ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center justify-center py-8"
        >
          <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mb-4">
            <Check size={32} className="text-white" />
          </div>
          <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
            {t('contact.form.success')}
          </h3>
        </motion.div>
      ) : formStatus === 'error' ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center justify-center py-8"
        >
          <div className="w-16 h-16 bg-error rounded-full flex items-center justify-center mb-4">
            <X size={32} className="text-white" />
          </div>
          <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
            {t('contact.form.error')}
          </h3>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                {t('contact.form.name')} *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded-md focus:ring-2 focus:ring-primary-blue focus:border-transparent bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                {t('contact.form.email')} *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded-md focus:ring-2 focus:ring-primary-blue focus:border-transparent bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                {t('contact.form.phone')}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded-md focus:ring-2 focus:ring-primary-blue focus:border-transparent bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white"
              />
            </div>
            
            <div>
              <label htmlFor="business" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                {t('contact.form.business')}
              </label>
              <input
                type="text"
                id="business"
                name="business"
                value={formData.business}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded-md focus:ring-2 focus:ring-primary-blue focus:border-transparent bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
              {t('contact.form.message')} *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded-md focus:ring-2 focus:ring-primary-blue focus:border-transparent bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white resize-none"
            ></textarea>
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className={`flex items-center justify-center w-full py-3 px-6 rounded-md font-medium transition-colors ${
              isSubmitting 
                ? 'bg-neutral-400 cursor-not-allowed text-white' 
                : 'bg-primary-blue hover:bg-blue-700 text-white'
            }`}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </>
            ) : (
              <>
                <Send size={18} className="mr-2" />
                {t('contact.form.submit')}
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;