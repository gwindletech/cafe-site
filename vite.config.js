import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

const DEFAULT_OPTIONS = {
  test: /\.(jpe?g|png|gif|tiff|webp|svg|avif)$/i,
  exclude: undefined,
  include: undefined,
  includePublic: true,
  logStats: true,
  ansiColors: true,
  svg: {
    multipass: true,
    plugins: [
      {
        name: "preset-default",
        params: {
          overrides: {
            cleanupNumericValues: false,
            removeViewBox: false,
          },
          cleanupIDs: {
            minify: false,
            remove: false,
          },
          convertPathData: false,
        },
      },
      "sortAttrs",
      {
        name: "addAttributesToSVGElement",
        params: {
          attributes: [{ xmlns: "http://www.w3.org/2000/svg" }],
        },
      },
    ],
  },
  png: {
    quality: 30, // Adjusted quality to a lower value
  },
  jpeg: {
    quality: 75, // Adjusted quality to a lower value
  },
  jpg: {
    quality: 75, // Adjusted quality to a lower value
  },
  tiff: {
    quality: 75, // Adjusted quality to a lower value
  },
  gif: {},
  webp: {
    quality: 75, // Adjusted quality to a lower value
  },
  avif: {
    quality: 75, // Adjusted quality to a lower value
  },
  cache: false,
  cacheLocation: undefined,
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), ViteImageOptimizer(DEFAULT_OPTIONS)],
});
