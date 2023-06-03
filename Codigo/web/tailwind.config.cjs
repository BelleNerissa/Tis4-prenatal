/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './index.html',
        './src/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        fontSize: {
            xs: 14,
            sm: 16,
            md: 18,
            lg: 20,
            xl: 24,
            xxl: 32,
            '2xl': 42,
        },
        colors: {
            transparent: 'transparent',
            black: '#000',
            white: '#ffff',
            gray: {
                900: '#121214',
                800: '#202024',
                400: '#7C7C8A',
                200: '#C4C4CC',
                100: '#E1E1E6',
            },
            teal: {
                300: '#B4D9D9',
                500: '#2D9AA6',
            },
            gray: {
                500: '#D9D9D9'
            },
            pink: {
                900: '#F27983',
                500: '#F2A2A2',
                300: '#F6C9C9',
                50: '#FFF5F5',
            },
            brown: {
                900: '#592A37',
                500: '#592A37',
            }
        },
        extend: {
            boxShadow: {
                DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.08), 0 1px 2px 0 rgba(0, 0, 0, 0.02)',
                md: '0 4px 6px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.02)',
                lg: '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.01)',
                xl: '0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.01)',
            },
            outline: {
                blue: '2px solid rgba(0, 112, 244, 0.5)',
            },
            fontFamily: {
                inter: ['Inter', 'sans-serif'],
            },
            fontSize: {
                xs: ['0.75rem', { lineHeight: '1.5' }],
                sm: ['0.875rem', { lineHeight: '1.5715' }],
                base: ['1rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
                lg: ['1.125rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
                xl: ['1.25rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
                '2xl': ['1.5rem', { lineHeight: '1.33', letterSpacing: '-0.01em' }],
                '3xl': ['1.88rem', { lineHeight: '1.33', letterSpacing: '-0.01em' }],
                '4xl': ['2.25rem', { lineHeight: '1.25', letterSpacing: '-0.02em' }],
                '5xl': ['3rem', { lineHeight: '1.25', letterSpacing: '-0.02em' }],
                '6xl': ['3.75rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
            },
            screens: {
                xs: '480px',
            },
            borderWidth: {
                3: '3px',
            },
            minWidth: {
                36: '9rem',
                44: '11rem',
                56: '14rem',
                60: '15rem',
                72: '18rem',
                80: '20rem',
            },
            maxWidth: {
                '8xl': '88rem',
                '9xl': '96rem',
            },
            zIndex: {
                60: '60',
            },
        },
    },
    plugins: [],
}