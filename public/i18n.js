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
