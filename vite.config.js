import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      css: {
        includePaths: ['./node_modules']
      }
    }
  },
  resolve: {
    alias: {
      'flag-icon-css': 'flag-icon-css/css/flag-icon.min.css'
    }
  }
})
