import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Gleiche Konventionen wie pragma-code.de:
// - trailingSlash: never + directory-Build (saubere URLs ohne .html)
// - Sitemap ohne Trailing-Slashes, 404 ausgeschlossen
export default defineConfig({
    site: 'https://www.alexander-ohl.com',
    trailingSlash: 'never',
    build: {
        format: 'directory'
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
