# C9_VECTOR — Muhammad Umer's cybersecurity portfolio

A premium, 3D, GitHub-synchronized portfolio built with plain HTML, CSS and
JavaScript (plus Three.js and GSAP, loaded from local files — no build step).

```
portfolio/
├── index.html          entry point
├── style.css            all styles
├── script.js            all frontend behaviour (3D hero, globe, GitHub sync, UI)
├── config.js             ← YOU EDIT THIS. Names, links, skills, research entries.
├── robots.txt / sitemap.xml
├── assets/
│   ├── vendor/           three.min.js, gsap.min.js (bundled locally)
│   ├── icons/favicon.svg
│   └── images/og-image.png
└── server/                optional backend (webhook sync + WhatsApp)
    ├── server.js
    ├── routes/, services/, lib/
    ├── package.json
    └── .env.example
```

## 1. Quick start (no backend needed)

The site works as static files. From the `portfolio/` folder:

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

Or just deploy the folder as-is (see **Deployment** below). On load, the page
calls the public GitHub API directly (`https://api.github.com/users/cyber-vector/repos`),
caches the result in the visitor's browser for `CONFIG.cacheMinutes` (default
10), and renders Projects, Tools, Research timeline and GitHub Intelligence
from that data. New public repositories you push show up automatically —
nothing in `index.html` needs editing.

## 2. Editing your content

Everything personal lives in **`config.js`**, which is a plain public file
(never put secrets in it). Key fields:

| Field | What it controls |
|---|---|
| `githubUsername`, `githubUrl`, `linktreeUrl` | Identity and links |
| `socials` | Only links you fill in are shown. `whatsappEnabled` must also be `true` for the WhatsApp card to appear |
| `email` | Shown in the contact terminal only if it's a valid address |
| `toolKeywords` / `toolOverrides` | How a repo is classified as a Security Tool vs. a plain Project (see §3) |
| `heroLabels`, `specializations`, `skillNodes`, `skillGroups` | Hero orbit labels, specialization cards, and the interactive skill map. Set `confirmed: false` on any skill node you don't want shown yet |
| `research` | Hand-written research entries (title/date/summary/tech/link). Leave `date`/`link` empty to hide them |
| `apiBase` | Leave `""` to talk to GitHub directly from the browser. Set to your backend's URL to use Mode B (see §4) |

No stars, followers, certifications, or employers are ever invented — fields
with no real data show "Not available" or are hidden.

## 3. How "Security Tool" classification works

A repository is shown under **Tools** (as well as Projects) when one of
`CONFIG.toolKeywords` (`tool`, `security`, `cybersecurity`, `osint`, `scanner`,
`pentest`, `soc`, `blue-team`, `red-team`, `automation`) appears in its
**GitHub topics** or **description** — never in the repository name alone.
You can override any repository by name in `CONFIG.toolOverrides`:

```js
toolOverrides: {
  "vectoria": { tool: true, label: "OSINT tool" },
  "some-old-repo": { tool: false }   // force it to NOT be a tool
}
```

## 4. Two GitHub sync modes

**Mode A — frontend only (default).** The browser fetches GitHub directly.
Simplest, no server, subject to GitHub's public rate limit (60 requests/hour
per visitor IP, which is generous for a single portfolio page).

**Mode B — optional backend.** Set `CONFIG.apiBase` to your backend's URL
(and add it to the `connect-src` line in `index.html`'s CSP `<meta>` tag).
The backend fetches GitHub with your own token (5,000 req/hour), caches the
result, and can be refreshed instantly by a GitHub webhook instead of a timer
— see §5.

## 5. Optional backend (`server/`)

Only needed for instant webhook-triggered sync and/or WhatsApp notifications.
The site works fully without it.

```bash
cd server
npm install
cp .env.example .env    # fill in real values — never commit .env
npm start                # listens on PORT (default 8787)
```

Environment variables (`server/.env.example`):

```env
PORT=8787
ALLOWED_ORIGINS=https://your-domain.example
GITHUB_USERNAME=cyber-vector
GITHUB_TOKEN=                  # optional, raises your GitHub rate limit
GITHUB_WEBHOOK_SECRET=         # required to use the webhook
WHATSAPP_ENABLED=false
WHATSAPP_ACCESS_TOKEN=
WHATSAPP_PHONE_NUMBER_ID=
WHATSAPP_RECIPIENT_ID=
WHATSAPP_VERIFY_TOKEN=
```

**Endpoints:**
- `GET /api/projects` — cached repo + profile data (what the frontend reads in Mode B)
- `POST /api/github/webhook` — GitHub repository webhook receiver. Rejects any
  request whose `X-Hub-Signature-256` doesn't match `GITHUB_WEBHOOK_SECRET`
  (HMAC-SHA256, constant-time comparison) *before* the payload is parsed or
  trusted. Configure it in your repo: **Settings → Webhooks → Add webhook**,
  Payload URL `https://your-backend/api/github/webhook`, content type
  `application/json`, secret = `GITHUB_WEBHOOK_SECRET`, events = `push` (and
  `repository` if you want brand-new repos picked up immediately).
- `GET/POST /api/whatsapp/webhook` — WhatsApp Cloud API verification handshake
  and inbound command handling (`/projects`, `/latest`, `/github`, `/portfolio`).

All routes are rate-limited in-process. CORS only allows the origins listed in
`ALLOWED_ORIGINS`. Secrets are read from environment variables only and are
never sent to, or embedded in, the frontend.

### WhatsApp notifications

This uses the **official WhatsApp Business Cloud API** only — never
unofficial browser automation of a personal WhatsApp account, which breaches
WhatsApp's Terms of Service. To enable:

1. Create a Meta app with the WhatsApp product, get a phone number ID and
   access token ([developers.facebook.com/docs/whatsapp/cloud-api](https://developers.facebook.com/docs/whatsapp/cloud-api)).
2. Fill in `WHATSAPP_ACCESS_TOKEN`, `WHATSAPP_PHONE_NUMBER_ID`,
   `WHATSAPP_RECIPIENT_ID`, `WHATSAPP_VERIFY_TOKEN`, set
   `WHATSAPP_ENABLED=true`.
3. When the GitHub webhook detects a genuinely new repository, the backend
   sends a templated "🚀 NEW PROJECT ADDED" message to `WHATSAPP_RECIPIENT_ID`.

This is entirely optional — leave `WHATSAPP_ENABLED=false` and nothing WhatsApp-related runs.

## 6. Deployment

**Frontend (no backend required):**
- **GitHub Pages:** push `portfolio/` (rename or copy its contents to the repo
  root, or serve `/docs`), enable Pages in repo settings. `.nojekyll` is
  already included.
- **Cloudflare Pages / Netlify:** connect the repo, build command: none,
  output directory: `portfolio` (or repo root if that's all you deploy).
  `_headers` is already included for security headers.
- **Vercel:** `vercel --prod` from inside `portfolio/`, or connect the repo
  with output directory `portfolio`.

After deploying, replace every `YOUR-DOMAIN` placeholder in `index.html`
(canonical link, Open Graph/Twitter tags) and in `robots.txt` / `sitemap.xml`
with your real domain.

**Backend (only if you want Mode B / webhooks / WhatsApp):** any Node.js host
works (Render, Railway, Fly.io, a small VPS, etc.). Deploy the `server/`
folder, set the environment variables from `.env.example` in the host's
dashboard (never commit `.env`), and point `CONFIG.apiBase` in the frontend's
`config.js` at the deployed URL. Remember to add that URL to the `connect-src`
directive in `index.html`'s CSP `<meta>` tag, and to `ALLOWED_ORIGINS` in the
backend's own environment variables.

## 7. Notes

- **Security:** all GitHub-sourced text (descriptions, topics, repo names) is
  inserted with `textContent`, never `innerHTML`, so it can't inject markup or
  scripts. The page ships a restrictive Content-Security-Policy `<meta>` tag.
- **Accessibility:** keyboard navigation, visible focus states, semantic
  headings, and `prefers-reduced-motion` are all respected — animations and
  the 3D scenes simplify or stop for people who request reduced motion.
- **No WebGL?** The hero and globe fall back to lightweight 2D/CSS
  alternatives automatically; the rest of the site is unaffected.
- **No fabricated data, ever.** Stars, followers, timelines and repository
  facts are only ever shown if the GitHub API actually returned them.
