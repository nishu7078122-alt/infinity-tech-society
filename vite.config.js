import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    allowedHosts: true
  },
  preview: {
    host: '0.0.0.0',
    port: 5000,
    allowedHosts: true
  },
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          three: ['three'],
          vendor: ['react', 'react-dom', 'framer-motion', 'lucide-react', 'canvas-confetti'],
        }
      }
    }
  }
})
