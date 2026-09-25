// Apex -> www (301). alexander-ohl.com lieferte die Seite unter beiden
// Hostnamen mit HTTP 200 aus (Stand 25.09.2026); der Canonical zeigt zwar auf
// www, eine echte Weiterleitung ist aber eindeutig und buendelt Links.
// Als Pages-Middleware, weil `wrangler pages deploy` im CI den Ordner
// functions/ mit hochlaedt — eine Cloudflare-Redirect-Regel waere die
// Alternative, liegt aber ausserhalb des Repos.
// Alle anderen Hosts (www, *.pages.dev-Vorschauen) laufen unveraendert durch.
export async function onRequest({ request, next }) {
  const url = new URL(request.url);
  if (url.hostname === 'alexander-ohl.com') {
    url.hostname = 'www.alexander-ohl.com';
    return Response.redirect(url.toString(), 301);
  }
  return next();
}
