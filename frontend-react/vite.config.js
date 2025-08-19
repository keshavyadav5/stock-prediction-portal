import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from "path"

// https://vite.dev/config/
export default defineConfig({
    server: {
    strictPort: true, // Exit if the port is already in use
    port: 1920,
    // proxy: {
    //   "/api": "",
    // },
  },
  plugins: [
    react(),
    tailwindcss(),
  ],
   resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
