import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      png: {
        quality: 50,
      },
      jpg: {
        quality: 50,
      },
    }),
  ],
  build: {
    manualChunks: {
      lodash: ['lodash'],
    }
  }
});
