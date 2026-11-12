import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/cyber-arena/', // ВАЖНО: пиши название своего репозитория на GitHub!
  build: {
    outDir: 'docs', // Vite теперь сам будет собирать всё в папку docs
    emptyOutDir: true // Будет очищать старую папку docs перед сборкой
  }
})