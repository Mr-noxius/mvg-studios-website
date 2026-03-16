import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

// Custom Vite Plugin for Local CMS
function localCmsPlugin() {
  return {
    name: 'local-cms',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        // Intercept POST requests to /api/save-content
        if (req.url === '/api/save-content' && req.method === 'POST') {
          let body = '';
          req.on('data', chunk => {
            body += chunk.toString();
          });
          req.on('end', () => {
            try {
              const contentPath = path.resolve(__dirname, 'src/content.json');
              // Format the JSON with 2 spaces for readability
              fs.writeFileSync(contentPath, JSON.stringify(JSON.parse(body), null, 2));
              
              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: true, message: 'Content saved successfully!' }));
            } catch (error) {
              res.statusCode = 500;
              res.end(JSON.stringify({ success: false, error: error.message }));
            }
          });
          return;
        }
        next();
      });
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), localCmsPlugin()],
})
