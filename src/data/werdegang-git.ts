// Werdegang als Commit-Historie für „git log“ im Hero-Terminal (DE und EN).
// Läuft beim Build: Die Seite reicht ihre `timeline` und `education` herein und bettet
// das Ergebnis als JSON (#term-git) ein. Keine eigenen Inhalte hier, nur Umformung —
// wer eine Station ändert, ändert sie in der Seite.
import { createHash } from 'node:crypto';
import type { Commit } from '../scripts/terminal-git';

type Station = { year: string; role: string; org: string; orgUrl?: string; text: string };
type Schule = { year: string; title: string; org: string };

// „2010–2013“ zählt zum Endjahr
const endYear = (date: string) => Number(date.slice(-4));

export function werdegangCommits(timeline: Station[], education: Schule[]): Commit[] {
	const items = [
		...timeline.map(t => ({ date: t.year, subject: `feat: ${t.role} @ ${t.org}`, body: t.text, url: t.orgUrl })),
		...education.map(e => ({ date: e.year, subject: `edu: ${e.title} @ ${e.org}` })),
	];
	// Neueste zuerst wie bei git log; im selben Jahr bleibt die Reihenfolge der Quelle
	return items
		.map((c, i) => ({ c, i }))
		.sort((a, b) => endYear(b.c.date) - endYear(a.c.date) || a.i - b.i)
		.map(({ c }) => ({
			...c,
			year: c.date.slice(-4),
			hash: createHash('sha1').update(`${c.date}\n${c.subject}`).digest('hex'),
		}));
}

// Für <script type="application/json">: „</script>“ im Inhalt darf das Element nicht schließen
export const jsonForScript = (value: unknown) => JSON.stringify(value).replace(/</g, '\\u003c');
