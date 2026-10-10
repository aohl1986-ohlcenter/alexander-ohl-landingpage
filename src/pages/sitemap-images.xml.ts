// Bilder-Sitemap für die Werdegang-Fotos (DE + EN), damit Google Images sie sicher findet —
// die Fotos laden per loading="lazy". Liest public/assets/werdegang/ beim Build, bleibt also
// automatisch synchron. Nur die 960er-Variante, die 480er ist dasselbe Bild.
// Google wertet in Bilder-Sitemaps nur noch <image:loc> aus (caption/title seit 2022 ignoriert).
import fs from 'node:fs';
import path from 'node:path';
import type { APIRoute } from 'astro';

const SITE = 'https://www.alexander-ohl.com';
const PAGES = [`${SITE}`, `${SITE}/en`];

export const GET: APIRoute = () => {
	const dir = path.join(process.cwd(), 'public/assets/werdegang');
	const images = fs.readdirSync(dir).filter(f => f.endsWith('-960.webp')).sort();
	const imageTags = images.map(f => `\t\t<image:image><image:loc>${SITE}/assets/werdegang/${f}</image:loc></image:image>`).join('\n');
	const urls = PAGES.map(loc => `\t<url>\n\t\t<loc>${loc}</loc>\n${imageTags}\n\t</url>`).join('\n');
	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls}
</urlset>
`;
	return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
