import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Login-singnup-with-react-nodjs/',
  build: {
    rollupOptions: {
      // If you have any other configurations, they go here
    }
  }
})
