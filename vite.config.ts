// vite.config.ts
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react()],

    // Must match the GitHub repo name
    // If you deploy to a different repo, change this to "/<repo-name>/"
    base: "/NeuroPilot-AICC/",

    // Expose safe public keys only
    define: {
      "process.env.API_KEY": JSON.stringify(env.VITE_API_KEY || ""),
    },

    resolve: {
      alias: {
        // Point "@" to src so imports like "@/assets/..." work
        "@": path.resolve(__dirname, "src"),
      },
    },

    build: {
      outDir: "dist",
      assetsDir: "assets",
      sourcemap: true,
    },
  };
});
