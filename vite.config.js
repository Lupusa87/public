import { defineConfig } from "vite";

export default defineConfig({
  base: "/public/",
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        support: "support.html",
      },
    },
  },
});
