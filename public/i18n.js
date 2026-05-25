/* web/i18n.js — Recadly landing page localization (EN / ES / PT-BR)
   ─────────────────────────────────────────────────────────────────
   Usage:
     <element data-i18n="key">…</element>          → swaps textContent
     <element data-i18n-html="key">…</element>     → swaps innerHTML (allows <em>, <br/>)
     <input  data-i18n-placeholder="key" />        → swaps placeholder
     <element data-i18n-aria="key" />              → swaps aria-label
   The picker (.lang-picker) reads/writes lang from localStorage.recadly-lang. */

(function () {
  const STORAGE_KEY = 'recadly-lang';
  const DEFAULT_LANG = 'en';

  const T = {
    en: {
      'meta.title': 'Recadly — never leave a customer on read again',
      'meta.description':
        "You tell Recadly which topics matter. It quietly drafts a reply in your voice for any matching Instagram DM or post comment, ready for your approval.",

      'nav.features': 'Features',
      'nav.how': 'How it works',
      'nav.privacy': 'Privacy',
      'nav.faq': 'FAQ',
      'nav.cta': 'Join the waitlist',
      'picker.label': 'Language',

      'hero.eyebrow': 'Now in private beta',
      'hero.h1': 'Never leave a customer <em>on read</em> again.',
      'hero.lede':
        "You tell Recadly which topics matter. It quietly drafts a reply in your voice for any matching Instagram DM or post comment — approve each one yourself, or let trusted topics handle themselves. Your voice always stays yours.",
      'hero.placeholder': 'you@brand.studio',
      'hero.cta': 'Join the waitlist',
      'hero.cta_done': "You\u2019re on the list ✨",
      'hero.meta': 'Official Meta API · disconnect anytime',
      'carousel.thread':    'The conversation',
      'carousel.inbox':     'DMs + post comments, in one inbox',
      'carousel.approvals': 'Approve replies in seconds',

      'bubble.in': 'Are you open today? 🥺',
      'bubble.out': 'Yes — until 8pm 🧡',

      'features.eyebrow': 'What Recadly does',
      'features.title': 'Three quiet helpers, one calmer inbox.',
      'features.sub':
        'Each feature stays out of the way until you need it. Nothing sends without your tap.',

      'feature1.title': 'Suggested replies',
      'feature1.body':
        "Above the compose bar, you see two or three drafts Recadly thinks fit. Tap one to drop it into the field — edit, then send.",
      'feature2.title': 'Topic routing',
      'feature2.body':
        'Set up rules for sizing, shipping, returns, press — Recadly tags, drafts the right reply, or forwards to the right teammate.',
      'feature3.title': 'Approval inbox',
      'feature3.body':
        'Every AI draft lives in one place. Approve, edit, or skip in a single thumb-swipe. Your voice always stays yours.',

      'spotlight.eyebrow': 'The thread',
      'spotlight.title': 'A messaging app you already know,<br/>with a calmer co-pilot.',

      'point1.title': 'Recadly notices the question',
      'point1.body':
        'A small coral hint surfaces under the customer\u2019s last message — "noticed a question about shipping & returns". No takeover, no chatbot voice.',
      'point2.title': 'Three drafts wait above your compose',
      'point2.body':
        'Tappable replies — short, warm, in your tone. The first one is usually right. The others give you variations.',
      'point3.title': 'Tap → edit → send',
      'point3.body':
        'One tap drops the draft into the field. Edit a single word, change the emoji, send when you mean it. Nothing goes out behind your back.',

      'how.eyebrow': 'How it works',
      'how.title': 'Three minutes to set up.<br/>Hours back every week.',

      'step1.kicker': 'STEP 01',
      'step1.title': 'Connect Instagram',
      'step1.body':
        'Through Meta\u2019s official API. We never touch your password, and you can disconnect any time from settings.',
      'step2.kicker': 'STEP 02',
      'step2.title': 'Teach it your voice',
      'step2.body':
        'Recadly studies your last 50 sent replies to pick up your tone — your emoji habits, your warmth, your humor.',
      'step3.kicker': 'STEP 03',
      'step3.title': 'Approve, send, repeat',
      'step3.body':
        'Open a thread, tap the draft you like, send. Or batch through the approval inbox during your morning coffee.',

      'origin.mark': 'Why "Recadly"',
      'origin.quote':
        'In Portuguese, <em>"deixar um recado"</em> means to leave a message for someone — warm, personal, the kind of thing a friend would do. Your customers deserve that kind of reply.',
      'origin.foot': 're·ca·do · /ʁɨˈkadu/ · n. a message left with care',

      'trust.eyebrow': 'Privacy by default',
      'trust.title': "Your customers\u2019 messages are not training data.",
      'trust.sub':
        "Recadly only reads the messages that match the rules you set up \u2014 nothing else. We don\u2019t sell anything, fine-tune anything, or share anything.",

      'trust1.title': 'Encrypted in transit and at rest',
      'trust1.body':
        'TLS 1.3 between your phone and our servers. AES-256 on disk. The same protocols your bank uses.',
      'trust2.title': 'You own your messages',
      'trust2.body':
        'Export everything as JSON, any time. Delete your account and we wipe it inside 30 days — no follow-up emails.',
      'trust3.title': 'Drafts expire',
      'trust3.body':
        "Unsent AI drafts disappear after 7 days. No archive sitting in a database with your customers\u2019 problems in it.",
      'trust4.title': 'Disconnect in one tap',
      'trust4.body':
        'Revoke access from your settings. Recadly stops reading, drafting, and storing anything new — immediately.',

      'faq.eyebrow': 'Honest answers',
      'faq.title': 'Things people ask before signing up.',

      'faq1.q': 'Does Recadly send messages on its own?',
      'faq1.a':
        "That\u2019s up to you. By default Recadly only drafts — every message waits for your tap before going out. For specific topics (out-of-hours holding replies, an FAQ you\u2019re tired of typing) you can switch a rule to auto-send. Each rule is its own toggle, and you can flip back to manual any time.",
      'faq2.q': "Will customers know they\u2019re talking to AI?",
      'faq2.a':
        "They\u2019re not talking to AI — they\u2019re talking to you. Recadly suggests; you write. Most customers wouldn\u2019t tell the difference between a Recadly-assisted reply and one you wrote from scratch, because in the end, you did write it.",
      'faq3.q': 'What does Recadly read?',
      'faq3.a':
        "Only the DMs and post/reel comments that match the rules you set up. Recadly checks each incoming message against your topics \u2014 anything that doesn\u2019t match isn\u2019t drafted or stored. We never read your feed, your stories, your followers, or any other part of your account.",
      'faq4.q': 'How much does it cost?',
      'faq4.a':
        "During private beta, free for brands with fewer than 50,000 followers. After GA, we\u2019ll publish a clear per-seat price — no hidden message volume tiers, no surprise overage charges.",
      'faq5.q': 'Can my team share an inbox?',
      'faq5.a':
        'Yes. Add teammates by email — each person gets their own login, their own draft history, and you can route topics to specific teammates with rules.',
      'faq6.q': 'What about Android?',
      'faq6.a':
        'iOS first, Android later this year. Add yourself to the waitlist and pick "Android" and we\u2019ll email when the beta opens.',

      'cta.title': 'Get your evenings back.',
      'cta.sub':
        "Join the waitlist and we\u2019ll send your beta invite as soon as a spot opens. No spam, no drip campaigns.",
      'cta.thanks': 'Thanks — see you soon ✨',

      'footer.tagline':
        'A calmer way to handle the messages your customers leave you. Made in Barcelona — with <em class="saudade">saudade</em> for the beaches of Floripa.',
      'footer.product': 'Product',
      'footer.legal': 'Legal',
      'footer.contact': 'Contact',
      'footer.privacy': 'Privacy policy',
      'footer.terms': 'Terms of service',
      'footer.dpa': 'Data deletion',
      'footer.cookies': 'Cookies',
      'footer.copy': '© 2026 Recadly. All rights reserved.',
      'footer.privacy_short': 'Privacy',
      'footer.terms_short': 'Terms',
      'toc.title': 'On this page',
      'privacy.metaTitle': 'Privacy Policy — Recadly',
      'privacy.metaDesc': 'How Recadly collects, uses, and protects your data.',
      'privacy.h1': 'Privacy Policy',
      'privacy.updated': 'Last updated · May 25, 2026',
      'privacy.toc.who': 'Who we are',
      'privacy.toc.covers': 'Who this policy covers',
      'privacy.toc.what': 'What data we process',
      'privacy.toc.how': 'How we use your data',
      'privacy.toc.basis': 'Legal basis',
      'privacy.toc.ai': 'AI processing',
      'privacy.toc.sub': 'Sub-processors',
      'privacy.toc.storage': 'Where your data is stored',
      'privacy.toc.retention': 'Data retention',
      'privacy.toc.rights': 'Your rights',
      'privacy.toc.deletion': 'Data deletion',
      'privacy.toc.security': 'Security',
      'privacy.toc.children': 'Children',
      'privacy.toc.changes': 'Changes',
      'privacy.toc.contact': 'Contact',
      'privacy.h.who': '1. Who we are',
      'privacy.p.who': 'Recadly ("Recadly", "we", "us") is an iOS application that helps brands and creators manage their Instagram direct messages with AI assistance. Recadly is operated by <strong>Helena Emilia Martínez Pérez</strong>, a self-employed business (autónoma) based in Barcelona, Spain. We are the data controller for the personal data described in this policy. For any privacy question, contact us at <a href="mailto:privacy@recadly.com">privacy@recadly.com</a>.',
      'privacy.h.covers': '2. Who this policy covers',
      'privacy.p.covers': 'This policy covers two groups of people:',
      'privacy.p.covers.users': '<strong>Recadly users</strong> — the brands and creators who install Recadly and connect their Instagram professional account.',
      'privacy.p.covers.senders': '<strong>Message senders</strong> — the Instagram users who send direct messages to a connected account. Their messages are processed by Recadly so that the Recadly user can read and reply to them.',
      'privacy.h.what': '3. What data we process',
      'privacy.p.what.intro': 'When you connect an Instagram professional account, and as you use Recadly, we process:',
      'privacy.p.what.account': '<strong>Instagram account information</strong> — the account\'s ID, username, and basic profile details provided by Instagram.',
      'privacy.p.what.token': '<strong>Access tokens</strong> — a secure token issued by Instagram that lets Recadly act on the connected account\'s behalf.',
      'privacy.p.what.dm': '<strong>Direct message and comment content</strong> — the text and metadata of direct messages and post/reel comments sent to and from the connected account, including messages from the people who contact that account.',
      'privacy.p.what.rules': '<strong>Automation rules</strong> — keyword and topic routing rules the user creates.',
      'privacy.p.what.drafts': '<strong>Drafted replies</strong> — AI-generated reply drafts awaiting the user\'s approval.',
      'privacy.p.what.outro': 'We collect only the data needed to provide the service. We do not use it for advertising and we do not sell it.',
      'privacy.h.how': '4. How we use your data',
      'privacy.p.how.intro': 'We use this data solely to provide Recadly\'s features:',
      'privacy.p.how.display': 'Display the connected account\'s Instagram conversations in the app.',
      'privacy.p.how.ai': 'Generate suggested replies using AI (see Section 6).',
      'privacy.p.how.route': 'Route incoming messages by keyword or topic according to the user\'s rules.',
      'privacy.p.how.send': 'Send replies that the user has written or reviewed and approved.',
      'privacy.h.basis': '5. Legal basis (GDPR)',
      'privacy.p.basis': 'We process this data to perform our contract with the Recadly user (providing the service) and on the basis of our legitimate interest in operating and securing it. Message processing is carried out on the instruction of the Recadly user and under Instagram\'s terms governing business messaging.',
      'privacy.h.ai': '6. AI processing',
      'privacy.p.ai': 'To generate reply suggestions and to route messages by topic, Recadly sends the relevant message content to Anthropic\'s Claude API. Anthropic processes this content to return the suggestions and, under its commercial API terms, does not use it to train its models.',
      'privacy.h.sub': '7. Sub-processors',
      'privacy.p.sub.intro': 'We rely on these providers to operate Recadly:',
      'privacy.p.sub.anthropic': '<strong>Anthropic</strong> — AI reply suggestions and message classification.',
      'privacy.p.sub.neon': '<strong>Neon</strong> — database hosting (European Union — Frankfurt, Germany).',
      'privacy.p.sub.fly': '<strong>Fly.io</strong> — application hosting (European Union — Frankfurt, Germany).',
      'privacy.p.sub.meta': '<strong>Meta Platforms</strong> — Instagram, the source of the messaging data.',
      'privacy.h.storage': '8. Where your data is stored',
      'privacy.p.storage': 'Recadly\'s database and servers are hosted within the European Union (Frankfurt, Germany).',
      'privacy.h.retention': '9. Data retention',
      'privacy.p.retention': 'We retain your data for as long as your Instagram account remains connected to Recadly. When you disconnect the account or request deletion, we delete the stored data — see Section 11 and our <a href="data-deletion.html">Data Deletion</a> page.',
      'privacy.h.rights': '10. Your rights',
      'privacy.p.rights': 'Under the GDPR you have the right to access, correct, export, and delete your personal data, and to object to or restrict its processing. To exercise these rights, contact <a href="mailto:privacy@recadly.com">privacy@recadly.com</a>. You may also lodge a complaint with the Spanish Data Protection Agency (AEPD).',
      'privacy.h.deletion': '11. Data deletion',
      'privacy.p.deletion': 'You can disconnect your Instagram account in Recadly at any time, which revokes Recadly\'s access and deletes the stored access token. To request full deletion of all stored data, see <a href="data-deletion.html">recadly.com/data-deletion</a> or email <a href="mailto:privacy@recadly.com">privacy@recadly.com</a>.',
      'privacy.h.security': '12. Security',
      'privacy.p.security': 'Access tokens and message data are stored in our EU-hosted database with restricted access. Access to backend systems is limited to authorised operators.',
      'privacy.h.children': '13. Children',
      'privacy.p.children': 'Recadly is intended for use by businesses and creators and is not directed to anyone under 18 years of age.',
      'privacy.h.changes': '14. Changes to this policy',
      'privacy.p.changes': 'We may update this policy from time to time. The current version is always posted here, with the "last updated" date above.',
      'privacy.h.contact': '15. Contact',
      'privacy.p.contact': 'Helena Emilia Martínez Pérez — <a href="mailto:privacy@recadly.com">privacy@recadly.com</a>, Barcelona, Spain.',
      'terms.metaTitle': 'Terms of Service — Recadly',
      'terms.metaDesc': 'The terms that govern your use of Recadly.',
      'terms.h1': 'Terms of Service',
      'terms.updated': 'Last updated · May 25, 2026',
      'terms.toc.agreement': 'The agreement',
      'terms.toc.account': 'Your account',
      'terms.toc.using': 'Using Recadly',
      'terms.toc.meta': 'Instagram & Meta',
      'terms.toc.ai': 'AI-generated content',
      'terms.toc.fees': 'Fees',
      'terms.toc.ip': 'Intellectual property',
      'terms.toc.availability': 'Availability',
      'terms.toc.liability': 'Liability',
      'terms.toc.termination': 'Termination',
      'terms.toc.law': 'Governing law',
      'terms.toc.changes': 'Changes',
      'terms.toc.contact': 'Contact',
      'terms.h.agreement': '1. The agreement',
      'terms.p.agreement': 'These Terms form a binding agreement between you and <strong>Helena Emilia Martínez Pérez</strong> ("Recadly", "we", "us"), a self-employed business (autónoma) based in Barcelona, Spain. By creating an account or using Recadly, you accept these Terms. If you don\'t agree with any part of them, please don\'t use the service. If you\'re using Recadly on behalf of a business, you confirm you have authority to bind that business to these Terms.',
      'terms.h.account': '2. Your account',
      'terms.p.account': 'You need to be at least 18 years old and able to enter into a binding contract. You\'re responsible for the accuracy of your account information and for keeping your credentials secure. Let us know at <a href="mailto:hello@recadly.com">hello@recadly.com</a> as soon as you suspect someone else has accessed your account. You may not transfer your account to a third party or create accounts in someone else\'s name.',
      'terms.h.using': '3. Using Recadly',
      'terms.p.using.intro': 'You can use Recadly for any lawful business purpose. You may not use Recadly to:',
      'terms.p.using.illegal': 'Send messages that are illegal, threatening, harassing, defamatory, or that violate someone else\'s rights.',
      'terms.p.using.spam': 'Send unsolicited commercial messages, scams, phishing attempts, or anything that would commonly be considered spam.',
      'terms.p.using.impersonate': 'Impersonate a person or organisation, or misrepresent your affiliation with one.',
      'terms.p.using.reverse': 'Reverse engineer or attempt to extract the source code of the service, except where this restriction is prohibited by law.',
      'terms.p.using.interfere': 'Interfere with the service\'s normal operation or probe for vulnerabilities.',
      'terms.p.using.outro': 'If we believe you\'ve broken these rules, we may suspend or terminate your account. We try to give a warning first, but for serious or repeated violations we may act immediately.',
      'terms.h.meta': '4. Instagram & Meta Platforms',
      'terms.p.meta': 'Recadly uses the Instagram API provided by Meta Platforms, Inc. Your use of Recadly is also subject to <a href="https://www.facebook.com/legal/terms" target="_blank" rel="noopener">Meta\'s Terms</a> and the <a href="https://developers.facebook.com/policy/" target="_blank" rel="noopener">Meta Platform Policy</a>. You confirm that you have the right to operate the Instagram account you connect. Meta may change or restrict the APIs we depend on; if that happens, parts of Recadly may stop working through no fault of ours, and we\'ll do our best to adapt quickly.',
      'terms.h.ai': '5. AI-generated content',
      'terms.p.ai': 'Recadly drafts reply suggestions using language models. We work hard to make those drafts good, but we don\'t guarantee they\'ll be accurate, free of bias, or appropriate for every situation. <strong>You\'re responsible for what you actually send</strong>, the same way you\'re responsible for any other message you send to a customer. By default every draft requires your approval before it is sent; you may also configure specific topics to send automatically, and you remain responsible for those messages.',
      'terms.h.fees': '6. Fees',
      'terms.p.fees': 'During the private beta, Recadly is free to use. If we introduce paid plans, we will publish prices clearly and give you notice before any charge applies to your account. You will never be charged without your explicit agreement.',
      'terms.h.ip': '7. Intellectual property',
      'terms.p.ip': 'Recadly, the Recadly word and logo, the visual design of the app and this website, and the underlying code are owned by Helena Emilia Martínez Pérez or our licensors. We grant you a non-exclusive, non-transferable, revocable licence to use Recadly for the duration of your account, solely for its intended purpose. You retain ownership of the content you put into Recadly, and grant us a licence to host and process it as necessary to provide the service to you.',
      'terms.h.availability': '8. Availability',
      'terms.p.availability': 'Recadly is provided on an "as available" basis. We work hard to keep it running, but we don\'t guarantee uninterrupted service, freedom from bugs, or compatibility with every device. During the private beta, features may change or be removed.',
      'terms.h.liability': '9. Liability',
      'terms.p.liability': 'To the maximum extent permitted by law, our total liability to you for any claim arising out of or in connection with these Terms or the service is limited to €100. We are not liable for indirect, incidental, or consequential damages, including loss of profits, loss of goodwill, or business interruption. Nothing in these Terms limits liability that cannot be limited under applicable law.',
      'terms.h.termination': '10. Termination',
      'terms.p.termination': 'You can close your account at any time from settings, or by emailing <a href="mailto:hello@recadly.com">hello@recadly.com</a>. We may suspend or terminate your account if you violate these Terms or if we discontinue the service. On termination, we delete your account data as described in our <a href="privacy.html">Privacy Policy</a>.',
      'terms.h.law': '11. Governing law',
      'terms.p.law': 'These Terms are governed by the laws of Spain. If we have a disagreement, please email us first at <a href="mailto:hello@recadly.com">hello@recadly.com</a> — most things get resolved that way. Consumers may bring proceedings in the courts of their country of residence; nothing here removes the protections granted to you by mandatory consumer law.',
      'terms.h.changes': '12. Changes to these Terms',
      'terms.p.changes': 'We may update these Terms occasionally. For material changes, we\'ll surface a notice in the app or by email. The "last updated" date at the top is always current. Continuing to use Recadly after changes take effect means you accept the new Terms.',
      'terms.h.contact': '13. Contact',
      'terms.p.contact': 'For questions about these Terms, email <a href="mailto:hello@recadly.com">hello@recadly.com</a>.',
      'deletion.metaTitle': 'Data Deletion — Recadly',
      'deletion.metaDesc': 'How to delete your data from Recadly.',
      'deletion.h1': 'Data Deletion',
      'deletion.updated': 'Last updated · May 25, 2026',
      'deletion.intro': 'You can have your data removed from Recadly at any time, in one of two ways.',
      'deletion.h.option1': 'Option 1 — Disconnect in the app',
      'deletion.p.option1': 'Open Recadly, go to <strong>Settings</strong>, and disconnect your Instagram account. This immediately revokes Recadly\'s access to your Instagram account and deletes the stored access token.',
      'deletion.h.option2': 'Option 2 — Request full deletion',
      'deletion.p.option2.a': 'Email <a href="mailto:privacy@recadly.com">privacy@recadly.com</a> from the address associated with your account — or include your Instagram username — and ask for full data deletion.',
      'deletion.p.option2.b': 'We will delete all data stored for your account — account information, access tokens, direct message and comment content, automation rules, and drafted replies — within 30 days, and confirm by email once it is done.',
      'deletion.h.questions': 'Questions',
      'deletion.p.questions': 'For anything related to your data, contact <a href="mailto:privacy@recadly.com">privacy@recadly.com</a>.',
      'deletion.footnote': 'This page is the data deletion instructions URL referenced by Recadly\'s Meta app configuration.',
    },

    es: {
      'meta.title': 'Recadly — no vuelvas a dejar a un cliente en visto',
      'meta.description':
        'Tú le dices a Recadly qué temas te importan. Redacta sin hacer ruido una respuesta en tu voz para cada DM o comentario de Instagram que coincida, lista para tu aprobación.',

      'nav.features': 'Funciones',
      'nav.how': 'Cómo funciona',
      'nav.privacy': 'Privacidad',
      'nav.faq': 'FAQ',
      'nav.cta': 'Únete a la lista',
      'picker.label': 'Idioma',

      'hero.eyebrow': 'Ahora en beta privada',
      'hero.h1': 'No vuelvas a dejar a un cliente <em>en visto</em>.',
      'hero.lede':
        'Tú le dices a Recadly qué temas te importan. Redacta sin hacer ruido una respuesta en tu voz para cada DM o comentario de Instagram que coincida — apruebas cada una, o dejas que ciertos temas se respondan solos. Tu voz siempre sigue siendo tuya.',
      'hero.placeholder': 'tu@marca.studio',
      'hero.cta': 'Únete a la lista',
      'hero.cta_done': 'Ya estás en la lista ✨',
      'hero.meta': 'API oficial de Meta · desconecta cuando quieras',
      'carousel.thread':    'La conversación',
      'carousel.inbox':     'DMs y comentarios, en una sola bandeja',
      'carousel.approvals': 'Aprueba respuestas en segundos',

      'bubble.in': '¿Abren hoy? 🥺',
      'bubble.out': 'Sí — hasta las 20h 🧡',

      'features.eyebrow': 'Qué hace Recadly',
      'features.title': 'Tres ayudas discretas, una bandeja más tranquila.',
      'features.sub':
        'Cada función espera en silencio hasta que la necesitas. Nada se envía sin tu toque.',

      'feature1.title': 'Respuestas sugeridas',
      'feature1.body':
        'Encima de la barra de mensaje verás dos o tres borradores que Recadly cree que encajan. Toca uno para enviarlo al campo — edítalo y envía.',
      'feature2.title': 'Enrutado por tema',
      'feature2.body':
        'Crea reglas para tallas, envíos, devoluciones, prensa — Recadly etiqueta, redacta la respuesta correcta o la pasa a la persona indicada.',
      'feature3.title': 'Bandeja de aprobación',
      'feature3.body':
        'Todos los borradores de IA viven en un solo lugar. Aprueba, edita o salta con un gesto del pulgar. Tu voz siempre es tuya.',

      'spotlight.eyebrow': 'La conversación',
      'spotlight.title': 'La app de mensajería que ya conoces,<br/>con un copiloto más tranquilo.',

      'point1.title': 'Recadly nota la pregunta',
      'point1.body':
        'Una pequeña pista coral aparece bajo el último mensaje del cliente — "detecté una pregunta sobre envíos y devoluciones". Sin tomar el control, sin voz de chatbot.',
      'point2.title': 'Tres borradores esperan sobre el campo',
      'point2.body':
        'Respuestas listas para tocar — breves, cálidas, en tu tono. La primera suele acertar. Las otras te dan variaciones.',
      'point3.title': 'Toca → edita → envía',
      'point3.body':
        'Un toque coloca el borrador en el campo. Cambia una palabra, ajusta el emoji, envía cuando estés segura. Nada sale a tus espaldas.',

      'how.eyebrow': 'Cómo funciona',
      'how.title': 'Tres minutos para configurarlo.<br/>Horas recuperadas cada semana.',

      'step1.kicker': 'PASO 01',
      'step1.title': 'Conecta Instagram',
      'step1.body':
        'A través de la API oficial de Meta. Nunca tocamos tu contraseña y puedes desconectarte cuando quieras desde ajustes.',
      'step2.kicker': 'PASO 02',
      'step2.title': 'Enséñale tu voz',
      'step2.body':
        'Recadly estudia tus últimas 50 respuestas enviadas para captar tu tono — tus emojis, tu calidez, tu humor.',
      'step3.kicker': 'PASO 03',
      'step3.title': 'Aprueba, envía, repite',
      'step3.body':
        'Abre una conversación, toca el borrador que te guste, envía. O ve por todos juntos en la bandeja de aprobación con el café de la mañana.',

      'origin.mark': 'Por qué "Recadly"',
      'origin.quote':
        'En portugués, <em>"deixar um recado"</em> significa dejarle un mensaje a alguien — cálido, personal, lo que haría una amiga. Tus clientes merecen ese tipo de respuesta.',
      'origin.foot': 're·ca·do · /ʁɨˈkadu/ · sust. un mensaje dejado con cariño',

      'trust.eyebrow': 'Privacidad por defecto',
      'trust.title': 'Los mensajes de tus clientes no son datos de entrenamiento.',
      'trust.sub':
        'Recadly solo lee los mensajes que coinciden con las reglas que configuras — nada más. No vendemos, ni entrenamos, ni compartimos nada.',

      'trust1.title': 'Cifrado en tránsito y en reposo',
      'trust1.body':
        'TLS 1.3 entre tu teléfono y nuestros servidores. AES-256 en disco. Los mismos protocolos que usa tu banco.',
      'trust2.title': 'Tus mensajes son tuyos',
      'trust2.body':
        'Exporta todo como JSON cuando quieras. Borra tu cuenta y la eliminamos en 30 días — sin correos de seguimiento.',
      'trust3.title': 'Los borradores caducan',
      'trust3.body':
        'Los borradores de IA no enviados desaparecen tras 7 días. Sin archivos guardados con los problemas de tus clientes dentro.',
      'trust4.title': 'Desconecta con un toque',
      'trust4.body':
        'Revoca el acceso desde ajustes. Recadly deja de leer, redactar y guardar cualquier cosa nueva — al instante.',

      'faq.eyebrow': 'Respuestas honestas',
      'faq.title': 'Lo que la gente pregunta antes de apuntarse.',

      'faq1.q': '¿Recadly envía mensajes por su cuenta?',
      'faq1.a':
        'Tú decides. Por defecto Recadly solo redacta — cada mensaje espera tu toque antes de salir. Para temas concretos (respuestas fuera de horario, una pregunta que estás cansada de escribir) puedes activar el envío automático en una regla. Cada regla tiene su propio interruptor y puedes volver a manual cuando quieras.',
      'faq2.q': '¿Mis clientes sabrán que están hablando con IA?',
      'faq2.a':
        'No están hablando con una IA — están hablando contigo. Recadly sugiere; tú escribes. La mayoría no notaría la diferencia entre una respuesta asistida por Recadly y otra escrita desde cero, porque al final, la escribiste tú.',
      'faq3.q': '¿Qué lee Recadly?',
      'faq3.a':
        'Solo los DMs y comentarios en posts y reels que coincidan con las reglas que configures. Recadly compara cada mensaje entrante con tus temas — lo que no coincide, no se redacta ni se guarda. Nunca leemos tu feed, tus historias, tus seguidores ni ninguna otra parte de tu cuenta.',
      'faq4.q': '¿Cuánto cuesta?',
      'faq4.a':
        'Durante la beta privada, gratis para marcas con menos de 50.000 seguidores. Tras el lanzamiento general publicaremos un precio claro por usuario — sin niveles ocultos de volumen ni cargos sorpresa.',
      'faq5.q': '¿Puede mi equipo compartir una bandeja?',
      'faq5.a':
        'Sí. Añade a tu equipo por correo — cada persona tiene su propio acceso, su propio historial de borradores y puedes enviar temas a personas concretas con reglas.',
      'faq6.q': '¿Y Android?',
      'faq6.a':
        'Primero iOS, Android más adelante este año. Apúntate a la lista marcando "Android" y te avisaremos cuando se abra el beta.',

      'cta.title': 'Recupera tus tardes.',
      'cta.sub':
        'Únete a la lista y te enviaremos la invitación al beta en cuanto se abra un sitio. Sin spam, sin secuencias de correos.',
      'cta.thanks': 'Gracias — hasta pronto ✨',

      'footer.tagline':
        'Una forma más tranquila de gestionar los mensajes que te dejan tus clientes. Hecho en Barcelona — con <em class="saudade">saudade</em> por las playas de Floripa.',
      'footer.product': 'Producto',
      'footer.legal': 'Legal',
      'footer.contact': 'Contacto',
      'footer.privacy': 'Política de privacidad',
      'footer.terms': 'Términos del servicio',
      'footer.dpa': 'Eliminación de datos',
      'footer.cookies': 'Cookies',
      'footer.copy': '© 2026 Recadly. Todos los derechos reservados.',
      'footer.privacy_short': 'Privacidad',
      'footer.terms_short': 'Términos',
      'toc.title': 'En esta página',
      'privacy.metaTitle': 'Política de privacidad — Recadly',
      'privacy.metaDesc': 'Cómo Recadly recoge, usa y protege tus datos.',
      'privacy.h1': 'Política de privacidad',
      'privacy.updated': 'Última actualización · 25 de mayo de 2026',
      'privacy.toc.who': 'Quiénes somos',
      'privacy.toc.covers': 'A quién cubre esta política',
      'privacy.toc.what': 'Qué datos tratamos',
      'privacy.toc.how': 'Cómo usamos tus datos',
      'privacy.toc.basis': 'Base legal',
      'privacy.toc.ai': 'Procesamiento con IA',
      'privacy.toc.sub': 'Subencargados',
      'privacy.toc.storage': 'Dónde se almacenan tus datos',
      'privacy.toc.retention': 'Conservación de datos',
      'privacy.toc.rights': 'Tus derechos',
      'privacy.toc.deletion': 'Eliminación de datos',
      'privacy.toc.security': 'Seguridad',
      'privacy.toc.children': 'Menores',
      'privacy.toc.changes': 'Cambios',
      'privacy.toc.contact': 'Contacto',
      'privacy.h.who': '1. Quiénes somos',
      'privacy.p.who': 'Recadly ("Recadly", "nosotros") es una aplicación de iOS que ayuda a marcas y creadores a gestionar sus mensajes directos de Instagram con la ayuda de IA. Recadly está operada por <strong>Helena Emilia Martínez Pérez</strong>, autónoma con sede en Barcelona, España. Somos el responsable del tratamiento de los datos personales descritos en esta política. Para cualquier consulta sobre privacidad, contacta con nosotros en <a href="mailto:privacy@recadly.com">privacy@recadly.com</a>.',
      'privacy.h.covers': '2. A quién cubre esta política',
      'privacy.p.covers': 'Esta política cubre a dos grupos de personas:',
      'privacy.p.covers.users': '<strong>Usuarios de Recadly</strong> — las marcas y creadores que instalan Recadly y conectan su cuenta profesional de Instagram.',
      'privacy.p.covers.senders': '<strong>Remitentes de mensajes</strong> — los usuarios de Instagram que envían mensajes directos a una cuenta conectada. Sus mensajes son procesados por Recadly para que el usuario de Recadly pueda leerlos y responderlos.',
      'privacy.h.what': '3. Qué datos tratamos',
      'privacy.p.what.intro': 'Cuando conectas una cuenta profesional de Instagram y mientras usas Recadly, tratamos:',
      'privacy.p.what.account': '<strong>Información de la cuenta de Instagram</strong> — el ID de la cuenta, nombre de usuario y datos básicos del perfil proporcionados por Instagram.',
      'privacy.p.what.token': '<strong>Tokens de acceso</strong> — un token seguro emitido por Instagram que permite a Recadly actuar en nombre de la cuenta conectada.',
      'privacy.p.what.dm': '<strong>Contenido de mensajes directos y comentarios</strong> — el texto y los metadatos de los mensajes directos y los comentarios de publicaciones/reels enviados desde y hacia la cuenta conectada, incluidos los mensajes de las personas que contactan a esa cuenta.',
      'privacy.p.what.rules': '<strong>Reglas de automatización</strong> — reglas de palabras clave y temas que el usuario crea.',
      'privacy.p.what.drafts': '<strong>Borradores de respuestas</strong> — borradores generados por IA pendientes de la aprobación del usuario.',
      'privacy.p.what.outro': 'Solo recogemos los datos necesarios para prestar el servicio. No los utilizamos para publicidad y no los vendemos.',
      'privacy.h.how': '4. Cómo usamos tus datos',
      'privacy.p.how.intro': 'Usamos estos datos únicamente para ofrecer las funciones de Recadly:',
      'privacy.p.how.display': 'Mostrar las conversaciones de Instagram de la cuenta conectada en la app.',
      'privacy.p.how.ai': 'Generar sugerencias de respuesta usando IA (ver sección 6).',
      'privacy.p.how.route': 'Enrutar los mensajes entrantes por palabra clave o tema según las reglas del usuario.',
      'privacy.p.how.send': 'Enviar respuestas que el usuario ha escrito o revisado y aprobado.',
      'privacy.h.basis': '5. Base legal (RGPD)',
      'privacy.p.basis': 'Tratamos estos datos para ejecutar nuestro contrato con el usuario de Recadly (prestar el servicio) y sobre la base de nuestro interés legítimo en operarlo y protegerlo. El tratamiento de los mensajes se realiza por instrucción del usuario de Recadly y bajo los términos de Instagram que regulan la mensajería de empresas.',
      'privacy.h.ai': '6. Procesamiento con IA',
      'privacy.p.ai': 'Para generar sugerencias de respuesta y enrutar los mensajes por tema, Recadly envía el contenido relevante a la API Claude de Anthropic. Anthropic procesa ese contenido para devolver las sugerencias y, según sus términos de API comercial, no lo usa para entrenar sus modelos.',
      'privacy.h.sub': '7. Subencargados',
      'privacy.p.sub.intro': 'Nos apoyamos en estos proveedores para operar Recadly:',
      'privacy.p.sub.anthropic': '<strong>Anthropic</strong> — sugerencias de respuesta con IA y clasificación de mensajes.',
      'privacy.p.sub.neon': '<strong>Neon</strong> — alojamiento de la base de datos (Unión Europea — Fráncfort, Alemania).',
      'privacy.p.sub.fly': '<strong>Fly.io</strong> — alojamiento de la aplicación (Unión Europea — Fráncfort, Alemania).',
      'privacy.p.sub.meta': '<strong>Meta Platforms</strong> — Instagram, la fuente de los datos de mensajería.',
      'privacy.h.storage': '8. Dónde se almacenan tus datos',
      'privacy.p.storage': 'La base de datos y los servidores de Recadly están alojados en la Unión Europea (Fráncfort, Alemania).',
      'privacy.h.retention': '9. Conservación de datos',
      'privacy.p.retention': 'Conservamos tus datos mientras tu cuenta de Instagram permanezca conectada a Recadly. Cuando desconectes la cuenta o solicites la eliminación, borramos los datos almacenados — consulta la sección 11 y nuestra página de <a href="data-deletion.html">Eliminación de datos</a>.',
      'privacy.h.rights': '10. Tus derechos',
      'privacy.p.rights': 'Conforme al RGPD tienes derecho a acceder, rectificar, exportar y eliminar tus datos personales, y a oponerte o limitar su tratamiento. Para ejercerlos, contacta con <a href="mailto:privacy@recadly.com">privacy@recadly.com</a>. También puedes presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD).',
      'privacy.h.deletion': '11. Eliminación de datos',
      'privacy.p.deletion': 'Puedes desconectar tu cuenta de Instagram en Recadly en cualquier momento, lo que revoca el acceso de Recadly y elimina el token de acceso almacenado. Para solicitar la eliminación completa de todos los datos almacenados, consulta <a href="data-deletion.html">recadly.com/data-deletion</a> o escribe a <a href="mailto:privacy@recadly.com">privacy@recadly.com</a>.',
      'privacy.h.security': '12. Seguridad',
      'privacy.p.security': 'Los tokens de acceso y los datos de los mensajes se almacenan en nuestra base de datos alojada en la UE con acceso restringido. El acceso a los sistemas backend está limitado a operadores autorizados.',
      'privacy.h.children': '13. Menores',
      'privacy.p.children': 'Recadly está destinada al uso por empresas y creadores y no se dirige a personas menores de 18 años.',
      'privacy.h.changes': '14. Cambios en esta política',
      'privacy.p.changes': 'Podemos actualizar esta política de vez en cuando. La versión vigente siempre se publica aquí, con la fecha de "última actualización" en la parte superior.',
      'privacy.h.contact': '15. Contacto',
      'privacy.p.contact': 'Helena Emilia Martínez Pérez — <a href="mailto:privacy@recadly.com">privacy@recadly.com</a>, Barcelona, España.',
      'terms.metaTitle': 'Términos del servicio — Recadly',
      'terms.metaDesc': 'Los términos que rigen tu uso de Recadly.',
      'terms.h1': 'Términos del servicio',
      'terms.updated': 'Última actualización · 25 de mayo de 2026',
      'terms.toc.agreement': 'El acuerdo',
      'terms.toc.account': 'Tu cuenta',
      'terms.toc.using': 'Uso de Recadly',
      'terms.toc.meta': 'Instagram y Meta',
      'terms.toc.ai': 'Contenido generado por IA',
      'terms.toc.fees': 'Tarifas',
      'terms.toc.ip': 'Propiedad intelectual',
      'terms.toc.availability': 'Disponibilidad',
      'terms.toc.liability': 'Responsabilidad',
      'terms.toc.termination': 'Rescisión',
      'terms.toc.law': 'Ley aplicable',
      'terms.toc.changes': 'Cambios',
      'terms.toc.contact': 'Contacto',
      'terms.h.agreement': '1. El acuerdo',
      'terms.p.agreement': 'Estos Términos constituyen un acuerdo vinculante entre tú y <strong>Helena Emilia Martínez Pérez</strong> ("Recadly", "nosotros"), autónoma con sede en Barcelona, España. Al crear una cuenta o usar Recadly aceptas estos Términos. Si no estás de acuerdo con alguna parte, no uses el servicio. Si usas Recadly en nombre de una empresa, confirmas que tienes autoridad para vincularla a estos Términos.',
      'terms.h.account': '2. Tu cuenta',
      'terms.p.account': 'Debes tener al menos 18 años y capacidad para celebrar un contrato vinculante. Eres responsable de la exactitud de la información de tu cuenta y de mantener tus credenciales seguras. Avísanos a <a href="mailto:hello@recadly.com">hello@recadly.com</a> en cuanto sospeches que alguien más ha accedido a tu cuenta. No puedes transferir tu cuenta a un tercero ni crear cuentas a nombre de otra persona.',
      'terms.h.using': '3. Uso de Recadly',
      'terms.p.using.intro': 'Puedes usar Recadly con cualquier finalidad comercial lícita. No puedes usar Recadly para:',
      'terms.p.using.illegal': 'Enviar mensajes ilegales, amenazantes, acosadores, difamatorios o que vulneren los derechos de otra persona.',
      'terms.p.using.spam': 'Enviar mensajes comerciales no solicitados, estafas, intentos de phishing o cualquier cosa que se considere spam.',
      'terms.p.using.impersonate': 'Suplantar a una persona u organización, o tergiversar tu afiliación con ellas.',
      'terms.p.using.reverse': 'Realizar ingeniería inversa o intentar extraer el código fuente del servicio, salvo cuando esa restricción esté prohibida por ley.',
      'terms.p.using.interfere': 'Interferir con el funcionamiento normal del servicio o buscar vulnerabilidades.',
      'terms.p.using.outro': 'Si creemos que has incumplido estas reglas, podemos suspender o rescindir tu cuenta. Intentamos avisar primero, pero ante incumplimientos graves o reiterados podemos actuar de inmediato.',
      'terms.h.meta': '4. Instagram y Meta Platforms',
      'terms.p.meta': 'Recadly utiliza la API de Instagram proporcionada por Meta Platforms, Inc. Tu uso de Recadly también está sujeto a los <a href="https://www.facebook.com/legal/terms" target="_blank" rel="noopener">Términos de Meta</a> y la <a href="https://developers.facebook.com/policy/" target="_blank" rel="noopener">Política de la Plataforma de Meta</a>. Confirmas que tienes derecho a operar la cuenta de Instagram que conectas. Meta puede cambiar o restringir las APIs de las que dependemos; si eso ocurre, partes de Recadly pueden dejar de funcionar sin culpa nuestra, y haremos lo posible por adaptarnos rápido.',
      'terms.h.ai': '5. Contenido generado por IA',
      'terms.p.ai': 'Recadly redacta sugerencias de respuesta usando modelos de lenguaje. Trabajamos para que esos borradores sean buenos, pero no garantizamos que sean precisos, libres de sesgo o adecuados para cada situación. <strong>Tú eres responsable de lo que efectivamente envías</strong>, igual que eres responsable de cualquier otro mensaje que envíes a un cliente. Por defecto, cada borrador requiere tu aprobación antes de enviarse; también puedes configurar ciertos temas para que se envíen automáticamente, y sigues siendo responsable de esos mensajes.',
      'terms.h.fees': '6. Tarifas',
      'terms.p.fees': 'Durante la beta privada, Recadly es gratuita. Si introducimos planes de pago, publicaremos los precios con claridad y te avisaremos antes de que se aplique cualquier cargo a tu cuenta. Nunca se te cobrará sin tu acuerdo explícito.',
      'terms.h.ip': '7. Propiedad intelectual',
      'terms.p.ip': 'Recadly, la palabra y el logotipo de Recadly, el diseño visual de la app y de este sitio, y el código subyacente son propiedad de Helena Emilia Martínez Pérez o de nuestros licenciantes. Te concedemos una licencia no exclusiva, intransferible y revocable para usar Recadly durante la vigencia de tu cuenta, exclusivamente con su finalidad. Conservas la titularidad del contenido que introduces en Recadly y nos concedes una licencia para alojarlo y procesarlo según sea necesario para prestarte el servicio.',
      'terms.h.availability': '8. Disponibilidad',
      'terms.p.availability': 'Recadly se ofrece "según disponibilidad". Nos esforzamos por mantenerlo en funcionamiento, pero no garantizamos un servicio ininterrumpido, ausencia de errores o compatibilidad con todos los dispositivos. Durante la beta privada, las funciones pueden cambiar o eliminarse.',
      'terms.h.liability': '9. Responsabilidad',
      'terms.p.liability': 'En la máxima medida permitida por la ley, nuestra responsabilidad total ante ti por cualquier reclamación derivada o relacionada con estos Términos o el servicio se limita a 100 €. No somos responsables por daños indirectos, incidentales o consecuentes, incluidos lucro cesante, pérdida de reputación o interrupción de negocio. Nada en estos Términos limita la responsabilidad que no pueda limitarse según la ley aplicable.',
      'terms.h.termination': '10. Rescisión',
      'terms.p.termination': 'Puedes cerrar tu cuenta en cualquier momento desde los ajustes o escribiendo a <a href="mailto:hello@recadly.com">hello@recadly.com</a>. Podemos suspender o rescindir tu cuenta si infringes estos Términos o si descontinuamos el servicio. Al rescindir, eliminamos los datos de tu cuenta tal como se describe en nuestra <a href="privacy.html">Política de privacidad</a>.',
      'terms.h.law': '11. Ley aplicable',
      'terms.p.law': 'Estos Términos se rigen por las leyes de España. Si surge un desacuerdo, escríbenos primero a <a href="mailto:hello@recadly.com">hello@recadly.com</a> — la mayoría de cosas se resuelven así. Los consumidores pueden interponer acciones ante los tribunales de su país de residencia; nada de aquí elimina las protecciones que te otorga la normativa de consumo obligatoria.',
      'terms.h.changes': '12. Cambios en estos Términos',
      'terms.p.changes': 'Podemos actualizar estos Términos ocasionalmente. Para cambios importantes, mostraremos un aviso en la app o por correo. La fecha de "última actualización" en la parte superior está siempre vigente. Continuar usando Recadly tras la entrada en vigor de los cambios implica que aceptas los nuevos Términos.',
      'terms.h.contact': '13. Contacto',
      'terms.p.contact': 'Si tienes preguntas sobre estos Términos, escribe a <a href="mailto:hello@recadly.com">hello@recadly.com</a>.',
      'deletion.metaTitle': 'Eliminación de datos — Recadly',
      'deletion.metaDesc': 'Cómo eliminar tus datos de Recadly.',
      'deletion.h1': 'Eliminación de datos',
      'deletion.updated': 'Última actualización · 25 de mayo de 2026',
      'deletion.intro': 'Puedes eliminar tus datos de Recadly en cualquier momento de dos formas.',
      'deletion.h.option1': 'Opción 1 — Desconectar en la app',
      'deletion.p.option1': 'Abre Recadly, ve a <strong>Ajustes</strong> y desconecta tu cuenta de Instagram. Eso revoca al instante el acceso de Recadly a tu cuenta y elimina el token de acceso almacenado.',
      'deletion.h.option2': 'Opción 2 — Solicitar eliminación completa',
      'deletion.p.option2.a': 'Escribe a <a href="mailto:privacy@recadly.com">privacy@recadly.com</a> desde la dirección asociada a tu cuenta — o incluye tu usuario de Instagram — y pide la eliminación completa de los datos.',
      'deletion.p.option2.b': 'Eliminaremos todos los datos almacenados de tu cuenta — información de la cuenta, tokens de acceso, contenido de mensajes directos y comentarios, reglas de automatización y borradores de respuesta — en un plazo de 30 días, y te lo confirmaremos por correo cuando termine.',
      'deletion.h.questions': 'Preguntas',
      'deletion.p.questions': 'Para cualquier tema relacionado con tus datos, contacta con <a href="mailto:privacy@recadly.com">privacy@recadly.com</a>.',
      'deletion.footnote': 'Esta página es la URL de instrucciones de eliminación de datos referenciada en la configuración de la app de Meta de Recadly.',
    },

    pt: {
      'meta.title': 'Recadly — nunca mais deixe um cliente no vácuo',
      'meta.description':
        'Você diz ao Recadly quais tópicos importam. Ele rascunha sem barulho uma resposta na sua voz para cada DM ou comentário do Instagram que combinar, pronta pra sua aprovação.',

      'nav.features': 'Funcionalidades',
      'nav.how': 'Como funciona',
      'nav.privacy': 'Privacidade',
      'nav.faq': 'Perguntas',
      'nav.cta': 'Entrar na lista',
      'picker.label': 'Idioma',

      'hero.eyebrow': 'Em beta privado',
      'hero.h1': 'Nunca mais deixe um cliente <em>no vácuo</em>.',
      'hero.lede':
        'Você diz ao Recadly quais tópicos importam. Ele rascunha sem barulho uma resposta na sua voz para cada DM ou comentário do Instagram que combinar — você aprova cada uma, ou deixa que tópicos confiáveis se respondam sozinhos. A voz continua sendo a sua.',
      'hero.placeholder': 'voce@marca.studio',
      'hero.cta': 'Entrar na lista',
      'hero.cta_done': 'Você está na lista ✨',
      'hero.meta': 'API oficial da Meta · desconecte quando quiser',
      'carousel.thread':    'A conversa',
      'carousel.inbox':     'DMs e comentários, numa caixa só',
      'carousel.approvals': 'Aprove respostas em segundos',

      'bubble.in': 'Vocês abrem hoje? 🥺',
      'bubble.out': 'Sim — até as 20h 🧡',

      'features.eyebrow': 'O que o Recadly faz',
      'features.title': 'Três ajudas discretas, uma caixa mais tranquila.',
      'features.sub':
        'Cada função fica fora do caminho até você precisar. Nada é enviado sem o seu toque.',

      'feature1.title': 'Respostas sugeridas',
      'feature1.body':
        'Acima da barra de mensagem você vê dois ou três rascunhos que o Recadly acha que combinam. Toque em um para soltar no campo — edite e envie.',
      'feature2.title': 'Roteamento por tópico',
      'feature2.body':
        'Crie regras para tamanhos, frete, trocas, imprensa — o Recadly marca, rascunha a resposta certa, ou encaminha para a pessoa certa.',
      'feature3.title': 'Caixa de aprovação',
      'feature3.body':
        'Todo rascunho da IA fica em um só lugar. Aprove, edite ou pule com um deslizar do polegar. Sua voz sempre continua sua.',

      'spotlight.eyebrow': 'A conversa',
      'spotlight.title': 'Um app de mensagens que você já conhece,<br/>com um copiloto mais tranquilo.',

      'point1.title': 'O Recadly percebe a pergunta',
      'point1.body':
        'Uma pequena dica coral aparece sob a última mensagem do cliente — "percebi uma pergunta sobre frete e trocas". Sem tomar conta, sem voz de chatbot.',
      'point2.title': 'Três rascunhos esperam acima do campo',
      'point2.body':
        'Respostas prontas para tocar — curtas, calorosas, no seu tom. A primeira costuma estar certa. As outras te dão variações.',
      'point3.title': 'Toque → edite → envie',
      'point3.body':
        'Um toque solta o rascunho no campo. Mude uma palavra, troque o emoji, envie quando estiver pronta. Nada sai pelas suas costas.',

      'how.eyebrow': 'Como funciona',
      'how.title': 'Três minutos para configurar.<br/>Horas de volta toda semana.',

      'step1.kicker': 'PASSO 01',
      'step1.title': 'Conecte o Instagram',
      'step1.body':
        'Pela API oficial da Meta. A gente nunca toca na sua senha, e você pode desconectar quando quiser nas configurações.',
      'step2.kicker': 'PASSO 02',
      'step2.title': 'Ensine a sua voz',
      'step2.body':
        'O Recadly estuda suas últimas 50 respostas enviadas para captar o seu tom — seus emojis, seu carinho, seu humor.',
      'step3.kicker': 'PASSO 03',
      'step3.title': 'Aprove, envie, repita',
      'step3.body':
        'Abra uma conversa, toque no rascunho que gostou, envie. Ou passe por todos de uma vez na caixa de aprovação com o café da manhã.',

      'origin.mark': 'Por que "Recadly"',
      'origin.quote':
        'Em português, <em>"deixar um recado"</em> é deixar uma mensagem para alguém — calorosa, pessoal, do jeito que uma amiga faria. Seus clientes merecem esse tipo de resposta.',
      'origin.foot': 're·ca·do · /ʁɨˈkadu/ · subst. um recado deixado com carinho',

      'trust.eyebrow': 'Privacidade por padrão',
      'trust.title': 'As mensagens dos seus clientes não são dados de treinamento.',
      'trust.sub':
        'O Recadly só lê as mensagens que combinam com as regras que você configurar — nada além disso. A gente não vende, não treina, nem compartilha nada.',

      'trust1.title': 'Criptografado em trânsito e em repouso',
      'trust1.body':
        'TLS 1.3 entre seu celular e nossos servidores. AES-256 em disco. Os mesmos protocolos que o seu banco usa.',
      'trust2.title': 'Suas mensagens são suas',
      'trust2.body':
        'Exporte tudo em JSON quando quiser. Apague sua conta e a gente apaga tudo em até 30 dias — sem e-mails de retorno.',
      'trust3.title': 'Os rascunhos expiram',
      'trust3.body':
        'Rascunhos da IA não enviados somem após 7 dias. Sem arquivo parado num banco de dados com os problemas dos seus clientes dentro.',
      'trust4.title': 'Desconecte com um toque',
      'trust4.body':
        'Revogue o acesso nas configurações. O Recadly para de ler, rascunhar e guardar qualquer coisa nova — na hora.',

      'faq.eyebrow': 'Respostas honestas',
      'faq.title': 'O que as pessoas perguntam antes de entrar.',

      'faq1.q': 'O Recadly envia mensagens sozinho?',
      'faq1.a':
        'Você decide. Por padrão o Recadly só rascunha — cada mensagem espera o seu toque para sair. Para tópicos específicos (respostas fora de horário, uma pergunta frequente que você está cansada de digitar) dá pra ligar o envio automático em uma regra. Cada regra é um botão e você volta pro manual quando quiser.',
      'faq2.q': 'Meus clientes vão saber que estão falando com IA?',
      'faq2.a':
        'Eles não estão falando com IA — estão falando com você. O Recadly sugere; você escreve. A maioria dos clientes não saberia distinguir uma resposta assistida pelo Recadly de uma que você escreveu do zero, porque, no fim, foi você que escreveu.',
      'faq3.q': 'O que o Recadly lê?',
      'faq3.a':
        'Só as DMs e comentários em posts e reels que combinam com as regras que você configurar. O Recadly compara cada mensagem que chega com seus tópicos — o que não combina não vira rascunho nem fica guardado. Nunca lemos o seu feed, seus stories, seus seguidores nem qualquer outra parte da sua conta.',
      'faq4.q': 'Quanto custa?',
      'faq4.a':
        'Durante o beta privado, grátis para marcas com menos de 50.000 seguidores. Após o lançamento geral, vamos publicar um preço por usuário claro — sem faixas escondidas de volume nem cobranças surpresa.',
      'faq5.q': 'Minha equipe pode compartilhar uma caixa?',
      'faq5.a':
        'Sim. Adicione colegas pelo e-mail — cada um tem o próprio login, o próprio histórico de rascunhos, e dá pra encaminhar tópicos para pessoas específicas com regras.',
      'faq6.q': 'E o Android?',
      'faq6.a':
        'Primeiro iOS, Android ainda este ano. Entre na lista marcando "Android" e a gente te avisa quando o beta abrir.',

      'cta.title': 'Recupere as suas noites.',
      'cta.sub':
        'Entre na lista e a gente manda o convite para o beta assim que abrir uma vaga. Sem spam, sem sequências de e-mail.',
      'cta.thanks': 'Valeu — até logo ✨',

      'footer.tagline':
        'Um jeito mais tranquilo de cuidar dos recados que seus clientes te deixam. Feito em Barcelona — com <em class="saudade">saudade</em> das praias de Floripa.',
      'footer.product': 'Produto',
      'footer.legal': 'Legal',
      'footer.contact': 'Contato',
      'footer.privacy': 'Política de privacidade',
      'footer.terms': 'Termos de serviço',
      'footer.dpa': 'Exclusão de dados',
      'footer.cookies': 'Cookies',
      'footer.copy': '© 2026 Recadly. Todos os direitos reservados.',
      'footer.privacy_short': 'Privacidade',
      'footer.terms_short': 'Termos',
      'toc.title': 'Nesta página',
      'privacy.metaTitle': 'Política de privacidade — Recadly',
      'privacy.metaDesc': 'Como a Recadly coleta, usa e protege seus dados.',
      'privacy.h1': 'Política de privacidade',
      'privacy.updated': 'Última atualização · 25 de maio de 2026',
      'privacy.toc.who': 'Quem somos',
      'privacy.toc.covers': 'Quem esta política cobre',
      'privacy.toc.what': 'Quais dados processamos',
      'privacy.toc.how': 'Como usamos seus dados',
      'privacy.toc.basis': 'Base legal',
      'privacy.toc.ai': 'Processamento com IA',
      'privacy.toc.sub': 'Subprocessadores',
      'privacy.toc.storage': 'Onde seus dados são armazenados',
      'privacy.toc.retention': 'Retenção de dados',
      'privacy.toc.rights': 'Seus direitos',
      'privacy.toc.deletion': 'Exclusão de dados',
      'privacy.toc.security': 'Segurança',
      'privacy.toc.children': 'Menores',
      'privacy.toc.changes': 'Alterações',
      'privacy.toc.contact': 'Contato',
      'privacy.h.who': '1. Quem somos',
      'privacy.p.who': 'A Recadly ("Recadly", "nós") é um aplicativo iOS que ajuda marcas e criadores a gerenciar suas mensagens diretas do Instagram com assistência de IA. A Recadly é operada por <strong>Helena Emilia Martínez Pérez</strong>, profissional autônoma com sede em Barcelona, Espanha. Somos a controladora dos dados pessoais descritos nesta política. Para qualquer dúvida sobre privacidade, contate <a href="mailto:privacy@recadly.com">privacy@recadly.com</a>.',
      'privacy.h.covers': '2. Quem esta política cobre',
      'privacy.p.covers': 'Esta política cobre dois grupos de pessoas:',
      'privacy.p.covers.users': '<strong>Usuários da Recadly</strong> — as marcas e criadores que instalam a Recadly e conectam sua conta profissional do Instagram.',
      'privacy.p.covers.senders': '<strong>Remetentes de mensagens</strong> — os usuários do Instagram que enviam mensagens diretas a uma conta conectada. Suas mensagens são processadas pela Recadly para que o usuário possa lê-las e respondê-las.',
      'privacy.h.what': '3. Quais dados processamos',
      'privacy.p.what.intro': 'Quando você conecta uma conta profissional do Instagram e à medida que usa a Recadly, processamos:',
      'privacy.p.what.account': '<strong>Informações da conta do Instagram</strong> — o ID da conta, nome de usuário e dados básicos do perfil fornecidos pelo Instagram.',
      'privacy.p.what.token': '<strong>Tokens de acesso</strong> — um token seguro emitido pelo Instagram que permite à Recadly agir em nome da conta conectada.',
      'privacy.p.what.dm': '<strong>Conteúdo de mensagens diretas e comentários</strong> — o texto e os metadados de mensagens diretas e comentários de posts/reels enviados de e para a conta conectada, incluindo mensagens das pessoas que contatam essa conta.',
      'privacy.p.what.rules': '<strong>Regras de automação</strong> — regras de palavras-chave e tópicos que o usuário cria.',
      'privacy.p.what.drafts': '<strong>Rascunhos de respostas</strong> — rascunhos gerados por IA aguardando aprovação do usuário.',
      'privacy.p.what.outro': 'Coletamos apenas os dados necessários para prestar o serviço. Não os usamos para publicidade e não os vendemos.',
      'privacy.h.how': '4. Como usamos seus dados',
      'privacy.p.how.intro': 'Usamos esses dados apenas para oferecer as funcionalidades da Recadly:',
      'privacy.p.how.display': 'Mostrar as conversas do Instagram da conta conectada no app.',
      'privacy.p.how.ai': 'Gerar sugestões de resposta usando IA (ver seção 6).',
      'privacy.p.how.route': 'Encaminhar mensagens recebidas por palavra-chave ou tópico de acordo com as regras do usuário.',
      'privacy.p.how.send': 'Enviar respostas que o usuário escreveu ou revisou e aprovou.',
      'privacy.h.basis': '5. Base legal (RGPD/LGPD)',
      'privacy.p.basis': 'Processamos esses dados para executar nosso contrato com o usuário da Recadly (prestar o serviço) e com base em nosso interesse legítimo em operá-lo e protegê-lo. O processamento das mensagens é feito a pedido do usuário da Recadly e sob os termos do Instagram que regem a mensageria de empresas.',
      'privacy.h.ai': '6. Processamento com IA',
      'privacy.p.ai': 'Para gerar sugestões de resposta e encaminhar mensagens por tópico, a Recadly envia o conteúdo relevante à API Claude da Anthropic. A Anthropic processa esse conteúdo para retornar as sugestões e, sob seus termos comerciais de API, não o utiliza para treinar seus modelos.',
      'privacy.h.sub': '7. Subprocessadores',
      'privacy.p.sub.intro': 'Contamos com estes provedores para operar a Recadly:',
      'privacy.p.sub.anthropic': '<strong>Anthropic</strong> — sugestões de resposta com IA e classificação de mensagens.',
      'privacy.p.sub.neon': '<strong>Neon</strong> — hospedagem do banco de dados (União Europeia — Frankfurt, Alemanha).',
      'privacy.p.sub.fly': '<strong>Fly.io</strong> — hospedagem da aplicação (União Europeia — Frankfurt, Alemanha).',
      'privacy.p.sub.meta': '<strong>Meta Platforms</strong> — Instagram, a fonte dos dados de mensageria.',
      'privacy.h.storage': '8. Onde seus dados são armazenados',
      'privacy.p.storage': 'O banco de dados e os servidores da Recadly estão hospedados na União Europeia (Frankfurt, Alemanha).',
      'privacy.h.retention': '9. Retenção de dados',
      'privacy.p.retention': 'Mantemos seus dados enquanto sua conta do Instagram permanecer conectada à Recadly. Quando você desconectar a conta ou solicitar a exclusão, removemos os dados armazenados — veja a Seção 11 e nossa página <a href="data-deletion.html">Exclusão de dados</a>.',
      'privacy.h.rights': '10. Seus direitos',
      'privacy.p.rights': 'Conforme o RGPD/LGPD, você tem direito a acessar, corrigir, exportar e excluir seus dados pessoais, e a opor-se ou restringir seu tratamento. Para exercer esses direitos, contate <a href="mailto:privacy@recadly.com">privacy@recadly.com</a>. Você também pode apresentar reclamação à autoridade de proteção de dados aplicável.',
      'privacy.h.deletion': '11. Exclusão de dados',
      'privacy.p.deletion': 'Você pode desconectar sua conta do Instagram na Recadly a qualquer momento, o que revoga o acesso da Recadly e exclui o token de acesso armazenado. Para solicitar a exclusão completa de todos os dados armazenados, consulte <a href="data-deletion.html">recadly.com/data-deletion</a> ou escreva para <a href="mailto:privacy@recadly.com">privacy@recadly.com</a>.',
      'privacy.h.security': '12. Segurança',
      'privacy.p.security': 'Os tokens de acesso e os dados das mensagens são armazenados no nosso banco de dados hospedado na UE, com acesso restrito. O acesso aos sistemas de backend é limitado a operadores autorizados.',
      'privacy.h.children': '13. Menores',
      'privacy.p.children': 'A Recadly destina-se a uso por empresas e criadores e não é direcionada a menores de 18 anos.',
      'privacy.h.changes': '14. Alterações nesta política',
      'privacy.p.changes': 'Podemos atualizar esta política de tempos em tempos. A versão atual está sempre publicada aqui, com a data de "última atualização" no topo.',
      'privacy.h.contact': '15. Contato',
      'privacy.p.contact': 'Helena Emilia Martínez Pérez — <a href="mailto:privacy@recadly.com">privacy@recadly.com</a>, Barcelona, Espanha.',
      'terms.metaTitle': 'Termos de Serviço — Recadly',
      'terms.metaDesc': 'Os termos que regem o uso da Recadly.',
      'terms.h1': 'Termos de Serviço',
      'terms.updated': 'Última atualização · 25 de maio de 2026',
      'terms.toc.agreement': 'O acordo',
      'terms.toc.account': 'Sua conta',
      'terms.toc.using': 'Uso da Recadly',
      'terms.toc.meta': 'Instagram & Meta',
      'terms.toc.ai': 'Conteúdo gerado por IA',
      'terms.toc.fees': 'Tarifas',
      'terms.toc.ip': 'Propriedade intelectual',
      'terms.toc.availability': 'Disponibilidade',
      'terms.toc.liability': 'Responsabilidade',
      'terms.toc.termination': 'Rescisão',
      'terms.toc.law': 'Lei aplicável',
      'terms.toc.changes': 'Alterações',
      'terms.toc.contact': 'Contato',
      'terms.h.agreement': '1. O acordo',
      'terms.p.agreement': 'Estes Termos formam um contrato vinculante entre você e <strong>Helena Emilia Martínez Pérez</strong> ("Recadly", "nós"), profissional autônoma com sede em Barcelona, Espanha. Ao criar uma conta ou usar a Recadly, você aceita estes Termos. Se não concordar com alguma parte, por favor não use o serviço. Se estiver usando a Recadly em nome de uma empresa, você confirma ter autoridade para vinculá-la a estes Termos.',
      'terms.h.account': '2. Sua conta',
      'terms.p.account': 'Você precisa ter pelo menos 18 anos e capacidade para celebrar um contrato vinculante. Você é responsável pela precisão das informações da sua conta e por manter suas credenciais seguras. Avise-nos em <a href="mailto:hello@recadly.com">hello@recadly.com</a> assim que suspeitar que alguém acessou sua conta. Você não pode transferir sua conta a terceiros nem criar contas em nome de outra pessoa.',
      'terms.h.using': '3. Uso da Recadly',
      'terms.p.using.intro': 'Você pode usar a Recadly para qualquer finalidade comercial lícita. Você não pode usar a Recadly para:',
      'terms.p.using.illegal': 'Enviar mensagens ilegais, ameaçadoras, de assédio, difamatórias ou que violem os direitos de outra pessoa.',
      'terms.p.using.spam': 'Enviar mensagens comerciais não solicitadas, golpes, tentativas de phishing ou qualquer coisa comumente considerada spam.',
      'terms.p.using.impersonate': 'Passar-se por uma pessoa ou organização, ou distorcer sua afiliação com ela.',
      'terms.p.using.reverse': 'Fazer engenharia reversa ou tentar extrair o código-fonte do serviço, exceto quando essa restrição for proibida por lei.',
      'terms.p.using.interfere': 'Interferir no funcionamento normal do serviço ou sondar por vulnerabilidades.',
      'terms.p.using.outro': 'Se acreditarmos que você violou essas regras, podemos suspender ou encerrar sua conta. Tentamos avisar primeiro, mas para violações graves ou repetidas podemos agir imediatamente.',
      'terms.h.meta': '4. Instagram & Meta Platforms',
      'terms.p.meta': 'A Recadly utiliza a API do Instagram fornecida pela Meta Platforms, Inc. O uso da Recadly também está sujeito aos <a href="https://www.facebook.com/legal/terms" target="_blank" rel="noopener">Termos da Meta</a> e à <a href="https://developers.facebook.com/policy/" target="_blank" rel="noopener">Política da Plataforma da Meta</a>. Você confirma que tem o direito de operar a conta do Instagram que conecta. A Meta pode alterar ou restringir as APIs das quais dependemos; se isso acontecer, partes da Recadly podem deixar de funcionar sem culpa nossa, e faremos o possível para adaptar rapidamente.',
      'terms.h.ai': '5. Conteúdo gerado por IA',
      'terms.p.ai': 'A Recadly redige sugestões de resposta usando modelos de linguagem. Nos esforçamos para que esses rascunhos sejam bons, mas não garantimos que sejam precisos, livres de viés ou apropriados a toda situação. <strong>Você é responsável pelo que realmente envia</strong>, do mesmo modo que é responsável por qualquer outra mensagem enviada a um cliente. Por padrão, cada rascunho exige sua aprovação antes de ser enviado; você também pode configurar tópicos específicos para envio automático, e continua responsável por essas mensagens.',
      'terms.h.fees': '6. Tarifas',
      'terms.p.fees': 'Durante o beta privado, a Recadly é gratuita. Se introduzirmos planos pagos, publicaremos os preços com clareza e avisaremos antes de qualquer cobrança ser aplicada à sua conta. Você nunca será cobrado sem acordo explícito.',
      'terms.h.ip': '7. Propriedade intelectual',
      'terms.p.ip': 'A Recadly, o nome e o logotipo Recadly, o design visual do app e deste site e o código subjacente são de propriedade de Helena Emilia Martínez Pérez ou de nossos licenciadores. Concedemos a você uma licença não exclusiva, intransferível e revogável para usar a Recadly durante a vigência de sua conta, somente para sua finalidade prevista. Você mantém a propriedade do conteúdo que coloca na Recadly e nos concede uma licença para hospedá-lo e processá-lo conforme necessário para prestar o serviço.',
      'terms.h.availability': '8. Disponibilidade',
      'terms.p.availability': 'A Recadly é fornecida "conforme disponibilidade". Nos esforçamos para mantê-la no ar, mas não garantimos serviço ininterrupto, ausência de erros ou compatibilidade com todos os dispositivos. Durante o beta privado, recursos podem mudar ou ser removidos.',
      'terms.h.liability': '9. Responsabilidade',
      'terms.p.liability': 'Na máxima extensão permitida por lei, nossa responsabilidade total perante você por qualquer reclamação decorrente ou relacionada a estes Termos ou ao serviço está limitada a € 100. Não somos responsáveis por danos indiretos, incidentais ou consequenciais, incluindo lucros cessantes, perda de reputação ou interrupção de negócios. Nada nestes Termos limita a responsabilidade que não possa ser limitada pela legislação aplicável.',
      'terms.h.termination': '10. Rescisão',
      'terms.p.termination': 'Você pode encerrar sua conta a qualquer momento nas configurações ou escrevendo para <a href="mailto:hello@recadly.com">hello@recadly.com</a>. Podemos suspender ou encerrar sua conta se você violar estes Termos ou se descontinuarmos o serviço. Na rescisão, excluímos os dados da sua conta conforme descrito em nossa <a href="privacy.html">Política de Privacidade</a>.',
      'terms.h.law': '11. Lei aplicável',
      'terms.p.law': 'Estes Termos são regidos pelas leis da Espanha. Se houver um desacordo, escreva primeiro para <a href="mailto:hello@recadly.com">hello@recadly.com</a> — a maioria das coisas se resolve assim. Consumidores podem ajuizar ações nos tribunais do país de residência; nada aqui remove as proteções garantidas pela legislação consumerista obrigatória.',
      'terms.h.changes': '12. Alterações nestes Termos',
      'terms.p.changes': 'Podemos atualizar estes Termos ocasionalmente. Para mudanças relevantes, exibiremos um aviso no app ou por e-mail. A data de "última atualização" no topo está sempre atualizada. Continuar usando a Recadly após a entrada em vigor das mudanças significa que você aceita os novos Termos.',
      'terms.h.contact': '13. Contato',
      'terms.p.contact': 'Para dúvidas sobre estes Termos, escreva para <a href="mailto:hello@recadly.com">hello@recadly.com</a>.',
      'deletion.metaTitle': 'Exclusão de dados — Recadly',
      'deletion.metaDesc': 'Como excluir seus dados da Recadly.',
      'deletion.h1': 'Exclusão de dados',
      'deletion.updated': 'Última atualização · 25 de maio de 2026',
      'deletion.intro': 'Você pode remover seus dados da Recadly a qualquer momento, de duas formas.',
      'deletion.h.option1': 'Opção 1 — Desconectar no app',
      'deletion.p.option1': 'Abra a Recadly, vá em <strong>Configurações</strong> e desconecte sua conta do Instagram. Isso revoga imediatamente o acesso da Recadly à sua conta e exclui o token de acesso armazenado.',
      'deletion.h.option2': 'Opção 2 — Solicitar exclusão completa',
      'deletion.p.option2.a': 'Escreva para <a href="mailto:privacy@recadly.com">privacy@recadly.com</a> a partir do endereço associado à sua conta — ou inclua seu usuário do Instagram — e peça a exclusão completa dos dados.',
      'deletion.p.option2.b': 'Excluiremos todos os dados armazenados da sua conta — informações da conta, tokens de acesso, conteúdo de mensagens diretas e comentários, regras de automação e rascunhos de resposta — em até 30 dias, e confirmaremos por e-mail ao concluir.',
      'deletion.h.questions': 'Dúvidas',
      'deletion.p.questions': 'Para qualquer assunto relacionado aos seus dados, contate <a href="mailto:privacy@recadly.com">privacy@recadly.com</a>.',
      'deletion.footnote': 'Esta página é a URL de instruções de exclusão de dados referenciada na configuração do app Meta da Recadly.',
    },
  };

  // Country/flag metadata for the picker. Flags are inline SVGs so they
  // render identically on every OS (Windows in particular doesn't ship
  // emoji flags).
  const LANGS = [
    { code: 'en', label: 'English',    short: 'EN', flag: flagGB() },
    { code: 'es', label: 'Español',    short: 'ES', flag: flagES() },
    { code: 'pt', label: 'Português',  short: 'PT', flag: flagBR() },
  ];

  function flagGB() {
    return `<svg viewBox="0 0 60 30" aria-hidden="true">
      <clipPath id="gb-c"><rect width="60" height="30" rx="3"/></clipPath>
      <g clip-path="url(#gb-c)">
        <rect width="60" height="30" fill="#012169"/>
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6"/>
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" stroke-width="3" clip-path="polygon(0 0, 50% 50%, 0 50%, 0 100%, 50% 50%, 0 100%, 100% 100%, 50% 50%, 100% 100%, 100% 50%, 50% 50%, 100% 0)"/>
        <path d="M30,0 V30 M0,15 H60" stroke="#fff" stroke-width="10"/>
        <path d="M30,0 V30 M0,15 H60" stroke="#C8102E" stroke-width="6"/>
      </g>
    </svg>`;
  }
  function flagES() {
    return `<svg viewBox="0 0 60 30" aria-hidden="true">
      <clipPath id="es-c"><rect width="60" height="30" rx="3"/></clipPath>
      <g clip-path="url(#es-c)">
        <rect width="60" height="30" fill="#AA151B"/>
        <rect y="7.5" width="60" height="15" fill="#F1BF00"/>
      </g>
    </svg>`;
  }
  function flagBR() {
    return `<svg viewBox="0 0 60 30" aria-hidden="true">
      <clipPath id="br-c"><rect width="60" height="30" rx="3"/></clipPath>
      <g clip-path="url(#br-c)">
        <rect width="60" height="30" fill="#009B3A"/>
        <polygon points="30,4 55,15 30,26 5,15" fill="#FEDF00"/>
        <circle cx="30" cy="15" r="6" fill="#002776"/>
      </g>
    </svg>`;
  }

  // ─── Apply ────────────────────────────────────────────────
  function apply(lang) {
    const dict = T[lang] || T[DEFAULT_LANG];
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang;

    // Title + meta description
    if (dict['meta.title']) document.title = dict['meta.title'];
    const meta = document.querySelector('meta[name="description"]');
    if (meta && dict['meta.description']) meta.setAttribute('content', dict['meta.description']);

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const k = el.getAttribute('data-i18n');
      if (dict[k] != null) el.textContent = dict[k];
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const k = el.getAttribute('data-i18n-html');
      if (dict[k] != null) el.innerHTML = dict[k];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const k = el.getAttribute('data-i18n-placeholder');
      if (dict[k] != null) el.setAttribute('placeholder', dict[k]);
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const k = el.getAttribute('data-i18n-aria');
      if (dict[k] != null) el.setAttribute('aria-label', dict[k]);
    });

    // Reset signup buttons to current "cta" text (they may have been
    // replaced by "thanks" on submit; we restore on language change).
    document.querySelectorAll('.signup').forEach(form => {
      const btn = form.querySelector('button[type="submit"]');
      if (btn) btn.textContent = dict['hero.cta'];
    });

    // Notify other scripts (e.g. React phone mocks) that lang changed.
    document.dispatchEvent(new CustomEvent('recadly:lang', { detail: { lang } }));
  }

  // ─── Picker ───────────────────────────────────────────────
  function buildPicker() {
    const root = document.querySelector('.lang-picker');
    if (!root) return;
    const dict = T[currentLang()] || T[DEFAULT_LANG];

    root.innerHTML = `
      <button class="lang-trigger" type="button" aria-haspopup="listbox"
        aria-expanded="false" aria-label="${dict['picker.label']}">
        <span class="lang-flag" data-flag></span>
        <span class="lang-code" data-code></span>
        <svg class="lang-caret" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
          <path d="M2 4l3 3 3-3" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <ul class="lang-menu" role="listbox" hidden>
        ${LANGS.map(l => `
          <li role="option" data-lang="${l.code}" tabindex="0">
            <span class="lang-flag">${l.flag}</span>
            <span class="lang-name">${l.label}</span>
            <span class="lang-check" aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 14 14"><path d="M3 7.5l2.5 2.5L11 4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </span>
          </li>`).join('')}
      </ul>
    `;

    const trigger = root.querySelector('.lang-trigger');
    const menu = root.querySelector('.lang-menu');

    function refreshTrigger() {
      const cur = LANGS.find(l => l.code === currentLang()) || LANGS[0];
      root.querySelector('[data-flag]').innerHTML = cur.flag;
      root.querySelector('[data-code]').textContent = cur.short;
      menu.querySelectorAll('li').forEach(li => {
        li.classList.toggle('is-selected', li.dataset.lang === cur.code);
      });
    }

    function openMenu(open) {
      menu.hidden = !open;
      trigger.setAttribute('aria-expanded', String(open));
      root.classList.toggle('is-open', open);
    }

    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      openMenu(menu.hidden);
    });
    menu.addEventListener('click', (e) => {
      const li = e.target.closest('li[data-lang]');
      if (!li) return;
      setLang(li.dataset.lang);
      refreshTrigger();
      openMenu(false);
    });
    menu.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        const li = e.target.closest('li[data-lang]');
        if (li) { setLang(li.dataset.lang); refreshTrigger(); openMenu(false); }
      }
    });
    document.addEventListener('click', (e) => {
      if (!root.contains(e.target)) openMenu(false);
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') openMenu(false);
    });

    refreshTrigger();
  }

  // ─── State ────────────────────────────────────────────────
  function currentLang() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored && T[stored]) return stored;
    } catch (_) {}
    // Browser preference fallback
    const nav = (navigator.language || 'en').toLowerCase();
    if (nav.startsWith('es')) return 'es';
    if (nav.startsWith('pt')) return 'pt';
    return DEFAULT_LANG;
  }
  function setLang(lang) {
    if (!T[lang]) return;
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (_) {}
    apply(lang);
  }

  // ─── Boot ─────────────────────────────────────────────────
  function boot() {
    apply(currentLang());
    buildPicker();
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

  // Expose minimal API
  window.RecadlyI18n = { setLang, currentLang, apply, translations: T };
})();
