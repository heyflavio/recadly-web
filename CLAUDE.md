# Recadly — Web

Marketing site and legal pages for [recadly.com](https://recadly.com). Static
HTML/CSS served by a thin dependency-free node:http server; the phone mockups
are React 18 + JSX transpiled **in the browser** by Babel standalone — there is
no build step.
The waitlist form is the only backend touchpoint, posting to
[recadly-backend](../recadly-backend); the app it markets is
[recadly-ios](../recadly-ios).

- Plain JS/JSX (no TypeScript, no bundler) · Node 18+ · npm · zero dependencies · React/Babel via unpkg CDN

## Layout

```
server.js                node:http static server (entry point; clean URLs by trying <path>.html)
public/
  index.html             landing page; loads React + Babel standalone from unpkg (SRI-pinned)
  privacy.html …         legal pages Meta App Review requires (/privacy, /terms, /data-deletion)
  waitlist.js            wires <form class="signup" data-waitlist-source> → backend waitlist endpoint
  i18n.js                EN/ES/PT dictionary for static HTML (data-i18n* attributes)
                         — landing-page keys first, then the legal-page keys
  i18n-screens.js        translations + window.tr()/useLang() for the JSX screens; must load after i18n.js
  theme.jsx, ios-frame.jsx, screens/*.jsx   in-page app mockups (text/babel scripts)
  styles.css, assets/    styles, logo + wordmark
```

## Run

```bash
npm install
npm start        # http://localhost:3000 (prod host injects PORT)
```

## Non-obvious wiring

- **Waitlist** POSTs to `https://recadly-backend.fly.dev/waitlist`, hardcoded in
  `public/waitlist.js` — production Fly, *not* the local ngrok bridge the iOS app
  uses. Backend dedupes: resubmits return `existed: true` and the UI still shows
  the success state on purpose.
- **i18n**: every user-visible string needs all three locales (en/es/pt). Static
  HTML strings live in `i18n.js` (swapped via `data-i18n*` attributes); strings
  inside the JSX mockups live in `i18n-screens.js` (`window.tr()`). Load order
  matters: i18n.js → i18n-screens.js → screen .jsx files. Lang persists in
  `localStorage.recadly-lang`.
- **Opportunity-cost calculator** (`#cost`): inline `<script>` at the bottom of
  index.html, plain JS. `cost.formula` is the one i18n key with `{placeholders}`,
  so the element deliberately carries *no* `data-i18n-html` — the script owns it
  and re-renders on the `recadly:lang` event i18n.js dispatches after `apply()`.
- **CDN pins**: the React/Babel `<script>` tags in index.html carry SRI
  `integrity` hashes — bumping a version without recomputing the hash blocks the
  script and blanks the mockups.
- **Legal URLs** (`/privacy`, `/terms`, `/data-deletion`) are registered in Meta's
  app config; clean URLs come from `extensions: ['html']` in server.js. Don't
  rename the HTML files.
- **Deploy**: Hostinger Node.js web app wired to this GitHub repo; start command
  `npm start`, port from `process.env.PORT`.
