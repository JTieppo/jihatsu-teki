/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "card-gradient": 'linear-gradient(99deg, rgba(0, 64, 47, 0.20) 5.57%, rgba(0, 138, 101, 0.20) 97.4%)',
        "card-green":'rgba(0, 157, 61, 0.40)',
        "white-gradient": 'linear-gradient(93deg, rgba(255, 255, 255, 0.90) 1.99%, #D0D0D0 30.64%, rgba(208, 208, 208, 0.60) 100.27%)'

      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.white-gradient': {
          'background-clip': 'text',
          '-webkit-background-clip': 'text',
          'color': 'transparent',
        },
      });
    },
  ],
};
