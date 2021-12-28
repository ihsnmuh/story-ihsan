const { spacing } = require('tailwindcss/defaultTheme');

module.exports = {
  important: true,
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    // fontFamily: {
    //   sans: ['Inter'],
    // },
    extend: {
      // typography: (theme) => ({
      //   DEFAULT: {
      //     css: {
      //       color: theme('colors.gray.700'),
      //       a: {
      //         color: theme('colors.blue.500'),
      //         '&:hover': {
      //           color: theme('colors.blue.700'),
      //         },
      //         code: { color: theme('colors.blue.400') },
      //       },
      //       'h2,h3,h4': {
      //         'scroll-margin-top': spacing[32],
      //       },
      //       code: { color: theme('colors.pink.500') },
      //       'blockquote p:first-of-type::before': false,
      //       'blockquote p:last-of-type::after': false,
      //     },
      //   },
      //   dark: {
      //     css: {
      //       color: theme('colors.gray.300'),
      //       a: {
      //         color: theme('colors.blue.400'),
      //         '&:hover': {
      //           color: theme('colors.blue.600'),
      //         },
      //         code: { color: theme('colors.blue.400') },
      //       },
      //       blockquote: {
      //         borderLeftColor: theme('colors.gray.700'),
      //         color: theme('colors.gray.300'),
      //       },
      //       'h2,h3,h4': {
      //         color: theme('colors.gray.100'),
      //         'scroll-margin-top': spacing[32],
      //       },
      //       hr: { borderColor: theme('colors.gray.700') },
      //       ol: {
      //         li: {
      //           '&:before': { color: theme('colors.gray.500') },
      //         },
      //       },
      //       ul: {
      //         li: {
      //           '&:before': { backgroundColor: theme('colors.gray.500') },
      //         },
      //       },
      //       strong: { color: theme('colors.gray.300') },
      //       thead: {
      //         color: theme('colors.gray.100'),
      //       },
      //       tbody: {
      //         tr: {
      //           borderBottomColor: theme('colors.gray.700'),
      //         },
      //       },
      //     },
      //   },
      // }),
      fontFamily: {
        sans: ['Inter'],
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      backgroundImage: {
        portofolio: "url('/image/bg-portofolio.jpg')",
      },
      colors: { blue: { 'default-blue': '#2867B2' }, dark: '#222222' },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
