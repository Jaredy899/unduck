import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    VitePWA({
      registerType: "autoUpdate",
      manifest: false,
      includeAssets: ['search.svg', 'clipboard.svg', 'clipboard-check.svg', 'save.svg', 'check.svg'],
      manifestFilename: 'manifest.webmanifest',
      injectManifest: {
        injectionPoint: undefined
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg}']
      }
    }),
  ],
  build: {
    outDir: 'dist'
  }
});