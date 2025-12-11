import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // 1. OPTIMIZE DEPS: Evita que Vite procese y pre-bundle este paquete en desarrollo.
  optimizeDeps: {
    exclude: ['@vercel/analytics'] 
  },

  // 2. BUILD OPTIONS: Asegura que Rollup (el bundler) ignore las dependencias de Next.js.
  build: {
    rollupOptions: {
      external: [
        '@vercel/analytics', 
        'next/navigation' 
      ],
    },
  },
})