/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        '22': '22%',  // Custom width of 23%
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-gradient': {
          backgroundImage: 'linear-gradient(to right, #a78bfa, #ec4899)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        },
        '.border-gradient-solid-blue-pink': {
          backgroundImage: 'linear-gradient(to right, #a78bfa, #ec4899)',
          borderImage: 'linear-gradient(to right, #a78bfa, #ec4899)',
          borderImageSlice: '1',
        },
        '.border-radius-sm': { borderRadius: '.125rem' },
        '.border-radius-md': { borderRadius: '.25rem' },
        '.border-radius-lg': { borderRadius: '.5rem' },
        '.border-radius-xl': { borderRadius: '1rem' },
        // Add more border radius utilities as needed

        // Border gradient utilities with different border radius values
        '.border-gradient-radius-sm': {
          backgroundImage: 'linear-gradient(to right, #a78bfa, #ec4899)',
          borderImage: 'linear-gradient(to right, #a78bfa, #ec4899)',
          borderImageSlice: '1',
          borderRadius: '.125rem', // Small border radius
        },
        '.border-gradient-radius-md': {
          backgroundImage: 'linear-gradient(to right, #a78bfa, #ec4899)',
          borderImage: 'linear-gradient(to right, #a78bfa, #ec4899)',
          borderImageSlice: '1',
          borderRadius: '.25rem', // Medium border radius
        },
        '.border-gradient-radius-lg': {
          backgroundImage: 'linear-gradient(to right, #a78bfa, #ec4899)',
          borderImage: 'linear-gradient(to right, #a78bfa, #ec4899)',
          borderImageSlice: '1',
          borderRadius: '50%', // Large border radius
        },
        // Add more border gradient utilities with different border radius values as needed
      });
    },
  ],
};
