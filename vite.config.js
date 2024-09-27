import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Login-singnup-with-react-nodjs/', // Important for GitHub Pages
})
