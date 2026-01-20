import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

// =========================
// Robust __dirname for ESM
// =========================
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [
    react(),                // React support
    runtimeErrorOverlay(),  // Nice dev error overlay
  ],
  
  // =========================
  // Base path for production
  // =========================
  base: "/", // Must match Express static prefix

  // =========================
  // Path aliases for imports
  // =========================
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },

  // =========================
  // Root of frontend source
  // =========================
  root: path.resolve(__dirname, "client"),

  // =========================
  // Build output
  // =========================
  build: {
    outDir: path.resolve(__dirname, "dist"), // Output goes to project-root/dist
    emptyOutDir: true,                        // Clear old builds
    sourcemap: true,                          // Optional: helpful for debugging
    rollupOptions: {
      // Optional: prevent asset path issues
      input: path.resolve(__dirname, "client", "index.html"),
      output: {
        assetFileNames: "assets/[name]-[hash][extname]",
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js",
      },
    },
  },

  // =========================
  // Dev server options
  // =========================
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"], // Prevent access to hidden files
    },
    port: 5173,        // Optional: default Vite port
    open: true,        // Automatically open browser in dev
  },
});
