import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/MyBlog/",
  build: {
    cssCodeSplit: true,
    reportCompressedSize: true,
    target: "es2020",
  },
});
