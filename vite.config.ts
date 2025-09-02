import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  appType: "spa", // 👈 this tells Vite to fallback to index.html for unknown routes
});
