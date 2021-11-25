module.exports = {
  purge: {
    enabled: process.env.HUGO_ENVIRONMENT === "production",
    content: ["./layouts/**/*.html"],
    options: {
      safelist: [],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        "open-sans": ["Open Sans", "sans-serif"],
        "play-fair": ["Playfair Display", "serif"]
      },
      backgroundImage: {
        "banner-home-sm": 'url("/images/home/banner-home.jpg")',
        "banner-home-lg": 'url("/images/home/banner-home@2x.jpg")',
      },
      colors: {
        "blue": "#458AC8",
        "blue-dark": "#476899",
        "blue-dark-2": "#13385C",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
