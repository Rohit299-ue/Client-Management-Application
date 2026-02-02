import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    hmr: {
      overlay: false
    }
  },
  preview: {
    host: true,
    port: process.env.PORT || 4173,
    strictPort: false
  }
})
