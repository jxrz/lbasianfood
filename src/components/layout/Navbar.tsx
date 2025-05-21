import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Moon, Sun, Menu, X, Globe } from 'lucide-react';
import Logo from '../../assets/icons/Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  
  const toggleLanguageMenu = () => setIsLanguageMenuOpen(!isLanguageMenuOpen);
  const closeLanguageMenu = () => setIsLanguageMenuOpen(false);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
    setIsDarkMode(!isDarkMode);
  };

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    closeLanguageMenu();
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [location]);

  const navLinks = [
    { path: '/lbasianfood', label: t('nav.home') },
    { path: '/wholesale', label: t('nav.wholesale') },
    { path: '/about', label: t('nav.about') },
    { path: '/contact', label: t('nav.contact') }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white dark:bg-neutral-900 shadow-md py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/lbasianfood" className="z-20">
          <Logo isDark={isDarkMode} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-medium transition-colors ${
                location.pathname === link.path 
                  ? 'text-primary-blue dark:text-primary-blue' 
                  : 'text-neutral-700 dark:text-neutral-200 hover:text-primary-blue dark:hover:text-primary-blue'
              }`}
            >
              {link.label}
            </Link>
          ))}
          
          <div className="relative">
            <button 
              className="flex items-center space-x-1 text-neutral-700 dark:text-neutral-200 hover:text-primary-blue dark:hover:text-primary-blue"
              onClick={toggleLanguageMenu}
            >
              <Globe size={18} />
              <span className="ml-1">{i18n.language === 'ko' ? '한국어' : 'English'}</span>
            </button>
            
            {isLanguageMenuOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-neutral-800 rounded-md shadow-lg py-1 z-30">
                <button 
                  className={`block w-full text-left px-4 py-2 text-sm ${i18n.language === 'es' ? 'bg-neutral-100 dark:bg-neutral-700' : 'hover:bg-neutral-100 dark:hover:bg-neutral-700'}`}
                  onClick={() => changeLanguage('es')}
                >
                  Español
                </button>
                <button 
                  className={`block w-full text-left px-4 py-2 text-sm ${i18n.language === 'en' ? 'bg-neutral-100 dark:bg-neutral-700' : 'hover:bg-neutral-100 dark:hover:bg-neutral-700'}`}
                  onClick={() => changeLanguage('en')}
                >
                  English
                </button>
                <button 
                  className={`block w-full text-left px-4 py-2 text-sm ${i18n.language === 'ko' ? 'bg-neutral-100 dark:bg-neutral-700' : 'hover:bg-neutral-100 dark:hover:bg-neutral-700'}`}
                  onClick={() => changeLanguage('ko')}
                >
                  한국어
                </button>
                
              </div>
            )}
          </div>

          <button 
            onClick={toggleDarkMode} 
            className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-800"
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>

        {/* Mobile Navigation Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <button 
            onClick={toggleDarkMode} 
            className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-800"
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          
          <button 
            className="text-neutral-800 dark:text-white z-20"
            onClick={toggleMenu}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`fixed inset-0 bg-white dark:bg-neutral-900 flex flex-col justify-center items-center space-y-8 z-10 transition-transform duration-300 ease-in-out transform ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } md:hidden`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-2xl font-medium ${
                location.pathname === link.path 
                  ? 'text-primary-blue' 
                  : 'text-neutral-700 dark:text-neutral-200'
              }`}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
          
          <div className="flex space-x-4">
            <button 
              className={`px-4 py-2 rounded-md ${i18n.language === 'en' ? 'bg-primary-blue text-white' : 'bg-neutral-100 dark:bg-neutral-800'}`}
              onClick={() => changeLanguage('en')}
            >
              English
            </button>
            <button 
              className={`px-4 py-2 rounded-md ${i18n.language === 'ko' ? 'bg-primary-blue text-white' : 'bg-neutral-100 dark:bg-neutral-800'}`}
              onClick={() => changeLanguage('ko')}
            >
              한국어
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;