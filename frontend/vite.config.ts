import { defineConfig } from "vitest/config"; // 👈 Use vitest's defineConfig
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  define: {
    VITE_BACKEND_URL: JSON.stringify(process.env.VITE_BACKEND_URL),
  },
  server: {
    watch: {
      usePolling: true,
    },
    host: true,
    port: 5173,
    strictPort: true,
  },
});
