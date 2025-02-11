import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/kpms', // Update this to match your repository name
  plugins: [react()],
  server: {
    host: true, // Allow access from external networks
    strictPort: false,
    allowedHosts: [
      "89a6-2401-4900-3671-ba5f-9e51-b756-847e-2b47.ngrok-free.app", // Add your ngrok URL
      ".ngrok-free.app" // Allow all ngrok subdomains
    ]
  }
});
