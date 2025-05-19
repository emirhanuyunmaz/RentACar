import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  server: {
    host: true,       // Dışarıdan erişilebilsin diye
    port: 5173,        // Uygulamanın portu
    strictPort: true,  // Port kullanımında hata verdirir, değişiklik olmaz
    watch: {
      usePolling: true,
    },
  },

})
