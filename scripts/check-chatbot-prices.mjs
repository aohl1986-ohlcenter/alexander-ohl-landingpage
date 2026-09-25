// Gate (läuft als "prebuild"): keine hartkodierten Euro-Beträge im Chatbot.
//
// Seit 25.09.2026 holt src/scripts/chatbot-personal.js alle Preise zur
// Laufzeit von https://www.pragma-code.de/chatbot-prices.json — gebaut aus
// derselben Quelle wie /pakete-preise auf pragma-code.de. Vorher stand jeder
// Preis hier als Text und blieb beim Preis-Update vom 23.09. stehen.
// Außerdem gesperrt: BAFA-Förderaussagen (Pragma Code ist nicht als
// BAFA-Berater registriert, siehe AGENTS.md im Pragma-Repo) und
// Stundenkontingente in Tarifen.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const REPO = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const FILE = path.join(REPO, 'src/scripts/chatbot-personal.js');
const label = 'check-chatbot-prices';

const rules = [
  { re: /\d[\d.,]*\s?€|€\s?\d/, why: 'Euro-Betrag — gehört in src/data/pricing.ts im Pragma-Repo' },
  { re: /bafa|förderquote|foerderquote/i, why: 'BAFA-/Förderaussage' },
  { re: /\((bis|up to) \d+ ?h\)/i, why: 'Stundenkontingent' },
];
const hits = [];
fs.readFileSync(FILE, 'utf8').split('\n').forEach((text, i) => {
  for (const r of rules) if (r.re.test(text)) hits.push({ line: i + 1, why: r.why, text });
});

if (hits.length) {
  console.error(`\n✗ ${label}: ${hits.length} Fundstelle(n) in src/scripts/chatbot-personal.js.`);
  for (const h of hits.slice(0, 10)) console.error(`    Zeile ${h.line} (${h.why}): ${h.text.trim().slice(0, 110)}`);
  process.exit(1);
}
console.log(`✓ ${label}: keine hartkodierten Preise, BAFA- oder Stundenangaben im Chatbot.`);
