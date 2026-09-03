/* ============================================================
   alexander-ohl.com · Blog — Single Source of Truth
   ------------------------------------------------------------
   Metadaten aller Fachartikel. Gespeist werden daraus:
   - /blog (Übersicht + Blog-Schema)
   - BlogPost.astro (BlogPosting-JSON-LD, verwandte Artikel)
   - index.astro (Sektion 05 — Analysen & Fachartikel)
   Reihenfolge im Array = Reihenfolge auf der Übersicht.
   ============================================================ */

export interface Post {
	slug: string;
	/** H1 auf der Artikelseite */
	title: string;
	/** <title> — inkl. Marke, ≤ 60 Zeichen wo möglich */
	metaTitle: string;
	/** meta description, 150–160 Zeichen */
	metaDescription: string;
	/** Teaser auf der Übersicht und in „Weiterführende Artikel" */
	excerpt: string;
	/** Lede unter der H1 */
	lede: string;
	category: string;
	/** Fokus-Keyword zuerst — landet in keywords des BlogPosting-Schemas */
	tags: string[];
	published: string;
	updated: string;
	readingMinutes: number;
	ogImage: string;
	/** Titelbild-Basisname unter /assets/blog/ — Varianten -400/-800/-1376.webp */
	hero: string;
	/** Kurzbeschreibung des Titelbilds für Screenreader */
	heroAlt: string;
	/** Slugs verwandter Artikel (2–3) */
	related: string[];
	/** passende Pragma-Code-Leistungsseite */
	service: { label: string; url: string };
}

export const posts: Post[] = [
	{
		slug: 'ki-automatisierung-mittelstand-2026',
		title: 'KI-Automatisierung im Mittelstand 2026: vom Pilot zur Produktion',
		metaTitle: 'KI-Automatisierung im Mittelstand 2026 | Alexander Ohl',
		metaDescription:
			'Warum 2026 die meisten KI-Pilotprojekte im Mittelstand scheitern — und wie Sie mit n8n, RAG und klaren ROI-Kennzahlen Automatisierung produktiv in Betrieb nehmen.',
		excerpt:
			'Rund 40 % der deutschen Mittelständler nutzen KI produktiv — die Mehrheit der Pilotprojekte kommt trotzdem nie in den Betrieb. Was den Unterschied macht: Prozessauswahl, Datenzugriff, Fehlerbehandlung und eine ehrliche ROI-Rechnung.',
		lede: 'Der Sprung vom beeindruckenden Prototyp zum belastbaren Produktivsystem ist die eigentliche Hürde der KI-Automatisierung. Dieser Leitfaden zeigt, welche Prozesse sich rechnen, wie eine wartbare n8n- und RAG-Architektur aussieht und woran Projekte im DACH-Mittelstand konkret scheitern.',
		category: 'KI-Automatisierung',
		tags: ['KI-Automatisierung Mittelstand', 'n8n', 'RAG', 'KI-Agenten', 'Prozessautomatisierung', 'Shadow AI'],
		published: '2026-09-02',
		updated: '2026-09-02',
		readingMinutes: 14,
		ogImage: '/assets/blog/og-ki-automatisierung-mittelstand-2026.jpg',
		hero: '/assets/blog/ki-automatisierung-mittelstand-2026',
		heroAlt: 'Automatisierte Rechnungsprüfung: eingehende Belege laufen durch eine Validierungsstufe, geprüfte Datensätze gehen weiter an das Zielsystem.',
		related: ['systemintegration-api-first-erp-shop', 'nis2-eu-ai-act-cra-compliance-2026'],
		service: { label: 'KI-Automatisierung', url: 'https://www.pragma-code.de/ki-automatisierung' }
	},
	{
		slug: 'systemintegration-api-first-erp-shop',
		title: 'API-first statt Insellösungen: ERP, Shop, CRM und KI sauber verbinden',
		metaTitle: 'Systemintegration API-first: ERP, Shop & CRM | Alexander Ohl',
		metaDescription:
			'Integrationsarchitektur für den Mittelstand: Legacy-ERP anbinden, Event-driven statt Polling, iPaaS gegen self-hosted n8n — mit Kostenrahmen und Migrationspfad.',
		excerpt:
			'Die teuerste Integration ist die, die niemand dokumentiert hat. Ein Vorgehen für belastbare Schnittstellen zwischen ERP, Shop, CRM und KI-Diensten — inklusive der Frage, wann iPaaS günstiger ist als Eigenbau.',
		lede: 'Zwischen ERP, Shop, CRM, Buchhaltung und KI-Diensten liegen im Mittelstand meist gewachsene Punkt-zu-Punkt-Verbindungen. Dieser Artikel zeigt, wie eine API-first-Architektur aussieht, die neue Systeme aufnehmen kann, ohne dass jede Anbindung ein Sonderfall wird.',
		category: 'Integration',
		tags: ['Systemintegration', 'API-first', 'ERP-Anbindung', 'Middleware', 'iPaaS', 'Event-driven Architecture'],
		published: '2026-09-02',
		updated: '2026-09-02',
		readingMinutes: 15,
		ogImage: '/assets/blog/og-systemintegration-api-first-erp-shop.jpg',
		hero: '/assets/blog/systemintegration-api-first-erp-shop',
		heroAlt: 'Vier Systeme — Datenbank, Shop, KI-Dienst und CRM — sind sternförmig an eine zentrale Integrationsschicht angebunden statt untereinander.',
		related: ['ki-automatisierung-mittelstand-2026', 'agentic-commerce-headless-shop-2026'],
		service: { label: 'Webentwicklung', url: 'https://www.pragma-code.de/webentwicklung' }
	},
	{
		slug: 'geo-statt-seo-ki-sichtbarkeit-2026',
		title: 'GEO statt SEO: das technische Fundament für Sichtbarkeit in KI-Suchen',
		metaTitle: 'GEO statt SEO 2026: Sichtbarkeit in KI-Suchen | Alexander Ohl',
		metaDescription:
			'Generative Engine Optimization praktisch: Entitäten und Schema.org, llms.txt, Crawler-Zugang für GPTBot und ClaudeBot — und wie Sie KI-Zitationen tatsächlich messen.',
		excerpt:
			'Zero-Click ist der Normalfall geworden. Wer in ChatGPT, Perplexity und Claude nicht als Entität existiert, taucht in der Vorauswahl nicht auf. Was technisch dahintersteckt — und was messbar Wirkung zeigt.',
		lede: 'Generative Engine Optimization wird oft als Marketing-Etikett verkauft. Tatsächlich ist sie überwiegend Technik: strukturierte Entitäten, saubere Crawler-Zugänge, zitierfähige Inhaltsstruktur und ein Monitoring, das nicht auf Klicks basiert.',
		category: 'SEO & GEO',
		tags: ['GEO', 'Generative Engine Optimization', 'llms.txt', 'Schema.org', 'KI-Sichtbarkeit', 'Zero-Click'],
		published: '2026-09-02',
		updated: '2026-09-02',
		readingMinutes: 15,
		ogImage: '/assets/blog/og-geo-statt-seo-ki-sichtbarkeit-2026.jpg',
		hero: '/assets/blog/geo-statt-seo-ki-sichtbarkeit-2026',
		heroAlt: 'Eine KI-Antwort zitiert eine verifizierte Unternehmens-Entität, die aus einem strukturierten Wissensgraphen stammt; unstrukturierte Websites bleiben im Hintergrund.',
		related: ['agentic-commerce-headless-shop-2026', 'ki-automatisierung-mittelstand-2026'],
		service: { label: 'SEO & GEO', url: 'https://www.pragma-code.de/seo-content' }
	},
	{
		slug: 'agentic-commerce-headless-shop-2026',
		title: 'Agentic Commerce: Shops, die von KI-Agenten gefunden und gekauft werden',
		metaTitle: 'Agentic & Headless Commerce 2026 | Alexander Ohl',
		metaDescription:
			'Produktdaten als Rankingfaktor für KI-Agenten, Headless-Architektur mit WooCommerce, Shopify und JTL-Shop — plus die Performance- und Feed-Basis, die wirklich zählt.',
		excerpt:
			'Wenn ein KI-Agent die Vorauswahl trifft, entscheidet die Qualität Ihrer Produktdaten über den Umsatz — nicht das Bannerdesign. Was Headless-Architektur und maschinenlesbare Feeds konkret bedeuten.',
		lede: 'Die Kaufreise beginnt zunehmend im Chatfenster statt in der Shop-Suche. Dieser Artikel zeigt, welche Datenqualität und welche Architektur ein Shop braucht, damit KI-Agenten ihn korrekt verstehen, vergleichen und empfehlen können.',
		category: 'E-Commerce',
		tags: ['Agentic Commerce', 'Headless Commerce', 'Produktdaten', 'WooCommerce', 'Shopify', 'JTL-Shop'],
		published: '2026-09-02',
		updated: '2026-09-02',
		readingMinutes: 15,
		ogImage: '/assets/blog/og-agentic-commerce-headless-shop-2026.jpg',
		hero: '/assets/blog/agentic-commerce-headless-shop-2026',
		heroAlt: 'Ein KI-Agent liest die strukturierten Produktdaten eines Bauteils aus — Kennung, technische Daten, Kompatibilität und Verfügbarkeit — und löst darüber den Kauf aus.',
		related: ['geo-statt-seo-ki-sichtbarkeit-2026', 'systemintegration-api-first-erp-shop'],
		service: { label: 'E-Commerce', url: 'https://www.pragma-code.de/e-commerce' }
	},
	{
		slug: 'nis2-eu-ai-act-cra-compliance-2026',
		title: 'NIS2, EU AI Act und CRA: die technische Umsetzung statt Papier-Compliance',
		metaTitle: 'NIS2, EU AI Act & CRA 2026: Umsetzung | Alexander Ohl',
		metaDescription:
			'Fristen, Betroffenheit und konkrete technische Maßnahmen zu NIS2, EU AI Act und Cyber Resilience Act — KI-Inventar, SBOM, Logging und Meldeprozesse für den Mittelstand.',
		excerpt:
			'Drei Regelwerke greifen gleichzeitig — und alle drei enden in denselben technischen Artefakten: Inventar, Nachweis, Logging, Meldeweg. Was Sie tatsächlich bauen müssen, und in welcher Reihenfolge.',
		lede: 'NIS2, EU AI Act und Cyber Resilience Act werden gern als Papierübung behandelt. In der Praxis lassen sich die meisten Pflichten auf wenige technische Artefakte zurückführen, die ohnehin jedem Betrieb guttun.',
		category: 'IT-Sicherheit',
		tags: ['NIS2', 'EU AI Act', 'Cyber Resilience Act', 'IT-Sicherheit Mittelstand', 'SBOM', 'DSGVO'],
		published: '2026-09-02',
		updated: '2026-09-02',
		readingMinutes: 16,
		ogImage: '/assets/blog/og-nis2-eu-ai-act-cra-compliance-2026.jpg',
		hero: '/assets/blog/nis2-eu-ai-act-cra-compliance-2026',
		heroAlt: 'Ein Serverschrank unter mehreren Schutzebenen, daneben eine Komponentenliste des Systems und ein laufender Countdown für die 24-Stunden-Meldefrist.',
		related: ['ki-automatisierung-mittelstand-2026', 'systemintegration-api-first-erp-shop'],
		service: { label: 'KI-Automatisierung', url: 'https://www.pragma-code.de/ki-automatisierung' }
	}
];

export const bySlug = (slug: string): Post => {
	const post = posts.find(p => p.slug === slug);
	if (!post) throw new Error(`Unbekannter Blog-Slug: ${slug}`);
	return post;
};

export const formatDate = (iso: string): string =>
	new Date(`${iso}T00:00:00Z`).toLocaleDateString('de-DE', {
		day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC'
	});
