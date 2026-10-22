// Personen-Entität (Schema.org) — einzige Quelle für @id, Profil-Links und den
// Verweis auf Pragma Code. Startseite DE/EN und Blog lesen von hier; vorher
// pflegte jede Seite eine eigene Liste, und die Blog-Person wich mit 8 statt 14
// Profilen, einem Firmenprofil und anderem jobTitle ab (Audit 22.10.2026).
//
// sameAs synchron halten mit:
//   - pragma-code.de/alexander-ohl (Repo modern-it-solutions-astro,
//     src/pages/alexander-ohl.astro, DE + EN)
//   - public/llms.txt, Abschnitt „Profile im Netz“
// Stand 22.10.2026 = pragma-code.de: VK raus (dort seit 02.09.), g.dev auf die
// Zieladresse, Malt ergänzt.

export const SITE_ROOT = 'https://www.alexander-ohl.com';
export const PERSON_ID = `${SITE_ROOT}/#person`;
export const ORGANIZATION_ID = 'https://www.pragma-code.de/#organization';

export const jobTitle = {
	de: 'KI-Automatisierungs-Engineer',
	en: 'AI Automation Engineer'
};

export const personSameAs = [
	'https://www.linkedin.com/in/alexander-ohl/',
	'https://www.xing.com/profile/AlexanderOhl_PragmaCode',
	'https://github.com/aohl1986-ohlcenter',
	'https://me.developers.google.com/u/alexanderohl',
	'https://www.gulp.de/gulp2/g/spezialisten/profil/alexander.ohl',
	'https://www.malt.de/profile/alexander-ohl',
	'https://www.pragma-code.de/alexander-ohl',
	'https://www.facebook.com/alexander.ohl1986/',
	'https://www.instagram.com/alexander.ohl',
	'https://de.pinterest.com/alexander_ohl_/',
	'https://www.youtube.com/channel/UCcnYJ9p6KOQML5FaYyzl2uQ',
	'https://www.behance.net/alexander-ohl',
	'https://winfuture.de/mywf/174860/',
	'https://taplink.cc/alexander.ohl'
];

// Verweis auf die Organization, die pragma-code.de unter derselben @id
// vollständig beschreibt (Adresse, Logo, Gründer).
export const pragmaCodeOrganization = {
	'@type': 'Organization',
	'@id': ORGANIZATION_ID,
	name: 'Pragma-Code',
	legalName: 'Pragma Code LLC',
	url: 'https://www.pragma-code.de'
};
