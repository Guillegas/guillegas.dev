import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // AÑADIMOS ESTA SECCIÓN PARA ELIMINAR EL ERROR
  build: {
    rollupOptions: {
      external: [
        // Excluimos las dependencias problemáticas
        '@vercel/analytics', 
        'next/navigation' 
      ],
    },
  },
})