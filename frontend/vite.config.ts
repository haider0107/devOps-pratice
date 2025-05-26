import { defineConfig } from "vitest/config"; // 👈 Use vitest's defineConfig
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
});
