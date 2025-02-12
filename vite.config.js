import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://lh3.googleusercontent.com/',
        changeOrigin: true,
        secure: false,
      }
    }
  }
});
