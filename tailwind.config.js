module.exports = {
  content: ['index.html', './src/**/*.{js,jsx,ts,tsx,vue,html}'],
  theme: {
    extend: {
      keyframes: {
        fadeInTopBottom: {
          '0%': {
            opacity: 0,
            transform: 'translateY(-20%)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        fadeInTopBottom: 'fadeInTopBottom 0.5s',
      },
    },
  },
  plugins: [],
};
