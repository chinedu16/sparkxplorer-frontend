/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient": "linear-gradient(180deg, #003B5C 0%, #036EAC 100%)",
      },
      height: {
        700: "700px",
      },
      colors: {
        "blue-violet": {
          50: "#efeeff",
          100: "#E0E7FF",
          200: "#cac7fe",
          300: "#aaa5fc",
          400: "#8881f8",
          500: "#6b63f1",
          600: "#4f46e5",
          700: "#4038ca",
          800: "#3730a3",
          900: "#332e81",
          950: "#1e1b4b",
        },
        "primary-foreground": "#190634",
        primary: "#4F46E5",
        "purple-one": "#EEF2FF",
        "gray-one": "#475569",
        "gray-two": "#1E293B",
        "gray-three": "#F8FAFC",
        "gray-four": "#E2E8F0",
        "gray-five": "#CBD5E1",
      },
      boxShadow: {
        header: "2px 6px 4px 0px #00000040",
        hero: "0px 7px 5.6px 0px #00000040",
        button: "0px 4px 4px 0px #00000040",
        card: "1px -2px 16.4px 0px #00000040",
      },
      borderRadius: {
        66: "66px",
        123: "123px",
      },
    },
  },

  plugins: [],
};
