import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/the-nails-shop-horrem/',
  server: {
    port: 6055,
    host: true
  }
});
