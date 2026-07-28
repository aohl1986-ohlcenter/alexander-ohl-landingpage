// chatbot-personal.js — Knowledge Base & Logic für Alexander Ohl (Personal Branding)
// Fokus 1: Alexander Ohl als Person, Werdegang, Skills, Referenzen & Expertise.
// Fokus 2: Pragma-Code als Gründer-Agentur mit Dienstleistungen, Paketen & Preisen.

const TYPES = {
  'landing-page': { 
    label: { de: 'Landing Page (1–3 Seiten)', en: 'Landing Page (1-3 pages)' }, 
    pMin: 800, pMax: 1850, wMin: 1, wMax: 2, pkg: 'A' 
  },
  'new-website': { 
    label: { de: 'Neue Unternehmens-Website', en: 'New Corporate Website' }, 
    pMin: 2300, pMax: 7400, wMin: 3, wMax: 6, pkg: 'B' 
  },
  'website-relaunch': { 
    label: { de: 'Website-Relaunch', en: 'Website Relaunch' }, 
    pMin: 2800, pMax: 12000, wMin: 4, wMax: 7, pkg: 'B' 
  },
  'online-shop': { 
    label: { de: 'Online-Shop (Shopify/Woo)', en: 'Online Shop (Shopify/Woo)' }, 
    pMin: 3700, pMax: 11000, wMin: 6, wMax: 12, pkg: 'D' 
  },
  'custom-app': { 
    label: { de: 'Web-App / Custom Software', en: 'Web App / Custom Software' }, 
    pMin: 7400, pMax: 23000, wMin: 8, wMax: 16, pkg: 'A' 
  },
  'automation': { 
    label: { de: 'Automatisierung / Workflow', en: 'Automation / Workflow' }, 
    pMin: 1900, pMax: 7400, wMin: 2, wMax: 5, pkg: 'C' 
  }
};

const ADDONS = {
  'design': { 
    label: { de: 'Individuelles Design', en: 'Custom Design' }, 
    minPct: 0.15, maxPct: 0.25, wMin: 1, wMax: 2 
  },
  'multilang': { 
    label: { de: 'Mehrsprachigkeit', en: 'Multilingual' }, 
    minPct: 0.10, maxPct: 0.20, wMin: 1, wMax: 1 
  },
  'integrations': { 
    label: { de: 'Externe Integrationen', en: 'External Integrations' }, 
    minPct: 0.15, maxPct: 0.30, wMin: 1, wMax: 3 
  },
  'content': { 
    label: { de: 'Content & Texte von Alexander', en: 'Content & Texts by Alexander' }, 
    minPct: 0.10, maxPct: 0.15, wMin: 1, wMax: 2 
  },
  'seo': { 
    label: { de: 'SEO & GEO Optimierung', en: 'SEO & GEO Optimization' }, 
    minPct: 0.10, maxPct: 0.20, wMin: 1, wMax: 2 
  },
  'maintenance': { 
    label: { de: 'Laufende Wartung & Retainer', en: 'Ongoing Maintenance & Retainer' }, 
    minPct: 0.05, maxPct: 0.10, wMin: 0, wMax: 0 
  }
};

const PKG = {
  'A': { name: { de: 'Web & Technik', en: 'Web & Tech' }, price: 390 },
  'B': { name: { de: 'SEO & Content', en: 'SEO & Content' }, price: 890 },
  'C': { name: { de: 'Automatisierung', en: 'Automation' }, price: 590 },
  'D': { name: { de: 'E-Commerce', en: 'E-Commerce' }, price: 690 }
};

// ── Q&A Topics (Personal Branding Focus 1 + Pragma-Code Focus 2) ──────────────
const topics = [
  {
    id: 'about-alexander',
    keywords: [
      'alexander', 'ohl', 'über mich', 'ueber mich', 'wer bist du', 'wer ist alexander',
      'profil', 'hintergrund', 'inhaber', 'biographie', 'bio', 'person', 'experience',
      'who is alexander', 'about alexander', 'who are you', 'über alexander'
    ],
    de: `👋 Ich bin <b>Alexander Ohl</b> — KI-Automatisierungs-Engineer, Full-Stack-Entwickler und Gründer von <b>Pragma-Code</b>.<br/><br/>
Seit über <b>15 Jahren</b> entwickle ich digitale Systeme und verknüpfe modernste Softwarearchitekturen mit praxistauglicher KI-Automatisierung für mittelständische Unternehmen im DACH-Raum.<br/><br/>
📍 <b>Stationen:</b> Marine-Soldat (Fregatte Bayern) → Systemadministration → Automatisierungstechnik → Marketing & PPC → Agenturgründung → KI-Automatisierungs-Engineer & Gründer von Pragma-Code.<br/><br/>
🔗 <a href="#werdegang">Werdegang ansehen</a> | <a href="#expertise">Expertise & Skills</a> | <a href="https://www.pragma-code.de/alexander-ohl" target="_blank" rel="noopener">Pragma-Code Profil</a>`,
    en: `👋 I am <b>Alexander Ohl</b> — AI Automation Engineer, Full-Stack Developer, and founder of <b>Pragma-Code</b>.<br/><br/>
For over <b>15 years</b>, I have been building digital systems, combining state-of-the-art software architectures with pragmatic AI automation for SMEs across the DACH region.<br/><br/>
📍 <b>Background:</b> Navy serviceman (Frigate Bayern) → System Administration → Automation Engineering → Marketing & PPC → Agency Founder → AI Automation Engineer & Founder of Pragma-Code.<br/><br/>
🔗 <a href="#career">View Career Timeline</a> | <a href="#expertise">Expertise & Skills</a> | <a href="https://www.pragma-code.de/alexander-ohl" target="_blank" rel="noopener">Pragma-Code Profile</a>`
  },
  {
    id: 'werdegang',
    keywords: [
      'werdegang', 'karriere', 'stationen', 'lebenslauf', 'cv', 'erfahrung', 'geschichte',
      'vergangenheit', 'marine', 'bundeswehr', 'kikxxl', 'est', 'juedische gemeinde',
      'netrise', 'ohlcenter', 'studio 360', 'next choice', 'career', 'timeline', 'background'
    ],
    de: `📜 <b>Beruflicher Werdegang von Alexander Ohl:</b><br/><br/>
• <b>2024–heute:</b> Gründer & KI-Automatisierungs-Engineer bei <b>Pragma-Code</b><br/>
• <b>2023:</b> PPC Manager & Funnel-Optimierung bei Next Choice Agency (u. a. Alando Palais)<br/>
• <b>2020–2023:</b> Gründer der internationalen Digitalagentur Studio 360°<br/>
• <b>2018–2020:</b> Freiberuflicher IT-Freelancer (Remote, bis zu 7 Parallelprojekte)<br/>
• <b>2016–2018:</b> Gründer & Geschäftsführer OHLcenter EDV (Web & IT-Services)<br/>
• <b>2013–2016:</b> Marketing Manager bei Netrise Solution (Cisco/HP Hardware)<br/>
• <b>2012–2013:</b> IT-Systemadministrator bei der Jüdischen Gemeinde Osnabrück<br/>
• <b>2010–2012:</b> Elektroniker für Automatisierungstechnik bei EST GmbH<br/>
• <b>2009–2010:</b> Systemadmin bei KiKxxl GmbH<br/>
• <b>2005–2009:</b> SaZ 4 bei der Deutschen Marine (Fregatte „Bayern" F217)<br/><br/>
🔗 <a href="#werdegang">Vollständigen Werdegang auf der Seite ansehen</a>`,
    en: `📜 <b>Alexander Ohl's Career Timeline:</b><br/><br/>
• <b>2024–present:</b> Founder & AI Automation Engineer at <b>Pragma-Code</b><br/>
• <b>2023:</b> PPC Manager & Funnel Optimization at Next Choice Agency (e.g. Alando Palais)<br/>
• <b>2020–2023:</b> Founder of international digital agency Studio 360°<br/>
• <b>2018–2020:</b> Freelance IT Consultant & Web Developer (up to 7 parallel clients)<br/>
• <b>2016–2018:</b> Founder & Managing Director of OHLcenter EDV<br/>
• <b>2013–2016:</b> Marketing Manager at Netrise Solution (Cisco/HP Hardware)<br/>
• <b>2012–2013:</b> IT System Administrator at Jewish Community Osnabrück<br/>
• <b>2010–2012:</b> Electronics Technician for Automation at EST GmbH<br/>
• <b>2009–2010:</b> IT System Administrator at KiKxxl GmbH<br/>
• <b>2005–2009:</b> Navy Serviceman aboard frigate "Bayern" (F217)<br/><br/>
🔗 <a href="#career">View full timeline on page</a>`
  },
  {
    id: 'ausbildung',
    keywords: [
      'ausbildung', 'studium', 'hochschule', 'mechatronik', 'abitur', 'schule',
      'informatik', 'osnabrueck', 'bersenbrueck', 'sophie scholl', 'education', 'degree', 'university'
    ],
    de: `🎓 <b>Schul- & Hochschulausbildung:</b><br/><br/>
• <b>2013:</b> Mechatronik an der Hochschule Osnabrück (Studium abgebrochen)<br/>
• <b>2009:</b> Abitur über den 2. Bildungsweg am Abendgymnasium Sophie Scholl<br/>
• <b>2004:</b> Berufsfachschule Informatik an der BBS Bersenbrück<br/>
• <b>2004:</b> Realschulabschluss an der Realschule Neuenkirchen<br/><br/>
Die Kombination aus Mechatronik, Informatik und jahrelanger Praxiserfahrung prägt Alexanders pragmatischen IT-Ingenieurs-Ansatz.`,
    en: `🎓 <b>Education:</b><br/><br/>
• <b>2013:</b> Mechatronics at Osnabrück University of Applied Sciences (studies discontinued)<br/>
• <b>2009:</b> Abitur (Evening Grammar School Sophie Scholl)<br/>
• <b>2004:</b> Vocational College for Computer Science at BBS Bersenbrück<br/>
• <b>2004:</b> Secondary School Certificate (Realschule Neuenkirchen)<br/><br/>
The synergy of mechatronics, computer science, and engineering experience forms Alexander's pragmatic approach to modern software.`
  },
  {
    id: 'skills',
    keywords: [
      'skills', 'kenntnisse', 'stack', 'technologien', 'programmierung', 'sprachen',
      'react', 'nextjs', 'astro', 'typescript', 'python', 'php', 'n8n', 'rag', 'ki agenten',
      'docker', 'git', 'seo', 'geo', 'tech stack', 'technologie', 'frameworks'
    ],
    de: `⚡ <b>Tech-Stack & Kernkompetenzen:</b><br/><br/>
• <b>Frontend & Web:</b> React, Next.js, Astro, TypeScript, Tailwind CSS, Vue.js<br/>
• <b>Backend & Daten:</b> Node.js, Python, PHP, REST APIs, SQL, Docker, Git<br/>
• <b>KI & Automatisierung:</b> n8n, RAG-Systeme, LLM-Agenten, RPA, Zapier/Make<br/>
• <b>Sichtbarkeit & E-Commerce:</b> SEO, GEO (Generative Engine Optimization), Shopify, WooCommerce, JTL-Shop<br/><br/>
🔗 <a href="#expertise">Zu den Expertise-Bereichen</a>`,
    en: `⚡ <b>Tech Stack & Core Competencies:</b><br/><br/>
• <b>Frontend & Web:</b> React, Next.js, Astro, TypeScript, Tailwind CSS, Vue.js<br/>
• <b>Backend & Data:</b> Node.js, Python, PHP, REST APIs, SQL, Docker, Git<br/>
• <b>AI & Automation:</b> n8n, RAG systems, LLM agents, RPA, Zapier/Make<br/>
• <b>Visibility & E-Commerce:</b> SEO, GEO (Generative Engine Optimization), Shopify, WooCommerce, JTL-Shop<br/><br/>
🔗 <a href="#expertise">Explore Expertise Sections</a>`
  },
  {
    id: 'referenzen',
    keywords: [
      'referenzen', 'projekte', 'kunden', 'beispiele', 'imkerpur', 'kk bau',
      'alando', 'kasinopark', 'shooting solutions', 'yms', 'portfolio', 'cases', 'references'
    ],
    de: `📁 <b>Ausgewählte Kundenprojekte & Referenzen:</b><br/><br/>
• <b>ImkerPur (imkerpur.de):</b> JTL-Shop Erweiterung & SEO-Optimierung<br/>
• <b>K&K Bau GbR (k-kbau.de):</b> Komplett-Relaunch & SEO für Bauunternehmen<br/>
• <b>Alando Palais (alando-palais.de):</b> Google-Business & Reputation (in Kooperation mit Next Choice)<br/>
• <b>Kasinopark (kasinopark.com):</b> Mehrjährige Webentwicklung & SEO-Betreuung<br/>
• <b>Shooting Solutions (shooting-solutions.de):</b> 6-Monate SEO-Sprint (Backlinks, Content, Local SEO)<br/>
• <b>YMS Osnabrück (yms-osnabrueck.de):</b> SEO, Sichtbarkeit & Social Media<br/><br/>
🔗 <a href="#referenzen">Referenzen im Detail auf der Seite ansehen</a>`,
    en: `📁 <b>Selected Client Projects & Case Studies:</b><br/><br/>
• <b>ImkerPur (imkerpur.de):</b> JTL-Shop expansion & organic SEO<br/>
• <b>K&K Bau GbR (k-kbau.de):</b> Full website design, build & SEO<br/>
• <b>Alando Palais (alando-palais.de):</b> Google Business & reputation (in cooperation with Next Choice)<br/>
• <b>Kasinopark (kasinopark.com):</b> Multi-year web development & SEO care<br/>
• <b>Shooting Solutions (shooting-solutions.de):</b> 6-month SEO sprint<br/>
• <b>YMS Osnabrück (yms-osnabrueck.de):</b> Local SEO & social media<br/><br/>
🔗 <a href="#references">View detailed case studies on page</a>`
  },
  {
    id: 'pragma-code',
    keywords: [
      'pragma code', 'pragma', 'agentur', 'firma', 'unternehmen', 'dienstleistungen',
      'services', 'dienstleister', 'beratung', 'consulting', 'agency'
    ],
    de: `🏢 <b>Über Alexanders Agentur Pragma-Code:</b><br/><br/>
Alexander Ohl führt <b>Pragma-Code</b> als spezialisiertes IT-Consulting & Entwicklungs-Unternehmen für den DACH-Raum.<br/><br/>
<b>Drei Kernsäulen:</b><br/>
1. <b>KI & Automatisierung</b> (n8n-Workflows, RAG, KI-Sprint ab 690 €)<br/>
2. <b>Sichtbarkeit (SEO & GEO)</b> (Google-Ranking, KI-Sichtbarkeits-Monitoring ab 149 €/Monat)<br/>
3. <b>Web & E-Commerce</b> (Astro, Next.js, WordPress-/TYPO3-Migrationen, Shopify, WooCommerce)<br/><br/>
💡 Pragma-Code unterstützt KMU bei der Beantragung staatlicher <b>BAFA-Beratungszuschüsse</b> (50–80 % Förderquote).<br/><br/>
🔗 <a href="https://www.pragma-code.de" target="_blank" rel="noopener">www.pragma-code.de besuchen</a> | <a href="https://www.pragma-code.de/pakete-preise" target="_blank" rel="noopener">Pakete & Preise von Pragma-Code</a>`,
    en: `🏢 <b>About Alexander's Agency Pragma-Code:</b><br/><br/>
Alexander Ohl operates <b>Pragma-Code</b> as a specialized IT consulting & engineering consultancy for the DACH region.<br/><br/>
<b>Three Core Pillars:</b><br/>
1. <b>AI & Automation</b> (n8n workflows, RAG, AI Sprint from €690)<br/>
2. <b>Visibility (SEO & GEO)</b> (Google ranking, AI Visibility Monitoring from €149/mo)<br/>
3. <b>Web & E-Commerce</b> (Astro, Next.js, WordPress/TYPO3 migrations, Shopify, WooCommerce)<br/><br/>
💡 Pragma-Code supports SMEs in applying for German <b>BAFA consulting grants</b> (50–80% funding rate).<br/><br/>
🔗 <a href="https://www.pragma-code.de/en" target="_blank" rel="noopener">Visit www.pragma-code.de</a> | <a href="https://www.pragma-code.de/en/packages-pricing" target="_blank" rel="noopener">Pragma-Code Packages & Pricing</a>`
  },
  {
    id: 'preise-pakete',
    keywords: [
      'preise', 'kosten', 'pakete', 'retainer', 'tarif', 'tarife', 'festpreis', 'bafa',
      'foerderung', 'zuschuss', 'stundensatz', 'budget', 'pricing', 'packages', 'rates',
      'prototyp', 'prototype', 'pflichtenheft', 'wartung', 'care', 'maintenance',
      'ki sprint', 'ai sprint', 'prozess check', 'audit', 'bfsg', 'migration', 'was kostet'
    ],
    de: `💰 <b>Preise & Betreuungstarife bei Pragma-Code:</b><br/><br/>
<b>📦 Monatliche Umsetzungstarife</b> (6 Mt. Laufzeit, 2 Mt. gratis bei Jahreszahlung):<br/>
• <b>Web & Technik</b> — 390 €/Monat (bis 4 h)<br/>
• <b>SEO & Content</b> — 890 €/Monat (bis 8 h) ⭐ Beliebt<br/>
• <b>Automatisierung</b> — 590 €/Monat (bis 6 h)<br/>
• <b>E-Commerce</b> — 690 €/Monat (bis 6 h)<br/>
• <b>Care-Only</b> (nur Wartung & Uptime) — ab 190 €/Monat (3 Mt.)<br/><br/>
<b>⚡ Einmal-Festpreise:</b><br/>
• Website-Tiefenanalyse — ab 490 €<br/>
• Der Prozess-Check — 690 € (wird beim Sprint angerechnet)<br/>
• BFSG-Compliance-Check — 950 €<br/>
• AI Visibility Audit — 1.200 €<br/>
• Der KI-Sprint (n8n) — 2.900 €<br/>
• WP / TYPO3 Migration — ab 3.500 €<br/>
• Fokus-Prototyp (statt Pflichtenheft) — 4.900 €<br/>
• Automation Scale — ab 5.900 €<br/>
• Erweiterter Prototyp — 7.500 €<br/><br/>
💡 <b>BAFA-Beratungszuschüsse</b> für KMU (50–80 % Förderquote) — Pragma-Code unterstützt bei der Beantragung.<br/><br/>
🔗 <a href="https://www.pragma-code.de/pakete-preise" target="_blank" rel="noopener">Vollständige Preisliste ansehen</a>`,
    en: `💰 <b>Pricing & Retainer Plans at Pragma-Code:</b><br/><br/>
<b>📦 Monthly Retainer Plans</b> (6-mo minimum; 2 months free with annual billing):<br/>
• <b>Web & Tech</b> — €390/mo (up to 4 h)<br/>
• <b>SEO & Content</b> — €890/mo (up to 8 h) ⭐ Popular<br/>
• <b>Automation</b> — €590/mo (up to 6 h)<br/>
• <b>E-Commerce</b> — €690/mo (up to 6 h)<br/>
• <b>Care-Only</b> (maintenance & uptime only) — from €190/mo (3-mo minimum)<br/><br/>
<b>⚡ Fixed-Price Packages:</b><br/>
• Website Deep Dive Analysis — from €490<br/>
• The Process Check — €690 (credited towards the Sprint)<br/>
• BFSG Accessibility Check — €950<br/>
• AI Visibility Audit — €1,200<br/>
• The AI Sprint (n8n) — €2,900<br/>
• WP / TYPO3 Migration — from €3,500<br/>
• Focus Prototype (instead of a spec document) — €4,900<br/>
• Automation Scale — from €5,900<br/>
• Extended Prototype — €7,500<br/><br/>
💡 <b>BAFA consulting grants</b> for German SMEs (50–80% funding rate) — Pragma-Code assists with the application.<br/><br/>
🔗 <a href="https://www.pragma-code.de/en/packages-pricing" target="_blank" rel="noopener">View complete pricing page</a>`
  },
  {
    id: 'kontakt-booking',
    keywords: [
      'kontakt', 'anfrage', 'termin', 'calendly', 'call', 'erstgespraech', 'mail',
      'email', 'schreiben', 'buchen', 'telefon', 'contact', 'book', 'discovery call'
    ],
    de: `📅 <b>Kontakt & Erstgespräch mit Alexander Ohl:</b><br/><br/>
Sie möchten über ein Projekt, eine Automatisierung oder eine Zusammenarbeit sprechen?<br/><br/>
• <b>Calendly:</b> <a href="https://calendly.com/pragma-code-info/discovery-call" target="_blank" rel="noopener">Kostenlosen 30-Min. Discovery-Call buchen</a><br/>
• <b>Formular:</b> Nutzen Sie das <a href="#kontakt">Kontaktformular</a> unten auf dieser Seite<br/>
• <b>E-Mail:</b> <a href="mailto:info@pragma-code.de">info@pragma-code.de</a><br/>
• <b>LinkedIn:</b> <a href="https://www.linkedin.com/in/alexander-ohl/" target="_blank" rel="noopener">Alexander Ohl auf LinkedIn</a><br/><br/>
🔗 <a href="#kontakt">Zum Kontaktformular springen</a>`,
    en: `📅 <b>Contact & Consultation with Alexander Ohl:</b><br/><br/>
Would you like to discuss a project, automation, or potential collaboration?<br/><br/>
• <b>Calendly:</b> <a href="https://calendly.com/pragma-code-info/discovery-call" target="_blank" rel="noopener">Book a free 30-min discovery call</a><br/>
• <b>Form:</b> Use the <a href="#contact">contact form</a> at the bottom of this page<br/>
• <b>Email:</b> <a href="mailto:info@pragma-code.de">info@pragma-code.de</a><br/>
• <b>LinkedIn:</b> <a href="https://www.linkedin.com/in/alexander-ohl/" target="_blank" rel="noopener">Alexander Ohl on LinkedIn</a><br/><br/>
🔗 <a href="#contact">Jump to contact form</a>`
  },
  {
    id: 'standort-remote',
    keywords: [
      'standort', 'remote', 'wo', 'region', 'osnabrueck', 'dach', 'deutschland',
      'oesterreich', 'schweiz', 'vor ort', 'location', 'remote work'
    ],
    de: `📍 <b>Standort & Arbeitsweise:</b><br/><br/>
Alexander Ohl arbeitet zu <b>100 % remote</b> mit Kunden in ganz Deutschland, Österreich und der Schweiz (DACH-Raum). Persönliche Termine vor Ort in der Region Osnabrück/Münsterland oder per Video-Call sind jederzeit möglich.`,
    en: `📍 <b>Location & Remote Work:</b><br/><br/>
Alexander Ohl works <b>100% remotely</b> with clients across Germany, Austria, and Switzerland (DACH region). On-site meetings in Osnabrück or video calls are arranged flexibly.`
  }
];

const fallbacks = {
  de: 'Dazu habe ich keine genauen Details. Ich kann Ihnen Fragen zu Alexanders Werdegang, seinen Skills, Kundenprojekten oder seiner Agentur Pragma-Code beantworten. Möchten Sie direkt einen Termin vereinbaren? <br/><br/>🔗 <a href="https://calendly.com/pragma-code-info/discovery-call" target="_blank" rel="noopener">Discovery-Call bei Calendly buchen</a> | <a href="#kontakt">Nachricht senden</a>',
  en: 'I don\'t have specific details on that. I can answer questions about Alexander\'s career, tech stack, client projects, or his agency Pragma-Code. Would you like to schedule a call? <br/><br/>🔗 <a href="https://calendly.com/pragma-code-info/discovery-call" target="_blank" rel="noopener">Book a discovery call on Calendly</a> | <a href="#contact">Send a message</a>'
};

const CALENDLY_URL = 'https://calendly.com/pragma-code-info/discovery-call';

function cleanInput(text) {
  return text.toLowerCase()
    .replace(/[.,\/#!$%\^&\*;:{}=_`~()?]/g, '')
    .replace(/-/g, ' ')
    .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss')
    .replace(/\s+/g, ' ')
    .trim();
}

function findBestResponse(userInput, lang) {
  const cleaned = cleanInput(userInput);
  const words = cleaned.split(/\s+/);
  let best = null;
  let maxMatches = 0;

  for (const topic of topics) {
    let matches = 0;
    for (const keyword of topic.keywords) {
      const cleanedKeyword = cleanInput(keyword);
      if (cleanedKeyword.length <= 4 && !cleanedKeyword.includes(' ')) {
        if (words.includes(cleanedKeyword)) matches++;
      } else {
        if (cleaned.includes(cleanedKeyword)) matches++;
      }
    }
    if (matches > maxMatches) {
      maxMatches = matches;
      best = topic;
    }
  }

  if (maxMatches > 0 && best) {
    return best[lang] || best['de'];
  }
  return null;
}

function initChatbot() {
  const trigger = document.getElementById('chatbot-trigger');
  const triggerIcon = document.getElementById('chatbot-trigger-icon');
  const win = document.getElementById('chatbot-window');
  const closeBtn = document.getElementById('chatbot-close');
  const minimizeBtn = document.getElementById('chatbot-minimize');
  const themeToggleBtn = document.getElementById('chatbot-theme-toggle');
  const themeIcon = document.getElementById('chatbot-theme-icon');
  const form = document.getElementById('chatbot-form');
  const input = document.getElementById('chatbot-input');
  const messages = document.getElementById('chatbot-messages');
  const quickReplies = document.getElementById('chatbot-quick-replies');

  if (!win || !form || !input || !messages || !quickReplies) return;
  if (!trigger && !window.__chatbotStandaloneMode) return;

  // Theme Toggle Handler
  function updateThemeIcon(theme) {
    if (themeIcon) {
      themeIcon.className = theme === 'light' ? 'ph ph-moon' : 'ph ph-sun';
    }
  }

  const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
  updateThemeIcon(currentTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const cur = document.documentElement.getAttribute('data-theme') || 'dark';
      const nextTheme = cur === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', nextTheme);
      localStorage.setItem('theme', nextTheme);
      updateThemeIcon(nextTheme);

      // Ensure Light Mode CSS is loaded if toggling to light
      if (nextTheme === 'light' && typeof window.__ensureLightCss === 'function') {
        window.__ensureLightCss();
      }
    });
  }

  const isEn = window.location.pathname === '/en' || window.location.pathname.startsWith('/en/');
  const lang = isEn ? 'en' : 'de';

  // Dynamic greeting
  const hour = new Date().getHours();
  const timeGreeting = lang === 'de' 
    ? (hour < 12 ? 'Guten Morgen' : hour < 18 ? 'Guten Tag' : 'Guten Abend')
    : (hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening');
  const welcomeText = lang === 'de'
    ? `${timeGreeting}! 👋 Ich bin der KI-Assistent von Alexander Ohl. Fragen Sie mich gerne zu seinem Werdegang, seinen Skills oder Projekten!`
    : `${timeGreeting}! 👋 I am Alexander Ohl's AI Assistant. Feel free to ask about his background, skills, or projects!`;
  
  const firstBubble = messages.querySelector('.chat-bubble');
  if (firstBubble) firstBubble.textContent = welcomeText;

  let calcState = { active: false, step: 0, type: null, addons: [] };
  let contactState = { active: false, step: 0, name: '', email: '', message: '' };

  const defaultChips = [
    { query: lang === 'de' ? 'Werdegang' : 'Career Timeline', label: lang === 'de' ? '📜 Werdegang' : '📜 Career' },
    { query: lang === 'de' ? 'Skills & Stack' : 'Skills & Stack', label: lang === 'de' ? '⚡ Skills' : '⚡ Skills' },
    { query: lang === 'de' ? 'Über Pragma-Code' : 'About Pragma-Code', label: lang === 'de' ? '🏢 Pragma-Code' : '🏢 Pragma-Code' },
    { query: lang === 'de' ? 'Preise & Tarife' : 'Prices & Retainers', label: lang === 'de' ? '💰 Preise' : '💰 Pricing' },
    { query: 'book_appointment', label: lang === 'de' ? '📅 Termin buchen' : '📅 Book Call' }
  ];

  function renderQuickReplies(chips) {
    quickReplies.innerHTML = '';
    chips.forEach(chip => {
      const btn = document.createElement('button');
      btn.className = 'qr-chip';
      if (chip.isPrimary) btn.classList.add('primary');
      btn.setAttribute('data-query', chip.query);
      btn.textContent = chip.label;
      quickReplies.appendChild(btn);
    });
  }

  function showDefaultQuickReplies() {
    renderQuickReplies(defaultChips);
  }

  function toggleChat(forceClose = false) {
    const isOpen = win.classList.contains('active');
    const shouldOpen = !isOpen && !forceClose;

    if (shouldOpen) {
      win.classList.add('active');
      win.removeAttribute('inert');
      if (triggerIcon) triggerIcon.className = 'ph ph-x';
      input.focus();
    } else {
      win.classList.remove('active');
      win.setAttribute('inert', '');
      if (triggerIcon) triggerIcon.className = 'ph ph-chat-centered-text';
    }
  }

  if (trigger) {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      toggleChat();
    });
  }

  if (closeBtn) closeBtn.addEventListener('click', () => toggleChat(true));
  if (minimizeBtn) minimizeBtn.addEventListener('click', () => toggleChat(true));

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && win.classList.contains('active')) {
      toggleChat(true);
    }
  });

  if (window.__chatbotOpenRequested) {
    window.__chatbotOpenRequested = false;
    toggleChat();
  }

  function addMessage(text, sender) {
    const bubbleContainer = document.createElement('div');
    bubbleContainer.className = `chat-message ${sender} fade-in`;
    const bubble = document.createElement('div');
    bubble.className = 'chat-bubble';
    bubble.innerHTML = text;
    // Seiten-Anker (#werdegang, #kontakt …) existieren nur auf der Start-/EN-Seite.
    // Auf /assistent laeuft derselbe Chatbot standalone — dort zeigen sie ins Leere.
    // Fehlt das Ziel im DOM, auf die passende Seite umbiegen.
    bubble.querySelectorAll('a[href^="#"]').forEach((a) => {
      const id = a.getAttribute('href').slice(1);
      if (!id || document.getElementById(id)) return;
      a.setAttribute('href', (isEn ? '/en' : '/') + '#' + id);
    });
    bubbleContainer.appendChild(bubble);
    messages.appendChild(bubbleContainer);
    messages.scrollTop = messages.scrollHeight;
  }

  function showTypingIndicator() {
    const indicator = document.createElement('div');
    indicator.className = 'chat-message bot typing fade-in';
    indicator.id = 'chatbot-typing-indicator';
    indicator.innerHTML = `
      <div class="chat-bubble typing-dots">
        <span></span><span></span><span></span>
      </div>
    `;
    messages.appendChild(indicator);
    messages.scrollTop = messages.scrollHeight;
    return indicator;
  }

  function showAppointmentOptions() {
    const msg = lang === 'de'
      ? `Sehr gerne! Einen <b>Discovery-Call</b> mit Alexander (30 Min.) buchen Sie direkt hier:<br/><br/>📅 <a href="${CALENDLY_URL}" target="_blank" rel="noopener">Termin bei Calendly auswählen</a><br/><br/>Alternativ können Sie auch direkt eine Nachricht im <a href="#kontakt">Kontaktformular</a> hinterlassen.`
      : `Gladly! You can book a <b>discovery call</b> with Alexander (30 min) right here:<br/><br/>📅 <a href="${CALENDLY_URL}" target="_blank" rel="noopener">Select slot on Calendly</a><br/><br/>Alternatively, leave a message in the <a href="#contact">contact form</a>.`;
    addMessage(msg, 'bot');
    renderQuickReplies([
      { query: lang === 'de' ? 'Werdegang' : 'Career', label: lang === 'de' ? '📜 Werdegang' : '📜 Career' },
      { query: 'overview', label: lang === 'de' ? '← Übersicht' : '← Overview' }
    ]);
  }

  function handleUserMessage(text) {
    if (!text.trim()) return;

    const cleaned = cleanInput(text);

    if (cleaned.includes('termin') || cleaned.includes('buchen') || cleaned.includes('meeting') ||
        cleaned.includes('calendly') || cleaned.includes('call') || cleaned.includes('erstgespraech')) {
      const typing = showTypingIndicator();
      setTimeout(() => {
        if (typing && typing.parentNode) typing.parentNode.removeChild(typing);
        showAppointmentOptions();
      }, 500);
      return;
    }

    const typingIndicator = showTypingIndicator();
    const matched = findBestResponse(text, lang);
    const typingDelay = Math.max(600, Math.min(1400, text.length * 12));

    setTimeout(() => {
      if (typingIndicator && typingIndicator.parentNode) {
        typingIndicator.parentNode.removeChild(typingIndicator);
      }
      const response = matched || fallbacks[lang];
      addMessage(response, 'bot');
      renderQuickReplies([
        { query: lang === 'de' ? 'Über Pragma-Code' : 'About Pragma-Code', label: lang === 'de' ? '🏢 Pragma-Code' : '🏢 Pragma-Code' },
        { query: lang === 'de' ? 'Preise & Tarife' : 'Prices & Retainers', label: lang === 'de' ? '💰 Preise' : '💰 Pricing' },
        { query: 'book_appointment', label: lang === 'de' ? '📅 Termin buchen' : '📅 Book Call', isPrimary: true },
        { query: 'overview', label: lang === 'de' ? '← Übersicht' : '← Overview' }
      ]);
    }, typingDelay);
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const val = input.value ? input.value.trim() : '';
    if (!val) {
      const emptyHint = lang === 'de'
        ? 'Bitte geben Sie eine Frage ein oder wählen Sie ein Thema aus.'
        : 'Please enter a question or select a topic above.';
      addMessage(emptyHint, 'bot');
      return;
    }
    handleUserMessage(val);
    input.value = '';
  });

  quickReplies.addEventListener('click', (e) => {
    const target = e.target;
    if (target.classList.contains('qr-chip')) {
      const query = target.getAttribute('data-query');
      if (!query) return;

      if (query === 'book_appointment') {
        addMessage(lang === 'de' ? 'Termin buchen' : 'Book a Call', 'user');
        showAppointmentOptions();
      } else if (query === 'overview') {
        addMessage(lang === 'de' ? 'Zurück zur Übersicht' : 'Back to Overview', 'user');
        showDefaultQuickReplies();
        addMessage(lang === 'de' ? 'Wie kann ich Ihnen weiterhelfen?' : 'How else can I help you?', 'bot');
      } else {
        addMessage(query, 'user');
        handleUserMessage(query);
      }
    }
  });
}

export { initChatbot };
