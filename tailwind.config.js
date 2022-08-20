/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        container: {
            center: true,
        },
        screens: {
            'ki': '400px',
            'xl': '1024px',
        },


        extend: {
            // backgroundImage: {
            //     'hero-pattern': "url('/images/header/05.png')"
            // },
        },
    },
    plugins: [],
}