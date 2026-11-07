// Apex -> www (301). alexander-ohl.com lieferte die Seite unter beiden
// Hostnamen mit HTTP 200 aus (Stand 25.09.2026); der Canonical zeigt zwar auf
// www, eine echte Weiterleitung ist aber eindeutig und buendelt Links.
// Als Pages-Middleware, weil `wrangler pages deploy` im CI den Ordner
// functions/ mit hochlaedt — eine Cloudflare-Redirect-Regel waere die
// Alternative, liegt aber ausserhalb des Repos.
// Alle anderen Hosts (www, *.pages.dev-Vorschauen) laufen unveraendert durch.
//
// /termin -> persoenliche Google-Buchungsseite (302, nicht 301: das Ziel kann
// sich aendern, wenn der Terminplan neu angelegt wird, und Browser sollen es
// nicht dauerhaft zwischenspeichern). Steht vor der Apex-Regel, damit auch
// alexander-ohl.com/termin mit einem einzigen Sprung ankommt.
const TERMIN_ZIEL = 'https://calendar.app.google/UNRW9FPzjujE3JH38';

export async function onRequest({ request, next }) {
  const url = new URL(request.url);
  if (url.pathname === '/termin' || url.pathname === '/termin/') {
    return Response.redirect(TERMIN_ZIEL, 302);
  }
  if (url.hostname === 'alexander-ohl.com') {
    url.hostname = 'www.alexander-ohl.com';
    return Response.redirect(url.toString(), 301);
  }
  return next();
}
