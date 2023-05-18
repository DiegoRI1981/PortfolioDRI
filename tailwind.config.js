/** @type {import('tailwindcss').Config} */

const { gray } = require('color-name');

const plugin = require('tailwindcss/plugin')
const rotateY = plugin(function ({ addUtilities }) {
    addUtilities({
        '.rotate-y-180': {
            transform: 'rotateY(180deg)'
        },
        '.-rotate-y-180': {
            transform: 'rotateY(-180deg)'
        },
    })
})

module.exports = {
    mode: 'jit',
    purge: ['./**/*.html', './**/*.{js,jsx,ts,tsx,vue}'],
    content: [
        "./**/*.{html,js}",
    ],

    theme: {

        colors: {
            "color-primary": '#202020',
            "color-primary-dark": "#000000",
            "color-secondary": "#ffaf00",
            "color-secondary-light": "#f1b805",
            "color-gray": "#333",
            "color-white": "#fff",
            "color-envelope": "#ff0000",
            "color-primary-light": "#ecedf0",
        },

        container: {
            center: true,
            padding: {
                DEFAULT: '20px',
                md: "50px"
            },
        },
    },
    plugins: [
        plugin,
        rotateY,
    ],
}