import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  chunkSizeWarningLimit: 1000,
  plugins: [react()],
})
