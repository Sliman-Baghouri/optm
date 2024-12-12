module.exports = {
  content: [
    /* relevant files from the blog + theme */
    "../../content/**/*.{html,md}",
    "../../layouts/**/*.html",

    /* relevant files from the theme */
    "./layouts/**/*.html",

    /* also pick nested css from theme */
    "../../assets/css/*.css",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Inter', 'sans-serif'], // Default font for body
        heading: ['DM Sans', 'sans-serif'], // Font for headings
      },
      colors: {
        primary: {
          DEFAULT: "#05747A", // Default shade
          light: "#E6F5F6", // Lighter shade
          dark: "#DADADA",
        },
        accent: {
          DEFAULT: "#E6F5F6",
        },
      },
    },
  },
};
