import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.VITE_BASE || "/my-portfolio_003/",
  plugins: [react()],
  build: {
    outDir: "build",
  },
});
