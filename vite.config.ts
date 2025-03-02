import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Jared's Bang Search",
        short_name: "Bang Search",
        description: "A faster alternative to DuckDuckGo's bang redirects",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#4285f4",
        icons: [
          {
            src: "/search.svg",
            sizes: "192x192",
            type: "image/svg+xml"
          }
        ]
      },
      includeAssets: ['search.svg', 'clipboard.svg', 'clipboard-check.svg', 'save.svg', 'check.svg'],
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg}']
      }
    }),
  ],
  build: {
    outDir: 'dist'
  }
});