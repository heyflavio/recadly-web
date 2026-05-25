# recadly-web

Marketing site and legal pages for [recadly.com](https://recadly.com).

## What this is

A static landing page (built from a Claude Design handoff) plus the legal
pages Meta App Review requires. The landing page renders the iOS app mockups
with React + Babel **in the browser** — there is no build step. `server.js` is
a thin Express static server so it can run as a Node.js web app on Hostinger.

## Structure

```
server.js          Express static server (entry point)
package.json       start script + express dependency
public/
  index.html       landing page
  privacy.html     Privacy Policy        -> recadly.com/privacy
  terms.html       Terms of Service      -> recadly.com/terms
  data-deletion.html  Data Deletion      -> recadly.com/data-deletion
  styles.css
  i18n.js, i18n-screens.js   EN / ES / PT localization
  theme.jsx, ios-frame.jsx, screens/*.jsx   in-page app mockups
  assets/          logo + wordmark
```

## Run locally

```bash
npm install
npm start
# http://localhost:3000
```

## Deploy

Hostinger Node.js web app, deployed from this GitHub repo.
Start command: `npm start`. The host injects `process.env.PORT`.
