import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

export default defineConfig({
  root: "src",
  base: "/phonics/",
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "src/index.html"),
        contact: resolve(__dirname, "src/contact.html"),
        cources: resolve(__dirname, "src/courses.html"),
        resources: resolve(__dirname, "src/Resources.html"),
        workshops: resolve(__dirname, "src/workshops.html"),
        biggnerdetails: resolve(__dirname, "src/biggner-details.html"),
        advanceddetails: resolve(__dirname, "src/Advanced-details.html"),
        Intermediatedetails: resolve(
          __dirname,
          "src/Intermediate-details.html"
        ),
      },
    },
  },

  plugins: [tailwindcss()],
});
