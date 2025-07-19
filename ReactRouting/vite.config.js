import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
<<<<<<< HEAD
  base: "/React/ReactRouting/",
=======
  base: '/React/',
>>>>>>> 5e042a618163cda954c8b51c389d4c68dad3d900
});
