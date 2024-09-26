import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Login-singnup-with-react-nodjs/', // Ensure this matches your repository name
  build: {
    rollupOptions: {
      // If you have any other configurations, they go here
    }
  }
})
