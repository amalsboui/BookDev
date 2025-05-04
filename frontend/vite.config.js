import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from'@tailwindcss/vite'
import eslint from "vite-plugin-eslint";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(),
    eslint({
      cache: false, 
      overrideConfig: {
        settings: {
          react: { version: '18.3.1' } 
        }
      }
    })
  ],
  server: {
    host: true, // listen on all interfaces
    allowedHosts: ['bookish.local'], 
  },
})