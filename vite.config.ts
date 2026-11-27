import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { site } from "./src/config/site";

export default defineConfig({
  plugins: [react()],
  base: `${site.basePath}/`,
  build: {
    cssCodeSplit: true,
    reportCompressedSize: true,
    target: "es2020",
  },
});
