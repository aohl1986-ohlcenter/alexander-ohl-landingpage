![Alexander Ohl im Büro von Pragma Code](./banner.webp)

# alexander-ohl.com — Personal-Brand-Landingpage

[![Astro 7](https://img.shields.io/badge/Astro-7-BC52EE?logo=astro&logoColor=white)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Cloudflare Pages](https://img.shields.io/badge/Cloudflare_Pages-F38020?logo=cloudflare&logoColor=white)](https://pages.cloudflare.com)
[![Deploy](https://github.com/aohl1986-ohlcenter/alexander-ohl-landingpage/actions/workflows/deploy.yml/badge.svg)](https://github.com/aohl1986-ohlcenter/alexander-ohl-landingpage/actions/workflows/deploy.yml)

Personal-Branding- und Entity-SEO-Landingpage für **Alexander Ohl** — Freelance
IT-Consultant, KI-Automatisierung und Webentwicklung, Gründer von
[Pragma Code](https://www.pragma-code.de).

**Live:** [alexander-ohl.com](https://www.alexander-ohl.com)

Umgesetzt im Pragma-Code-Design-System: dunkel, terminal-inspiriert, auf
Performance und Auffindbarkeit optimiert — statisch ausgeliefert, ohne
Frontend-Framework und ohne externe Requests zur Laufzeit.

## Tech-Stack

- **Astro 7** — Static-Site-Generator mit Island Architecture
- **TypeScript / CSS3** — eigenes Design-System über Custom Properties, kein Tailwind
- **Cloudflare Pages** — Hosting am Edge-CDN
- **Manrope** — Variable Font, self-hosted (kein Google-Fonts-Roundtrip)

## Features

### Entity-SEO und Auffindbarkeit
- **JSON-LD ProfilePage + Person Entity-Graph** (Schema.org) — Verankerung im Knowledge Graph und für KI-Systeme
- `sitemap.xml`, `robots.txt` und [`llms.txt`](public/llms.txt) für klassische Crawler und LLM-Crawler
- Canonical, `hreflang` (DE/EN inkl. `x-default`), Open Graph und Twitter Cards
- **Speculation Rules API** — Folgeseiten werden im Hintergrund vorgerendert

### Performance
- WebP-Bilder mit responsivem `srcset`, `preload` und `fetchpriority="high"`
- Self-hosted Variable Font — kein externer Request
- Edge-Caching über die [`_headers`](public/_headers)-Datei
- View Transitions API für nahtlose Seitenwechsel

### KI-Assistent
- Geführter Assistent unter `/assistent` bzw. `/en/assistant`: beantwortet Fragen
  zu Werdegang und Leistungen und schätzt Projektrahmen (Umfang, Preisspanne,
  Dauer) ab
- **Vollständig clientseitig und regelbasiert** — keine API, kein Backend, kein
  LLM-Call. Es verlassen keine Eingaben den Browser, und die Seite bleibt statisch
  ausgeliefert
- Zweisprachige Wissensbasis in [`src/scripts/chatbot-personal.js`](src/scripts/chatbot-personal.js)

### Design und UX
- **Terminal-Card** im Hero — animierte `whoami`-Ausgabe mit Typewriter-Effekt
- **Tech-Ticker** mit laufenden Technologie-Badges
- Scroll-basierte Reveal-Animationen über CSS `animation-timeline: view()`
- Responsives Spacing über `clamp()`, Dark-First im Pragma-Code-Farbschema

### Zweisprachigkeit
Vollständige deutsche und englische Fassung (`/` und `/en`) mit korrekter
`hreflang`-Annotation.

### MCP-Integration
Über `navigator.modelContext.registerTool` stellt die Seite ein
`getProfile`-Tool bereit, das KI-Agenten strukturierte Profildaten liefert,
statt sie aus dem HTML raten zu lassen.

## Struktur

```
src/
├── components/
│   └── Chatbot.astro           # Assistent-Widget
├── layouts/
│   └── Layout.astro            # Gemeinsames Layout (Head, Header, Footer)
├── pages/
│   ├── index.astro             # Deutsche Startseite
│   ├── assistent.astro         # KI-Assistent (DE)
│   ├── en/index.astro          # Englische Startseite
│   ├── en/assistant.astro      # KI-Assistent (EN)
│   ├── impressum.astro
│   ├── datenschutz.astro
│   └── 404.astro
├── scripts/
│   └── chatbot-personal.js     # Wissensbasis und Logik des Assistenten
└── styles/
    └── tokens.css              # Design-Tokens (Custom Properties)

public/
├── assets/                     # Bilder und self-hosted Fonts
├── styles/chatbot.css          # Styles des Assistenten
├── llms.txt                    # Kontext für LLM-Crawler
├── robots.txt
├── _headers                    # Cloudflare-Cache-Header
└── favicon.svg
```

## Lokale Entwicklung

```bash
npm install
npm run dev        # Dev-Server auf localhost:4321
npm run build      # Production-Build nach dist/
npm run preview    # Preview des Production-Builds
```

## Deployment

Automatisch über **GitHub Actions**
([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)): Jeder Push auf
`master` baut die Site und lädt `dist/` per Wrangler Direct Upload zum
Cloudflare-Pages-Projekt `alexander-ohl` hoch.

Das Pages-Projekt hat bewusst **keine** Git-Integration — der Workflow ist der
einzige automatische Deploy-Weg. Er braucht zwei Repository-Secrets:

| Secret | Inhalt |
|---|---|
| `CLOUDFLARE_API_TOKEN` | API-Token mit der Berechtigung **Cloudflare Pages: Edit** |
| `CLOUDFLARE_ACCOUNT_ID` | Account-ID aus dem Cloudflare-Dashboard |

Manueller Deploy (setzt lokal eingeloggtes Wrangler voraus):

```bash
npm run build && npx wrangler pages deploy dist --project-name=alexander-ohl
```

## Lizenz

Kein Open-Source-Release. Der Code liegt öffentlich als Arbeitsprobe; alle Rechte
vorbehalten. Inhalte, Bilder und das Design-System sind nicht zur
Weiterverwendung freigegeben.
