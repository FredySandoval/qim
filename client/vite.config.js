import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: '../server/dist/public',
    emptyOutDir: true,
  },
  plugins: [vue()],
  server: {
    proxy: {
      '/upload': 'http://127.0.0.1:3000/',
      '/files': 'http://127.0.0.1:3000/',
      '/edit': 'http://127.0.0.1:3000/',
      '/delete': 'http://127.0.0.1:3000/',
      '/download': 'http://127.0.0.1:3000/',
      '/images': 'http://127.0.0.1:3000/',
    }
  }
})
