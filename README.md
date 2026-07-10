![Alexander Ohl in Büro von Pragma Code](./banner.webp)

# alexander-ohl.com — Personal Brand Landingpage


Hochperformante Personal-Branding- und Entity-SEO-Landingpage für **Alexander Ohl** (Freelance IT-Consultant · KI-Automatisierung & Webentwicklung · Gründer von [Pragma-Code](https://www.pragma-code.de)).

**Live:** [alexander-ohl.com](https://alexander-ohl.com)

Umgesetzt mit dem Pragma-Code-Design-System — dunkel, terminal-inspiriert, auf maximale Performance und Sichtbarkeit optimiert.

## Tech-Stack

- **Astro 7** (zuvor Astro 5) — Static-Site-Generator mit Island Architecture
- **TypeScript / CSS3** — Custom Design-System (Pragma-Code-Design), kein Tailwind
- **Cloudflare Pages** — Hosting mit Edge-CDN
- **Manrope** — Variable-Font, self-hosted (kein Google-Fonts-Roundtrip)

## Features

### Entity-SEO & Auffindbarkeit
- **JSON-LD ProfilePage + Person Entity-Graph** (Schema.org) — Verankerung im Knowledge Graph und für AI-Systeme
- `sitemap.xml`, `robots.txt` und [`llms.txt`](public/llms.txt) für klassische Suchmaschinen und LLM-Crawler
- Canonical-, Hreflang-Tags (DE/EN), Open-Graph- und Twitter-Card-Meta
- **Speculation Rules API** — Folgeseiten werden im Hintergrund vorgerendert

### Performance
- WebP-Bilder (responsive `srcset`) mit `preload` und `fetchpriority="high"`
- Self-hosted Variable Font (Manrope) — kein externer Request
- Cloudflare-Edge-Caching via `_headers`-Datei
- View Transitions API für nahtlose Seitenwechsel

### Design & UX
- **Terminal-Card** im Hero — animierte `whoami`-Ausgabe mit Typewriter-Effekt
- **Tech-Ticker** — laufende Technologie-Badges
- **Scroll-basierte Reveal-Animationen** via CSS `animation-timeline: view()`
- Responsive Design mit `clamp()`-basiertem Spacing
- Dark-First-Design im Pragma-Code-Farbschema (Navy, Gelb, Off-White)

### Zweisprachig
- Vollständige deutsche und englische Version (`/` und `/en`)
- Korrekte `hreflang`-Annotation und `x-default`

### AI-Integration
- **Model Context Protocol (MCP)**: `navigator.modelContext.registerTool` — stellt ein `getProfile`-Tool bereit, das AI-Agenten strukturierte Profildaten liefert

## Struktur

```
src/
├── layouts/
│   └── BaseLayout.astro        # Gemeinsames Layout (Head, Header, Footer)
├── pages/
│   ├── index.astro             # Deutsche Hauptseite
│   ├── en/index.astro          # Englische Version
│   ├── impressum.astro         # Rechtliches
│   ├── datenschutz.astro       # Datenschutz
│   └── 404.astro               # Custom 404-Seite
└── styles/
    └── global.css              # Pragma-Code-Design-System (Custom Properties)

public/
├── assets/                     # Bilder, Fonts (self-hosted)
├── llms.txt                    # Kontext für LLM-Crawler
├── robots.txt                  # Crawler-Steuerung
├── _headers                    # Cloudflare-Cache-Headers
└── favicon.svg                 # Favicon
```

## Lokale Entwicklung

```bash
npm install
npm run dev        # Startet Dev-Server auf localhost:4321
npm run build      # Erstellt Production-Build in dist/
npm run preview    # Preview des Production-Builds
```

## Deployment

Automatisch via **Cloudflare Pages** — jeder Push auf `master` triggert einen neuen Build.
