 /** @type {import('tailwindcss').Config} */
 export default {
    content: ["./src/**/*.{html,js}"],
    theme: {
        fontFamily:{
          serif : [ 'Poppins', 'serif'],
        },
        backgroundImage: {
          'hero-pattern': "url('images/Rectangle 2 (4).png')",
        },
      extend: {},
    },
    plugins: [],
  }