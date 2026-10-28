# AGENTS.md — Arbeitsanleitung für KI-Agenten & IDEs

**alexander-ohl.com** — Personal-Brand-Landingpage von Alexander Ohl (Entity-SEO,
DE/EN). Die Seite gehört zum Umfeld von pragma-code.de (gleiches Design,
gemeinsame Profil-Daten); CV-Inhalte stammen aus dem Werdegang des Inhabers.

## Kernregeln

1. Arbeitsverzeichnis immer `~/AntiGravity/alexander-ohl-landingpage` — vor Build und Deploy `cd` dorthin (einmal wurde versehentlich der pragma-code-Build mit 689 Seiten deployed).
2. Deploy läuft automatisch per GitHub Actions bei Push auf `master` (Pages-Projekt `alexander-ohl` hat **keine** Git-Integration). Nach dem Push den Lauf und die Live-Seite prüfen.
3. Das Repo ist **öffentlich**: keine Zugangsdaten, Token, Konto-/Zonen-IDs, private Mailadressen in Dateien oder Commits. Commits über die GitHub-noreply-Adresse.
4. Profil-Links (sameAs) und `jobTitle` nur an den **drei synchronen Stellen** ändern: `src/data/person.ts`, pragma-code.de/alexander-ohl (beide Sprachen), `public/llms.txt`.
5. jobTitle site-übergreifend: „KI-Automatisierungs-Engineer“ (EN „AI Automation Engineer“) — „Freelance IT-Consultant“ nicht wieder einführen.
6. Chatbot-Preise nicht im Bot pflegen, sondern im Pragma-Repo (`src/data/pricing.ts`); `prebuild`-Gate sperrt €-Beträge, BAFA- und Stundenangaben.
7. `compressHTML: false` beibehalten (wie auf pragma-code.de), sonst fehlen Leerzeichen neben Tags.
8. Nichts Unbelegtes neu behaupten: Kennzahlen und Referenzen nur mit Beleg bzw. Freigabe (siehe „Entschieden“).
9. Keine Gemeinde-/Dritt-Bezüge in Bildunterschriften oder Alt-Texten ohne bestätigte Zustimmung.
10. Nur `npm` (nicht pnpm); es gibt genau einen Klon dieses Projekts.

## Projekt

- Eigenständiges Astro-Projekt (Astro 7 laut `package.json`; `npm`, nicht pnpm).
  **Pfad geändert 15.08.2026**: der frühere Zweitklon `~/dev/alexander-ohl` war seit
  05.08. veraltet und wurde gelöscht; es gibt jetzt genau einen Klon.
- GitHub (public): `aohl1986-ohlcenter/alexander-ohl-landingpage`. Commits laufen über die
  GitHub-noreply-Adresse (Repo ist public, private Mail wird von GitHub geblockt —
  `git config user.email` im Repo entsprechend gesetzt).
- Design: identische `--pc-*` Tokens wie pragma-code.de (Navy #0f1430, Gelb #ffc829,
  Manrope self-hosted); Tokens in `src/styles/tokens.css`.
- Seiten: `/` (DE), `/en`, `/impressum`, `/datenschutz`, `/404`, Assistent unter
  `/assistent` bzw. `/en/assistant`; `site = https://www.alexander-ohl.com`,
  `trailingSlash` never.
- Features: Terminal-Typing-Hero, Tech-Ticker, CSS scroll-driven Reveals, View
  Transitions, Speculation Rules, WebMCP `getProfile`-Tool, ProfilePage/Person-Schema,
  hreflang DE↔EN, `llms.txt`.
- Kontakt-CTA: info@pragma-code.de (keine eigene Mail auf der Domain aktiv, Stand Juli 2026).
- Foto: `~/Downloads/Alexander Ohl in Büro von Pragma Code in Deutschland - 2026.jpeg`
  (1634×640) → WebP-Varianten in `public/assets`.
- Preview: `launch.json`-Config `alexander-ohl`, Port 4324 (`npm run dev` sonst 4321).
- Weitere Einzelheiten zu Struktur, Features und Lokaler Entwicklung: `README.md`.

## Entity-SEO, Schema, llms.txt

- **Entity-Konsolidierung (18.07.2026, Variante B, finaler Stand):** Person-Schema hat
  kanonische `@id` `https://www.alexander-ohl.com/#person`; **jobTitle site-übergreifend =
  „KI-Automatisierungs-Engineer"** (EN: „AI Automation Engineer") — Engineer-Identität
  führt überall, konsistent mit LinkedIn/Gulp („KI-Automatisierungs-Engineer &
  Full-Stack-Entwickler"). Die zwischenzeitliche Formel „Freelance IT-Consultant für Web &
  KI-Automatisierung" wurde am 18.07.2026 wieder verworfen. Gilt auch für
  pragma-code.de/alexander-ohl (Title + Person-Schema referenzieren dieselbe @id; dort
  behält der Title das Emoji 👨‍💻).
- **sameAs (14, identisch auf BEIDEN Repos):** LinkedIn, Xing (AlexanderOhl_PragmaCode),
  GitHub (aohl1986-ohlcenter), g.dev/alexanderohl, Gulp
  (gulp.de/gulp2/g/spezialisten/profil/alexander.ohl), Facebook (alexander.ohl1986),
  Instagram (alexander.ohl), Pinterest (de.pinterest.com/alexander_ohl_), YouTube
  (UCcnYJ9p6KOQML5FaYyzl2uQ), Behance (alexander-ohl), VK (ohlcenter), WinFuture
  (mywf/174860), Taplink (taplink.cc/alexander.ohl — Link-Aggregator, schwächstes
  Signal, bewusst zuletzt), + Self-Link auf die jeweils ANDERE Personenseite (auf
  alexander-ohl.com → pragma-code.de/alexander-ohl; auf pragma-code → alexander-ohl.com/
  bzw. /en). Das globale Organization-Schema im pragma-code-Layout hat separat eigene 2
  sameAs (Firmen-LinkedIn/Xing) — nicht mit der Person-Liste verwechseln.
  (Stand dieser Liste 18.07.2026; spätere Änderungen siehe „Audit 22.10.2026“: pragma-code.de
  hat am 02.09. VK entfernt, g.dev → me.developers.google.com umgestellt und später Malt ergänzt.)
- **ProfilePage-Datumsfelder (alexander-ohl.com DE+EN):** `dateCreated` fix „2026-07-09“,
  `dateModified` build-dynamisch (`new Date().toISOString().slice(0,10)` via
  `buildDate`-const im Frontmatter) → bleibt bei jedem Deploy aktuell, nie manuell pflegen.
- **Rich-Results-Validierung (18.07.2026):** Alle 4 Seiten (je DE/EN) HTTP 200, JSON-LD
  fehlerfrei. Rich-fähige Typen: pragma-code-Seiten = BreadcrumbList + Organization;
  alexander-ohl.com = ProfilePage + Organization. **Person selbst ist KEIN
  Rich-Result-Typ** (speist nur Knowledge-Graph/Entity-Verständnis, kein SERP-Snippet) —
  bei Erwartungsmanagement beachten.
- **llms.txt (alexander-ohl.com, `public/llms.txt`, statisch):** Abschnitt „## Profile im
  Netz“ listet dieselben 13 externen Profile im Klartext (ohne die
  pragma-code-/alexander-ohl-Self-Links); Intro-Rolle = „KI-Automatisierungs-Engineer &
  Full-Stack-Entwickler“. pragma-code.de/llms.txt ist site-weit auto-generiert
  (Blog-Index) und hat bewusst KEINEN persönlichen Profil-Block.
- **Drei Stellen synchron halten** bei künftigen sameAs-/Profil-Änderungen:
  (1) Person-Schema alexander-ohl.com DE+EN, (2) Person-Schema
  pragma-code.de/alexander-ohl DE+EN, (3) alexander-ohl.com `public/llms.txt`.
  jobTitle-Änderungen ebenso in beiden Repos. **Seit 22.10.2026 liegen die Profil-Links
  nur noch in `src/data/person.ts`** (Startseite DE/EN + Blog lesen von dort) — die „drei
  Stellen“ sind damit `person.ts`, pragma-code.de/alexander-ohl und `public/llms.txt`.
- Zum Stand 22.10.2026 führte `BlogPost.astro` eine eigene, abweichende Person
  (8 sameAs inkl. ProvenExpert-Firmenprofil, anderer jobTitle); der Schema-Sync vom
  22.10. hat das vereinheitlicht (siehe unten).

## Hosting und Deploy (Cloudflare Pages)

- **Hosting (Stand Juli 2026): Cloudflare Pages**, Projekt `alexander-ohl`
  (Konto-ID und Account-Mail: nicht im öffentlichen Repo — im Cloudflare-Dashboard bzw.
  in den Repo-Secrets nachsehen).
- **Deploy seit 28.07.2026 automatisch via CI** — `.github/workflows/deploy.yml`
  (Commit a54234e): Push auf `master` → `npm ci` → `astro build` →
  `cloudflare/wrangler-action` (Direct Upload). Repo-Secrets `CLOUDFLARE_API_TOKEN`
  (Scope **Cloudflare Pages: Edit**) + `CLOUDFLARE_ACCOUNT_ID` sind gesetzt, erster grüner
  Lauf 28.07. **Das Pages-Projekt hat KEINE Git-Integration** (`Git Provider: No`) — der
  README behauptete jahrelang „jeder Push triggert einen Build“, was nie stimmte; gepushte
  Fixes lagen dadurch unbemerkt nicht live. Erst der Workflow macht die Aussage wahr
  (README korrigiert). Ohne den Workflow gilt: Ein `git push` allein schaltet Änderungen
  NICHT live.
- **Manueller Notweg** (wrangler lokal per OAuth eingeloggt, braucht keinen Token):
  `npx wrangler pages deploy dist --project-name alexander-ohl --branch master --commit-dirty=true`.
  Vollständig: 
  ```bash
  cd ~/AntiGravity/alexander-ohl-landingpage
  npm run build && npx wrangler pages deploy dist --project-name=alexander-ohl --commit-dirty=true
  ```
  Wird ein Deploy von Hand gemacht (z. B. wenn der Workflow ausfällt), muss er nach
  jedem erfolgreichen Build direkt per Wrangler ausgeführt werden.
- **Live-Verifikation** nach dem Deployment: `curl -I https://www.alexander-ohl.com/assistent`
  muss `200 OK` liefern.
- **Zwei Secret-Fallen beim Einrichten, beide real passiert:** Cloudflare-Code **7003**
  („could not route to /accounts/…“) = **Zonen-ID statt Konto-ID** in
  `CLOUDFLARE_ACCOUNT_ID` (gleiche Falle wie beim pragma-code-Purge-Token). Code **9106**
  („Authentication failed“, status 400) = falscher Token-**Wert**, typischerweise die
  32-stellige Token-**ID** aus der Dashboard-Liste statt des nur einmal angezeigten
  Token-Secrets. Token vorher prüfen:
  `curl -H "Authorization: Bearer $CF" https://api.cloudflare.com/client/v4/user/tokens/verify`.
  Der Zone-Cache-Purge-Token von pragma-code.de hat den falschen Scope.
- Custom Domains apex + www verbunden, live. **Achtung: vor Build/Deploy immer ins richtige
  Verzeichnis `cd ~/AntiGravity/alexander-ohl-landingpage`** — einmal wurde versehentlich
  der pragma-code-Build (689 Seiten) deployed.
- Hintergrund: Domain ist bei IONOS in separatem Kundenkonto registriert; IONOS verweigert
  die Einbindung als „externe Domain“ in den Pragma-Code-Webspace (IONOS-registrierte
  Domains können nicht extern eingebunden werden) → deshalb Pages statt Shared Hosting.
  DNS liegt bei Cloudflare, IONOS-Mail-Records (MX/SPF/DKIM/DMARC) wurden übernommen,
  E-Mail auf der Domain noch ungenutzt.
- **Stand 25.09.2026:** Chatbot holt Preise zur Laufzeit von
  `https://www.pragma-code.de/chatbot-prices.json` (Quelle `src/data/pricing.ts` im
  Pragma-Repo) — dort ändern, nicht im Bot; `prebuild`-Gate
  (`scripts/check-chatbot-prices.mjs`) sperrt €-Beträge, BAFA- und Stundenangaben.
  Apex→www per 301 über `functions/_middleware.js` (Pages Function).
  `compressHTML: false` wie auf pragma-code.de (sonst fehlen Leerzeichen neben Tags).
- Cloudflare-Einstellungen **23.10.2026 (per Chrome):** E-Mail-Verschleierung aus (live
  geprüft), kein KI-Crawler gesperrt (AI Crawl Control, Bot fight mode und AI Labyrinth
  aus), Crawler Hints an. Bing Webmaster Tools nicht angelegt. Cloudflare Web Analytics
  (RUM) läuft (steht in der Datenschutzerklärung).

## Foto-Werdegang (live seit 10.10.2026, DE + EN)

- Auf Freigabe nach `master` gemergt und gepusht (cca28b9), CI-Deploy grün, live geprüft.
  `sitemap-images.xml` (Endpoint `src/pages/sitemap-images.xml.ts`, liest
  `public/assets/werdegang/` beim Build) in `robots.txt` eingetragen und per
  `sitemaps.submit` in der GSC angemeldet (204), Startseiten DE/EN per Indexing API
  gemeldet; manuelles „Indexierung beantragen“ macht der Inhaber.
- Alt-Texte nennen Name + Jahr + Kontext; Fotos bewusst NICHT ins Person-Schema `image`
  (sonst könnte Google ein Jugendfoto als Profilbild wählen).
- Komponente `src/components/CareerChapters.astro`: 4 Kapitel chronologisch (Anfänge bis
  2004 · Marine 2005–2009 · Technik 2009–2013 · Unternehmer 2013–heute), 8 Fotos in
  `public/assets/werdegang/` (WebP 480/960, ohne EXIF/GPS, nur Belichtung/Farbstich
  korrigiert; beim Arbeitsplatz 2024 Fotodruck mit Dritten auf dem Mauspad
  weichgezeichnet). Platzhalter „Foto gesucht“ nur im Dev-Server. Nur DE, EN folgt nach
  Freigabe (Stand der Notiz vom 10.10.; Überschrift sprach von DE + EN).
- Weitere Fotos nur nach Rücksprache mit dem Inhaber aufnehmen; Dritt-Bezüge (Einrichtungen,
  Personen) nicht in Bildunterschriften oder Alt-Texten nennen.

## Audit 22.10.2026 (Messwerte und Fixes)

- Befund (nichts geändert): PSI mobil 97–98 / desktop 100 (Median 3 Läufe), LCP mobil
  1,8–2,2 s (Labor); GSC: alle 12 Sitemap-URLs indexiert, 26 Klicks / 828 Impr. in 90
  Tagen; squirrelscan 75/C.
- **Sync-Regel „drei Stellen“ war gebrochen:** pragma-code.de hatte am 02.09. VK entfernt,
  g.dev → me.developers.google.com umgestellt und später Malt ergänzt — alexander-ohl.com
  (Schema DE/EN + llms.txt) war nicht nachgezogen; `BlogPost.astro` führte eine eigene,
  abweichende Person (8 sameAs inkl. ProvenExpert-Firmenprofil, anderer jobTitle).
- Weitere technische/rechtliche Befunde: Datenschutz sagte „keine Analyse-Tools“, Cloudflare
  Web Analytics (RUM) läuft aber; Impressum ohne Vertretung/NAPR-Nr./VZP und noch
  „§ 5 TMG“ (seit 05/2024 DDG — betrifft auch pragma-code.de); „30-Min. Discovery-Call“ vs.
  Calendly 20 Min.
- **22.10.2026, Sofort-Fixes committet** auf Branch `fix/audit-sofortfixes-2026-10`
  (2896f31), am selben Tag per Fast-Forward auf `master` gepusht, CI-Deploy grün, **live
  geprüft** (PSI mobil danach 99/99/99, LCP 1,7 s statt 2,2 s): Datenschutz (CF Web
  Analytics + Assistent), Impressum (DDG, NAPR, VZP, Telefon), Schema-Sync, 20 Min.,
  EN-Chat-Link, HSTS + `/_astro/*` immutable, Preload, CSS inline.
- **22.10.2026, Branch `feat/mobiles-menue` (ce69278)**, auf Freigabe per Fast-Forward auf
  `master` gepusht, Deploy grün, live geprüft: mobiles Menü per nativem `popover` (unter
  820 px), Kopfbalken mobil 0.96, Chat-Button blendet sich bei `[data-chat-fab-hide]` aus
  (Kontakt + Footer der Startseite).
- **Berufsbezeichnung (bestätigt):** Terminal „KI-Automatisierungs-Engineer &
  Full-Stack-Entwickler“, Werdegang-Station „Gründer & KI-Automatisierungs-Engineer“ (EN
  analog), README ohne „Freelance IT-Consultant“; „IT-Generalist“ lebt nur noch im
  Erzähltext des Werdegangs.
- Optionale Audit-Punkte LIVE seit 23.10.2026 (828a735): Meta ≤155, NIS2-Titel neu,
  Sitemap-lastmod aus git, Assistent-Schema WebApplication+Offer 0 €, Phosphor-Schrift
  durch SVG-Masken ersetzt, Mini-Porträts.
- **Terminal-git-log LIVE seit 23.10.2026** (b66fa40): Hero-Terminal mit `git log` /
  `git show` / `stack --json` / `sudo hire alexander` (Erzeugung in
  `src/data/werdegang-git.ts`, Ausgabe in `src/scripts/terminal-git.ts`). Terminal-Inhalt
  seither in normaler Schreibweise.
- **Kundenstimmen LIVE seit 23.10.2026** (0bfbec7): ImkerPur (Video), K&K Bau, EsenTrans im
  Abschnitt Referenzen, DE/EN (`src/components/Kundenstimmen.astro`). Neue nur mit Namen,
  Link und Freigabe des Wortlauts; ohne Sterne und ohne Review-Schema. ProvenExpert: 5
  anonyme Bewertungen vom 03.04.2026 (Tag nach Profilanlage) bewusst nicht verwendet.

## Maschinenraum (live seit 22.10.2026, master 1e5b657)

- Abschnitt mit echtem Status eigener Systeme (Branch `feat/maschinenraum`, Abschnitt +
  `functions/api/maschinenraum.js`, Komponente `src/components/Maschinenraum.astro`).
  Publisher im Skill `maschinenraum` (claude-skills, per .gitignore-Ausnahme freigeschaltet
  und lokal committet, nicht gepusht). Trockenlauf gültig.
- **Datenweg:** lokaler Publisher → R2-Bucket `maschinenraum` mit bucket-scoped Token →
  Pages Function liest read-only; nur Whitelist-Felder, relative Zeiten (keine Uhrzeiten →
  Zeitzone/Aufenthaltsort bleibt verborgen), keine persönlichen Daten.
  `/api/maschinenraum` liefert das geprüfte JSON; Pages-Binding `MASCHINENRAUM`.
  Schlüsseldateien: zwei Dateien unter `~/.config/cloudflare/maschinenraum-r2-{key-id,secret}.token`
  (bucket-gebundenes R2-API-Token, Object Read & Write; 32/64 Zeichen).
- **`verlauf.json` der PageSpeed-Wache enthält Kunden-URLs → nie roh veröffentlichen.**
- launchd-Job `de.pragma-code.maschinenraum` (stündlich, RunAtLoad); gh und docker
  funktionieren unter launchd. Erster Upload ok und per S3-GET zurückgelesen (identisch,
  Whitelist ok; ohne Signatur HTTP 400).
- **Statusmodell:** aktiv / teilweise / bei Bedarf / im Aufbau / überfällig / Fehler;
  Lead-Agent wird bewusst manuell ein- und ausgeschaltet → Status „bei Bedarf“, nicht
  „Fehler“. Tracker ist seit 20.09. ganz stillgelegt → Zeile „pausiert“.
- Live geprüft: Abschnitt DE/EN und Footer-Status, PSI mobil danach 99/99/99, Best
  Practices 100. EN-Fix (Terminal-Leiste „engine-room“, a8d7bd4) am 22.10. gepusht.

## Fallen beim Testen

- Browser-Pane: Ist der Bereich ausgeblendet, rendert die Seite keine Frames —
  IntersectionObserver feuert dann nicht (auch kein frisch angelegter). Ein Screenshot
  erzwingt einen Frame; Verhalten erst danach prüfen, nicht als Codefehler werten.

## Entschieden — nicht erneut vorschlagen

- jobTitle „KI-Automatisierungs-Engineer“ (Variante B, 18.07.2026); „Freelance
  IT-Consultant“ ist verworfen.
- Emoji 👨‍💻 im Title von pragma-code.de/alexander-ohl bleibt.
- Kennzahlen und Formulierungen in Referenzen, Terminal-Befehlen und `llms.txt` nicht
  ungefragt ändern und nicht erneut als Befund melden (Entscheidung des Inhabers 23.10.2026).
- Fotos nicht ins Person-Schema `image`.
- Foto-Auswahl der Werdegang-Fotos steht (8 Fotos); Fotos mit Dritten oder Freizeitbezug
  bewusst nicht verwendet.
