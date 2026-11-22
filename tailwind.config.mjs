/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        cream: '#FAF7F2',
        sand: '#F2ECE1',
        terracotta: {
          DEFAULT: '#B85A3A',
          dark: '#96452A',
          light: '#D47B5D',
        },
        sage: {
          DEFAULT: '#4A6B53',
          dark: '#38523F',
          light: '#64876E',
        },
        charcoal: '#2C241E',
        warmgray: '#5C5248',
        whatsapp: {
          DEFAULT: '#25D366',
          dark: '#128C7E',
          ink: '#111B21',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
