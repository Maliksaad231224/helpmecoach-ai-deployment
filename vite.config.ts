import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import sourceIdentifierPlugin from 'vite-plugin-source-info'

const isProd = process.env.BUILD_MODE === 'prod'
export default defineConfig({
  plugins: [
    react(), 
    sourceIdentifierPlugin({
      enabled: !isProd,
      attributePrefix: 'data-matrix',
      includeProps: true,
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    // Enable CORS for all origins during development
    cors: true,
    headers: {
      // Allow all user agents and crawlers
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': '*',
      // Explicitly allow bot and crawler access
      'X-Robots-Tag': 'index, follow, all',
      'X-Bot-Access': 'unrestricted',
      'X-Crawl-Permission': 'allow'
    }
  },
  build: {
    // Ensure build outputs are accessible
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        // Generate readable file names for better crawling
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]'
      }
    }
  },
  preview: {
    // Enable CORS for preview mode
    cors: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'X-Robots-Tag': 'index, follow, all'
    }
  }
})

