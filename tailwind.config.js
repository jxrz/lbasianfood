/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#0074C1',
          red: '#E63946',
          yellow: '#FFB703',
          light: '#F8F9FA',
          dark: '#212529'
        },
        secondary: {
          blue: '#4895EF',
          red: '#FF758F',
          yellow: '#FFC971',
          green: '#52B788',
          purple: '#7678ED'
        },
        success: {
          light: '#D1FAE5',
          DEFAULT: '#10B981',
          dark: '#065F46'
        },
        warning: {
          light: '#FEF3C7',
          DEFAULT: '#F59E0B',
          dark: '#B45309'
        },
        error: {
          light: '#FEE2E2',
          DEFAULT: '#EF4444',
          dark: '#B91C1C'
        },
        neutral: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A'
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
        'float': 'float 3s ease-in-out infinite'
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      }
    },
  },
  plugins: [],
};