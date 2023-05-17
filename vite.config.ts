import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),svgr()],
  server:{
    port:3001
  },
  resolve:{
    alias:{
      '@components': '/src/components',
      '@pages':'/src/pages',
      '@assets':'/src/assets',
      '@':'/src',
    }
  }
})