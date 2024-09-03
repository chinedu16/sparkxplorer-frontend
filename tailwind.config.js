/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, #003B5C 0%, #036EAC 100%)',
      },
      height: {
        700: '700px'
      },
      colors: {
        'primary': '#4F46E5',
        'purple-one': "#EEF2FF",
        'gray-one': '#475569',
        'gray-two': '#1E293B',
        'gray-three': "#F8FAFC",
        'gray-four': "#E2E8F0",
        'gray-five': "#CBD5E1"
      },
      boxShadow: {
        'header': '2px 6px 4px 0px #00000040',
        'hero': '0px 7px 5.6px 0px #00000040',
        'button': '0px 4px 4px 0px #00000040',
        'card': '1px -2px 16.4px 0px #00000040',
      },
      borderRadius: {
        '66': '66px',
        '123': '123px'
      },
    },
  },
  
  plugins: [],
}

