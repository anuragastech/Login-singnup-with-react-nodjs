import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Login-singnup-with-react-nodjs/',
  build: {
    rollupOptions: {
      external: ['/assets/index-5Aj7_fpE.js'], // Externalize the asset
    }
  }
})
