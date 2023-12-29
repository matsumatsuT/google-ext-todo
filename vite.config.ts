import { defineConfig } from "vite";
import { crx } from "@crxjs/vite-plugin";
import manifest from "./manifest.json";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [
    crx({ manifest }),
    react({
      jsxImportSource: "@emotion/react",
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        popup: "src/popup/popup.html",
        options: "src/options/options.html",
      },
    },
  },
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
  //  WebSocket connection to 'ws://localhost/' failed:  というエラーの対策
  // https://github.com/crxjs/chrome-extension-tools/issues/746#issuecomment-1647484887
  server: {
    port: 5174,
    strictPort: true,
    hmr: {
      port: 5174,
    },
  },
});
