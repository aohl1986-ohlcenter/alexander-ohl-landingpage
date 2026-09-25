import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

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
        format: 'file'
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
            return item;
        }
    })]
});
