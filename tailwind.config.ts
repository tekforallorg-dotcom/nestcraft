import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#05374D',
          dark: '#022835',
          light: '#0A5170',
        },
        accent: {
          DEFAULT: '#A28458',
          dark: '#8A6D42',
          light: '#C5A577',
        },
        paper: {
          DEFAULT: '#F0EDE8',
          dark: '#E8E3DC',
          light: '#F8F6F2',
        },
        secondary: {
          DEFAULT: '#2B5364',
          dark: '#1F3D4C',
          light: '#3F6A7E',
        },
        slate: {
          DEFAULT: '#5B5B5C',
          dark: '#2F3234',
        },
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        soft: '0 4px 16px rgba(5, 55, 77, 0.08)',
        'soft-lg': '0 8px 32px rgba(5, 55, 77, 0.12)',
      },
    },
  },
  plugins: [],
};

export default config;