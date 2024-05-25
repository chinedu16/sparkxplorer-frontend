/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, #003B5C 0%, #036EAC 100%)',
      },
      colors: {
        'blue-one': '#EBFEFF',
        'blue-two': "#0F537A",
        'blue-three': '#0D9AEB',
        'blue-four': '#ECF1F0',
        'blue-five': '#F2FEFF',
        'blue-six': '#7C8DB5',
        'yellow-one': '#FFFBDB',
        'yellow-two': '#FFF5A1',
        'yellow-three': '#F6CF05',
        'gray-one': '#797B89',
        'gray-two': '#F5F5F5',
        'gray-three': '#FFFBFB',
        'pink-one': '#FFF5F7',
        'pink-two': '#E93B77',
        'yellow-one': '#FFFBDBB2',
        'orange-one': '#E17153',
        'green-one': '#EDFFEE',
        'green-two': '#63B967',
      },
      boxShadow: {
        'header': '2px 6px 4px 0px #00000040',
        'hero': '0px 7px 5.6px 0px #00000040',
        'button': '0px 4px 4px 0px #00000040',
        'card': '1px -2px 16.4px 0px #00000040',
      },
      borderRadius: {
        '66': '66px',
      },
    },
  },
  
  plugins: [],
}

