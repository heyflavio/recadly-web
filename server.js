'use strict';

/**
 * Recadly marketing site — minimal static server.
 *
 * Serves the prebuilt static site in ./public. The landing page transpiles
 * its JSX in the browser via Babel standalone, so there is no build step —
 * this server only needs to hand out files.
 *
 * Hostinger (and most Node hosts) inject the port via process.env.PORT.
 */

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = path.join(__dirname, 'public');

// Security headers (static values — no need for helmet).
app.disable('x-powered-by');
app.use((req, res, next) => {
  res.set('X-Content-Type-Options', 'nosniff');
  res.set('X-Frame-Options', 'DENY');
  res.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  // Only advertise HSTS when the proxy in front of us terminated TLS.
  if (req.get('x-forwarded-proto') === 'https') {
    res.set('Strict-Transport-Security', 'max-age=15552000');
  }
  next();
});

// Serve everything in /public. `extensions: ['html']` gives clean URLs:
//   /privacy        -> public/privacy.html
//   /terms          -> public/terms.html
//   /data-deletion  -> public/data-deletion.html
app.use(
  express.static(PUBLIC_DIR, {
    extensions: ['html'],
    setHeaders(res, filePath) {
      // Babel fetches .jsx via XHR; hand it a sensible content type.
      if (filePath.endsWith('.jsx')) {
        res.setHeader('Content-Type', 'application/javascript; charset=utf-8');
      }
    },
  }),
);

// Root.
app.get('/', (_req, res) => {
  res.sendFile(path.join(PUBLIC_DIR, 'index.html'));
});

// Anything unmatched gets a real 404 page.
app.use((_req, res) => {
  res.status(404).sendFile(path.join(PUBLIC_DIR, '404.html'));
});

app.listen(PORT, () => {
  console.log(`Recadly web listening on port ${PORT}`);
});
