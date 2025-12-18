import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/ALX-FE-Capstone-Project-Weather_Dashboard/"
});