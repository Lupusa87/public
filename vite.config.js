import { defineConfig } from "vite";
import { LINKS } from "./src/links.js";

// Replaces {{links.some.path}} placeholders in HTML files with values from src/links.js.
function htmlLinks() {
  return {
    name: "html-links",
    transformIndexHtml: {
      order: "pre",
      handler(html) {
        return html.replace(/\{\{\s*links\.([\w.]+)\s*\}\}/g, (_, path) => {
          const value = path.split(".").reduce((obj, key) => obj?.[key], LINKS);
          if (typeof value !== "string") {
            throw new Error(`Unknown or non-string link placeholder: links.${path}`);
          }
          return value;
        });
      },
    },
  };
}

export default defineConfig({
  base: "/public/",
  plugins: [htmlLinks()],
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        support: "support.html",
      },
    },
  },
});
