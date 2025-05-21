import React from 'react';

interface LogoProps {
  className?: string;
  isDark?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = '', isDark = false }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="6" cy="12" r="4" fill="#0074C1" />
        <circle cx="15" cy="8" r="4" fill="#E63946" />
        <circle cx="15" cy="16" r="4" fill="#FFB703" />
      </svg>
      <span className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-primary-dark'}`}>
        LB Asian Food
      </span>
    </div>
  );
};

export default Logo;