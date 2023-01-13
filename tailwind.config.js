const { normalize } = require('path')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  // Ensure these match with .storybook/preview.js
  theme: {
    screens: {
      xs: '375px',
      sm: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1536px',
    },
    colors: {
      'primary-blue': '#1B4DB1',
      'primary-yellow' : '#F3F243',
      'primary-pink': '#FF64BC',
      'primary-black': '#000000',
      'primary-blackLight' : '#1A1E2E',
      'primary-grayDark': '#6E6A6C',
      'primary-gray' : '#A7A6A7',
      'primary-grayLight' : '#D9D9D9',
      'primary-grayLighter' : '#F8F7FA',
      'secondary-red' : '#EF3F47,'
    },
    fontFamily: {
      'h900-black' : ['Roboto', 'sans', 'black', 'xl', '56px'],
      'Roboto' : ['Roboto', 'sans'],
    },
    fontSize: {
    'h900': ['48px', 
            {
          lineHeight: '56px',
          fontWeight: '900',
            }],
    'h500-S' : ['16px',{
        lineHeight:'19px',
        fontWeight: '500'
      }],
    'h500-T':['24px',{
      lineHeight: '28px',
      fontWeight: '500'
    }],
    'h400':['16px',{
      lineHeight: '19px',
      fontWeight: '400'
    }], 
    'h600': ['20px',{
      lineHeight :'23px',
      fontWeight: '600',
    }],
    'h400-p': ['15px',{
      lineHeight: '18px',
      fontWeight: '400'
    }],
    'h500-p' : ['14px',{
      lineHeight: '16px',
      fontWeight: '500'
    }]
    },
    extend: {
      dropShadow: {
        'shadow': '0 2px 2px rgba(0, 0, 0, 0.25)',
      },
      backgroundImage: {
        'logo1': "url('/logo1.png')"
      }
  },
  plugins: [],
}

}