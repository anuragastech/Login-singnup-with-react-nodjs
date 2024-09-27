import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Login-singnup-with-react-nodjs/', // GitHub Pages base URL
  build: {
    rollupOptions: {
      // Any additional Rollup configuration
    }
  }
})
