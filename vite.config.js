import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: ".dist", // Ensure the build goes into .dist folder
    cssCodeSplit: true,
  },
  css: {
    postcss: './postcss.config.js',
  },
});
