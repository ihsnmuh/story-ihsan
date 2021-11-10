module.exports = {
  important: true,
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Inter'],
    },
    extend: {
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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
