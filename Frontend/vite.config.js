// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {port:5173}
// })




// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// export default defineConfig({
//   plugins: [react()],

//   server: {
//     port: 5173,
//   },

//   build: {
//     sourcemap: false,

//     cssCodeSplit: true,

//     chunkSizeWarningLimit: 1000,

//     rollupOptions: {
//       output: {
//         manualChunks: {
//           react: ["react", "react-dom"],
//           router: ["react-router-dom"],

//           swiper: ["swiper"],

//           icons: ["lucide-react"],

//           vendor: ["axios"],
//         },
//       },
//     },
//   },
// });


import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  server: {
    port: 5173,
  },

  build: {
    sourcemap: false,
    cssCodeSplit: true,
    chunkSizeWarningLimit: 1000,

    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            // Core React — chhota, har page pe chahiye
            if (id.includes("react-dom") || id.includes("/react/") || id.includes("react-is") || id.includes("scheduler")) {
              return "vendor-react";
            }
            if (id.includes("react-router-dom")) return "vendor-router";

            // Bhaari UI library — sirf jahan use ho wahi load ho
            if (id.includes("swiper")) return "vendor-swiper";

            // Icons — jo bhi abhi installed hain
            if (id.includes("lucide-react") || id.includes("react-icons")) {
              return "vendor-icons";
            }

            // Payment / notifications — sirf tab load hone chahiye jab zaroorat ho
            if (id.includes("@paypal")) return "vendor-paypal";
            if (id.includes("react-toastify")) return "vendor-toastify";
            if (id.includes("sonner")) return "vendor-sonner";

            // Utilities
            if (id.includes("axios")) return "vendor-axios";
            if (id.includes("jwt-decode")) return "vendor-jwt";
            if (id.includes("react-helmet-async")) return "vendor-helmet";

            // Koi bhi library jo upar match na ho — catch-all
            return "vendor-misc";
          }
        },
      },
    },
  },
});