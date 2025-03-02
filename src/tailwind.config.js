module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        barlow: ['Barlow', 'sans-serif'],
        fraunces: ['Fraunces', 'serif'],
      },
      colors: {
        primary: {
          red: 'hsl(7, 99%, 70%)',
          yellow: 'hsl(51, 100%, 49%)',
          cyan: 'hsl(167, 40%, 24%)',
          blue: 'hsl(198, 62%, 26%)',
          footerCyan: 'hsl(168, 34%, 41%)',
        },
        neutral: {
          desaturatedBlue: 'hsl(212, 27%, 19%)',
          grayishBlue: 'hsl(213, 9%, 39%)',
          darkGrayishBlue: 'hsl(232, 10%, 55%)',
          lightGrayishBlue: 'hsl(210, 4%, 67%)',
          white: 'hsl(0, 0%, 100%)',
        },
      },
    },
  },
  plugins: [],
};
