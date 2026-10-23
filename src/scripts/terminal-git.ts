// Hero-Terminal: Ausgaben für „git log“, „git show“ und „stack --json“ (DE und EN).
// Die Commits entstehen beim Build aus dem Werdegang der Seite (src/data/werdegang-git.ts)
// und liegen als JSON im Element #term-git. Jede Funktion liefert fertige HTML-Zeilen;
// alle Inhalte laufen durch esc().

export type Commit = { hash: string; year: string; date: string; subject: string; body?: string; url?: string };

export const esc = (s: string) =>
	s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const ln = (html: string, cls = '') => `<div class="ln${cls ? ' ' + cls : ''}">${html}</div>`;
const HEAD = '<span class="g-deco">(<span class="g-head">HEAD -&gt; </span><span class="g-branch">main</span>)</span>';

export function readCommits(): Commit[] {
	try {
		return JSON.parse(document.getElementById('term-git')?.textContent || '[]');
	} catch {
		return [];
	}
}

// Wie `git log --oneline`, ergänzt um das Jahr. Der Hash ist ein Button für `git show`.
export function gitLog(commits: Commit[], tip: string, reverse = false): string[] {
	const list = reverse ? [...commits].reverse() : commits;
	return [
		...list.map(c => {
			const short = c.hash.slice(0, 7);
			return ln(
				`<button type="button" class="term-hash" data-cmd="git show ${short}">${short}</button> ` +
				(c === commits[0] ? HEAD + ' ' : '') +
				`<span class="g-date">${esc(c.year)}</span> ${esc(c.subject)}`,
				'ln-log'
			);
		}),
		ln(esc(tip), 'ln-dim'),
	];
}

// `git show`, `git show head` oder ein Hash-Präfix ab vier Zeichen
export function findCommit(commits: Commit[], rev: string): Commit | undefined {
	if (rev === '' || rev === 'head') return commits[0];
	if (!/^[0-9a-f]{4,40}$/.test(rev)) return undefined;
	return commits.find(c => c.hash.startsWith(rev));
}

export function gitShow(commits: Commit[], c: Commit): string[] {
	const lines = [
		ln(`<span class="g-deco">commit ${c.hash}</span>${c === commits[0] ? ' ' + HEAD : ''}`),
		ln('Author: Alexander Ohl'),
		ln(`Date:   ${esc(c.date)}`),
		ln(' '),
		ln(esc(c.subject), 'ln-msg'),
	];
	if (c.body) lines.push(ln(' '), ln(esc(c.body), 'ln-msg'));
	if (c.url) lines.push(ln(`<a href="${esc(c.url)}" target="_blank" rel="noopener">${esc(c.url)}</a>`, 'ln-msg'));
	return lines;
}

export function stackJson(stack: Record<string, string[]>): string[] {
	const keys = Object.keys(stack);
	return [
		ln('{'),
		...keys.map((k, i) => ln(
			`  <span class="j-key">${esc(JSON.stringify(k))}</span>: [` +
			stack[k].map(v => `<span class="j-str">${esc(JSON.stringify(v))}</span>`).join(', ') +
			`]${i < keys.length - 1 ? ',' : ''}`,
			'ln-json'
		)),
		ln('}'),
	];
}
