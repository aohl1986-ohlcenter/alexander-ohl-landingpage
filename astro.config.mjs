import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';

// lastmod für die Sitemap: Datum des letzten Commits, der die Seite selbst oder das
// gemeinsame Layout geändert hat. Kein Build-Datum — das wäre bei jedem Deploy „neu“,
// und Google ignoriert lastmod, das erkennbar nicht stimmt. Braucht die volle
// Git-Historie (deploy.yml: fetch-depth 0); ohne Treffer bleibt lastmod weg.
const lastmod = (url) => {
    const path = new URL(url).pathname.replace(/\/+$/, '') || '/index';
    const file = [`src/pages${path}.astro`, `src/pages${path}/index.astro`].find(existsSync);
    if (!file) return undefined;
    try {
        const date = execFileSync('git', ['log', '-1', '--format=%cI', '--', file, 'src/layouts'], { encoding: 'utf8' }).trim();
        return date || undefined;
    } catch {
        return undefined;
    }
};

// Gleiche URL-Konventionen wie pragma-code.de (keine Trailing-Slashes).
// build.format 'file' statt 'directory': Cloudflare Pages liefert /en.html
// direkt unter /en aus — beim directory-Format würde Pages /en per 308 auf
// /en/ umleiten und damit den Canonicals widersprechen.
export default defineConfig({
    site: 'https://www.alexander-ohl.com',
    trailingSlash: 'never',
    // HTML-Komprimierung AUS (25.09.2026), wie auf pragma-code.de: compressHTML
    // loescht Leerraum ganz, wenn er einen Zeilenumbruch enthaelt und an ein Tag
    // grenzt — im Blog stand dadurch u. a. "anspricht:<strong>Shadow AI</strong>"
    // ohne Leerzeichen (58 Stellen). Kosten dort gemessen: ~1 KB gzip pro Seite.
    compressHTML: false,
    build: {
        format: 'file',
        // CSS direkt ins HTML (22.10.2026): Je Seite sind es nur ~5 KB gzip, als
        // Dateien waren es zwei render-blockierende Requests vor dem ersten
        // Rendern (FCP mobil 1,7 s laut PageSpeed).
        inlineStylesheets: 'always'
    },
    integrations: [sitemap({
        filter: (page) => {
            const url = new URL(page);
            return !['/404', '/en/404'].some(p => url.pathname === p || url.pathname === p + '/');
        },
        serialize(item) {
            if (item.url !== 'https://www.alexander-ohl.com' && item.url !== 'https://www.alexander-ohl.com/') {
                item.url = item.url.replace(/\/+$/, '');
            }
            item.lastmod = lastmod(item.url);
            return item;
        }
    })]
});
