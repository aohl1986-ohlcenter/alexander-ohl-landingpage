// GET /api/maschinenraum — Live-Status für den Abschnitt „Maschinenraum“.
//
// Das Objekt status.json im R2-Bucket schreibt der lokale Publisher
// (~/.claude/skills/maschinenraum). Diese Function prüft es ein zweites Mal
// gegen dieselbe Whitelist wie der Publisher (pruefe() dort): Was nicht passt,
// wird verworfen, und die Seite zeigt „nicht abrufbar“ statt fremder Inhalte.
// Wer ein Feld oder System ergänzt, ändert beide Stellen.
//
// Binding: R2-Bucket „maschinenraum“ als MASCHINENRAUM
// (Cloudflare → Pages → alexander-ohl → Einstellungen → Bindungen).
// Fehlt das Binding, antwortet die Function mit { ok: false } — die Seite bleibt heil.

const ZUSTAENDE = new Set([
	'aktiv', 'teilweise', 'bei_bedarf', 'pausiert', 'im_aufbau',
	'ueberfaellig', 'fehler', 'unbekannt'
]);

// Erlaubte Zähler je System mit Obergrenze
const WERTE = {
	'morgen-briefing': { ok: 31, von: 31 },
	'website-monitoring': { ok: 2000, von: 2000 },
	'datensicherung': { ok: 10, von: 10 },
	'pagespeed-wache': { seiten: 200, mobil: 100 },
	'gsc-wochenbericht': {},
	'citation-tracker': {},
	'lead-agent': {},
	'reels-radar': {}
};

const DATUM = /^\d{4}-\d{2}-\d{2}$/;
const MONAT = /^\d{4}-\d{2}$/;
const STAND = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:00Z$/;
const SYSTEM_KEYS = new Set(['id', 'zustand', 'zuletzt', 'seit', 'werte']);

const isObj = v => v !== null && typeof v === 'object' && !Array.isArray(v);

// Nicht exportiert: Pages Functions behandeln Exporte als Request-Handler.
function valid(doc) {
	if (!isObj(doc)) return false;
	const keys = Object.keys(doc).sort().join(',');
	if (keys !== 'stand,systeme,v' || doc.v !== 1 || !STAND.test(doc.stand)) return false;
	if (!Array.isArray(doc.systeme) || doc.systeme.length > Object.keys(WERTE).length) return false;
	const seen = new Set();
	for (const s of doc.systeme) {
		if (!isObj(s) || !Object.hasOwn(WERTE, s.id) || seen.has(s.id)) return false;
		seen.add(s.id);
		if (!Object.keys(s).every(k => SYSTEM_KEYS.has(k))) return false;
		if (!ZUSTAENDE.has(s.zustand)) return false;
		if (s.zuletzt != null && !DATUM.test(s.zuletzt)) return false;
		if (s.seit != null && !MONAT.test(s.seit)) return false;
		const werte = s.werte ?? {};
		if (!isObj(werte)) return false;
		for (const [k, v] of Object.entries(werte)) {
			const grenze = WERTE[s.id][k];
			if (grenze === undefined || !Number.isInteger(v) || v < 0 || v > grenze) return false;
		}
	}
	return true;
}

// Bewusst 200 statt 503: Ein Fehlerstatus landet als Konsolenfehler im Browser,
// und Lighthouse zieht dafür bei „Best Practices“ Punkte ab. Die Seite erkennt
// den Fall an { ok: false } (kein Feld systeme) und zeigt „nicht abrufbar“.
const unavailable = () =>
	new Response(JSON.stringify({ ok: false }), {
		status: 200,
		headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' }
	});

export async function onRequestGet({ env }) {
	if (!env.MASCHINENRAUM) return unavailable();
	try {
		const obj = await env.MASCHINENRAUM.get('status.json');
		if (!obj) return unavailable();
		const text = await obj.text();
		if (text.length > 8192) return unavailable();
		const doc = JSON.parse(text);
		if (!valid(doc)) return unavailable();
		return new Response(JSON.stringify(doc), {
			headers: {
				'Content-Type': 'application/json; charset=utf-8',
				'Cache-Control': 'public, max-age=300',
				'X-Content-Type-Options': 'nosniff'
			}
		});
	} catch {
		return unavailable();
	}
}
