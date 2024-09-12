/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/containers/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'muted': "#536079",
        "muted-50": "#222A3B",
        "loozr-purple": "#8369F4",
        "loozr-green": "#15FFAB",
        "dark-900": "#0C0F15",
        "dark-800": "#12161F",
        "dark-700": "#141922",
        "dark-600": "rgba(98, 192, 255, 0.13)",
        "new-100": "rgba(243, 236, 78, 0.1)",
        'new-200': 'rgba(83, 96, 121, 0.2)',
        "white-40": "rgba(255, 255, 255, 0.4)",
      },
      backgroundImage: {
        "gradient-ld":
          "linear-gradient(180.44deg, #8369F4 27.17%, #F039E2 156.68%)",
        "gradient-ldd":
          "linear-gradient(180.44deg, rgba(131, 105, 244, 0.4) 27.17%, rgba(240, 57, 226, 0.4) 156.68%)",
        "s-gradient":
          "linear-gradient(180deg, #8369F4 27.69%, #F039E2 178.46%)",
        "g-gradient":
          "linear-gradient(90deg, #F039E2 0%, #8369F4 100%)",
      },
      fontSize: {
        label: ["3.5rem", 1],
      },
      // screens: {
      //   sm: '640px',
      //   md: '768px',
      //   lg: '1024px',
      //   xl: '1360px',
      //   '2xl': '1536px',
      // },
    },
  },
  plugins: [],
};
