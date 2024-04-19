import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),

  ViteImageOptimizer({
    png: {
      quality: 10,
    },
    jpg: {
      quality: 10,
    },
    webp: { // Include webp optimization
      quality: 10,
    },
  }),],
})
