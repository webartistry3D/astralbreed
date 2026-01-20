import express, { type Express } from "express";
import fs from "fs";
import path from "path";
import { createServer as createViteServer, createLogger } from "vite";
import { type Server } from "http";
import viteConfig from "../vite.config";
import { nanoid } from "nanoid";

const viteLogger = createLogger();

/**
 * Simple timestamped logger for server
 */
export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  console.log(`${formattedTime} [${source}] ${message}`);
}

/**
 * Development mode: setup Vite middleware for HMR and live reload
 */
export async function setupVite(app: Express, server: Server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true as const,
  };

  const vite = await createViteServer({
    ...viteConfig,
    configFile: false, // already imported
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      },
    },
    server: serverOptions,
    appType: "custom",
  });

  // Use Vite middleware
  app.use(vite.middlewares);

  // SPA fallback for all routes
  app.use("*", async (req, res, next) => {
    const url = req.originalUrl;

    try {
      const clientTemplate = path.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html"
      );

      if (!fs.existsSync(clientTemplate)) {
        throw new Error(`Could not find index.html: ${clientTemplate}`);
      }

      // Always reload the index.html file from disk
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );

      // Ensure HTML is never cached in dev
      res.set("Cache-Control", "public, max-age=0, must-revalidate");

      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
}

/**
 * Production mode: serve static assets and SPA fallback
 */
export function serveStatic(app: Express) {
  // Point to Vite build output
  const distPath = path.resolve(import.meta.dirname, "../dist");

  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }

  // Serve static assets under /astralbreed (matches vite.config.ts base)
  app.use(
    "/astralbreed",
    express.static(distPath, {
      maxAge: "30d",
      etag: false,
      setHeaders: (res, filePath) => {
        if (filePath.endsWith(".css")) res.setHeader("Content-Type", "text/css");
        if (filePath.endsWith(".js")) res.setHeader("Content-Type", "application/javascript");
        if (filePath.endsWith(".html")) res.setHeader("Content-Type", "text/html");
      },
    })
  );

  // SPA fallback for any route under /astralbreed
  app.get("/*", (_req, res) => {
    res.set("Cache-Control", "public, max-age=0, must-revalidate");
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}
