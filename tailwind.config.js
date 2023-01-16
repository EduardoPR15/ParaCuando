const { normalize } = require('path');

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
            'blue': '#1B4DB1',
            'primary-yellow': '#F3F243',
            'primary-pink': '#FF64BC',
            'black': '#000000',
            'primary-blackLight': '#1A1E2E',
            'primary-grayDark': '#6E6A6C',
            'primary-gray': '#A7A6A7',
            'primary-grayLight': '#D9D9D9',
            'primary-grayLighter': '#F8F7FA',
            'secondary-red': '#EF3F47,',
            'white': '#FFFFFF',
            "gray": "#A7A6A7"
        },
        fontFamily: {
            'h900-black': ['Roboto', 'sans', 'black', 'xl', '56px'],
            Roboto: ['Roboto', 'sans'],
        },
        fontSize: {
            xs: '0.75rem',

        },
        extend: {
            dropShadow: {
                shadow: '0 2px 2px rgba(0, 0, 0, 0.25)',
            },
            backgroundImage: {
                logo1: "url('/logo1.png')",
            },
            height: {
                '488': '30.5rem',
            },
            width: {
                '465': '29.063rem',
            },
            backgroundPosition: {
                '95%': '95%'
            }
        },
        plugins: [],
    },
};