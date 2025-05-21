import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
   base: '/portfolio_replica_figma/',
    build: {
    outDir: 'docs' // 👈 output build to /docs
  },
  plugins: [react() , tailwindcss()],
})
