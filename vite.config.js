import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vue from '@vitejs/plugin-vue';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
  vue(),

  ViteImageOptimizer({
    png: {
      quality: 50,
    },
    jpg: {
      quality: 50,
    },
  }),],
  // base :"https://cutechsolutions.co.uk/"
  base: "https://cutechsolution.onrender.com/",
})
