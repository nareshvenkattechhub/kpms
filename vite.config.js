import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repoName = 'Kpmpp' // Your GitHub repository name

export default defineConfig({
  plugins: [react()],
  base: '', // Set base path for GitHub Pages
  build: {
    outDir: 'dist', // Default build directory
  },
})
