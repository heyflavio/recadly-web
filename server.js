'use strict';

/**
 * Recadly marketing site — minimal static server (node:http, no deps).
 *
 * Serves the prebuilt static site in ./public with clean URLs
 * (/privacy -> public/privacy.html). The landing page transpiles its JSX
 * in the browser via Babel standalone, so there is no build step —
 * this server only needs to hand out files.
 *
 * Hostinger (and most Node hosts) inject the port via process.env.PORT.
 */

const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = path.join(__dirname, 'public');

const CONTENT_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.css':  'text/css; charset=UTF-8',
  '.js':   'application/javascript; charset=UTF-8',
  '.jsx':  'application/javascript; charset=UTF-8',
  '.json': 'application/json; charset=UTF-8',
  '.txt':  'text/plain; charset=UTF-8',
  '.svg':  'image/svg+xml',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.ico':  'image/x-icon',
};

function sendFile(res, status, filePath) {
  const ext = path.extname(filePath).toLowerCase();
  res.writeHead(status, { 'Content-Type': CONTENT_TYPES[ext] || 'application/octet-stream' });
  fs.createReadStream(filePath).on('error', () => res.destroy()).pipe(res);
}

function isFile(p) {
  try { return fs.statSync(p).isFile(); } catch { return false; }
}

const server = http.createServer((req, res) => {
  // Security headers (static values — no need for helmet).
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  // Only advertise HSTS when the proxy in front of us terminated TLS.
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
  }

  const notFound = () => sendFile(res, 404, path.join(PUBLIC_DIR, '404.html'));
  if (req.method !== 'GET' && req.method !== 'HEAD') return notFound();

  let pathname;
  try {
    pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
  } catch {
    return notFound();
  }

  // Resolve inside public/ only — the prefix check rejects ../ traversal.
  const resolved = path.resolve(PUBLIC_DIR, '.' + pathname);
  if (resolved !== PUBLIC_DIR && !resolved.startsWith(PUBLIC_DIR + path.sep)) return notFound();

  // Exact file → clean URL (+ .html) → directory index (covers "/").
  for (const candidate of [resolved, resolved + '.html', path.join(resolved, 'index.html')]) {
    if (isFile(candidate)) return sendFile(res, 200, candidate);
  }
  notFound();
});

server.listen(PORT, () => {
  console.log(`Recadly web listening on port ${PORT}`);
});
