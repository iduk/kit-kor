import { sentryVitePlugin } from "@sentry/vite-plugin"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react-swc"
import path from "path"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    sentryVitePlugin({
      org: "iduk",
      project: "iduk",
      sourcemaps: {
        assets: "./dist/**",
        filesToDeleteAfterUpload: ["./dist/**/*.map"], // 업로드 후 .map 제거
      },
    }),
  ],

  server: {
    hmr: true, // 수정된 부분만 빠르게 반영 (Hot Module Replacement)
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom"], // 중복된 React 및 ReactDOM 모듈 제거
  },

  build: {
    sourcemap: true,
  },
})
