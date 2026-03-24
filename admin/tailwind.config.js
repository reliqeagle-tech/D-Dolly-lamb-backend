// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         primary: "#3872fa",
//       },
//       backgroundColor:{
//         primary: "#3872fa"
//       }
//     },
//   },
//   plugins: [],
// }



// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//      "../myapp/src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         primary: "#3872fa",
//       },
//     },
//   },
//   plugins: [],
// }


// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  // ✅ REQUIRED — enables class-based dark mode (adds 'dark' class to <html>)
  darkMode: 'class',

  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    extend: {
      colors: {
        primary: '#6C63FF',
        'primary-dark': '#5A52E8',
      },
    },
  },

  plugins: [],
}