import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),


  ViteImageOptimizer({
    png: {
      quality: 30,
    },
    jpg: {
      quality: 30,
    },
  }),],


})
