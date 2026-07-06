/* web/i18n-screens.js — translations for the React phone-mock screens.
   Merges into window.RecadlyI18n.translations once i18n.js is loaded,
   and exposes two helpers used by the screen components:

     window.tr(key, fallback?)         → translated string (current lang)
     window.useLang()                  → React hook; current lang code,
                                         re-renders the calling component
                                         when the user changes language.

   This file MUST be loaded after i18n.js and before the screen .jsx files.
*/

(function () {
  const S = {
    en: {
      // ── Conversation thread ──────────────────────────────
      'thread.activeNow':       'Active now',
      'thread.activeAgo':       'Active 2h ago',
      'thread.seen':            'Seen 2:18 PM',
      'thread.seenEarlier':     'Seen 2:16 PM',
      'thread.dayDivider':      'Today 2:14 PM',
      'thread.suggested':       'Suggested replies',
      'thread.composePlaceholder': 'Message…',
      'thread.aiHint':          'Recadly noticed a question about shipping & returns',
      'thread.bubble.q1':       'Hi! Are the linen tees back in stock yet?',
      'thread.bubble.q2':       'Specifically the sand color in M 🙏',
      'thread.bubble.a1':       'Hey Marina! Restocked yesterday — sand M is live again.',
      'thread.bubble.a2':       'Want me to drop the link here?',
      'thread.bubble.q3':       'Yes please!! And do you ship to Floripa?',
      'thread.bubble.q4':       "Also — what if the size doesn't fit?",
      'thread.suggest.1':       'Ships free to Floripa — usually 2–3 business days ✨',
      'thread.suggest.2':       'Yes! We replace it within 30 days, no questions.',
      'thread.suggest.3':       "I'll DM you a 10% code for being patient 🧡",
      'thread.draftFilled':     'Ships free to Floripa — usually 2–3 business days ✨',

      // ── Inbox ────────────────────────────────────────────
      'inbox.title':            'Inbox',
      'inbox.repliesReady':     '6 replies ready',
      'inbox.search':           'Search conversations',
      'inbox.filter.all':       'All',
      'inbox.filter.ai':        'AI drafted',
      'inbox.filter.mine':      'Needs me',
      'inbox.filter.closed':    'Resolved',
      'inbox.row.drafted':      'Drafted ·',
      'inbox.row.you':          'You: ',
      'inbox.row.replyReady':   'Reply ready',
      'inbox.source.all':       'All',
      'inbox.source.dms':       'DMs',
      'inbox.source.comments':  'Comments',
      'inbox.commentedOn':      'commented on a post',
      'inbox.comment.lila':     'love this color!! is the gold one back yet??',
      'inbox.comment.beto':     'where’s this from?? need it 🤍',
      'inbox.comment.ana':      'are the new linen tees true to size?',
      'inbox.comment.rafa':     'do you guys ship to Floripa? 🙏',
      'inbox.preview.marina':   'Yes please!! And do you ship to Floripa?',
      'inbox.preview.theo':     'Got it — the gold one then 🙂',
      'inbox.preview.priya':    'Refund processed, thank you for your patience.',
      'inbox.preview.julia':    "oh wait the discount code didn't work",
      'inbox.preview.sam':      "You: I'll check with the warehouse and circle…",
      'inbox.preview.noor':     'collab idea — coffee table book launch',
      'inbox.preview.diego':    'Cool will wait for the restock!',
      'inbox.preview.hana':     'Thanks for the quick reply 🧡',
      'inbox.time.yesterday':   'Yesterday',

      // ── Tab bar ──────────────────────────────────────────
      'tab.inbox':              'Inbox',
      'tab.rules':              'Rules',
      'tab.approvals':          'Approvals',
      'tab.settings':           'Account',

      // ── Approval inbox ───────────────────────────────────
      'appr.title':             'Approvals',
      'appr.waiting':           '6 waiting on you',
      'appr.desc':              "Review what Recadly wants to send. Approve, tweak, or skip — your voice stays yours.",
      'appr.drafted':           'Recadly drafted',
      'appr.match.high':        'High match',
      'appr.match.medium':      'Medium match',
      'appr.match.low':         'Low match',
      'appr.action.reject':     'Reject',
      'appr.action.edit':       'Edit',
      'appr.action.send':       'Send',
      'appr.tag.shipping':      'Shipping',
      'appr.tag.restock':       'Restock',
      'appr.moreBelow':         '4 more drafts below',
      'appr.c1.time':           '2 min ago',
      'appr.c1.incoming':       "Yes please!! And do you ship to Floripa? Also — what if the size doesn't fit?",
      'appr.c1.draft':          "Hey Marina! Ships free to Floripa — usually 2–3 business days 💛 And if the fit is off, you have 30 days to swap for any size, on us. I'll drop the link in a sec!",
      'appr.c2.time':           '11 min ago',
      'appr.c2.incoming':       'Any chance the gold pendant is coming back? Been eyeing it for weeks 🙃',
      'appr.c2.draft':          "Hey Theo! Gold pendants land back in stock next Tuesday. Want me to ping you the minute they're up? Saving one's on the house.",
    },

    es: {
      // ── Conversation thread ──────────────────────────────
      'thread.activeNow':       'En línea',
      'thread.activeAgo':       'Activa hace 2h',
      'thread.seen':            'Visto 14:18',
      'thread.seenEarlier':     'Visto 14:16',
      'thread.dayDivider':      'Hoy 14:14',
      'thread.suggested':       'Respuestas sugeridas',
      'thread.composePlaceholder': 'Mensaje…',
      'thread.aiHint':          'Recadly detectó una pregunta sobre envíos y devoluciones',
      'thread.bubble.q1':       '¡Hola! ¿Las camisetas de lino ya están de vuelta?',
      'thread.bubble.q2':       'Sobre todo el color arena en talla M 🙏',
      'thread.bubble.a1':       '¡Hey Marina! Reposición ayer — arena M ya está disponible.',
      'thread.bubble.a2':       '¿Quieres que te pase el link por aquí?',
      'thread.bubble.q3':       '¡Sí, por favor! ¿Y hacen envíos a Floripa?',
      'thread.bubble.q4':       '¿Y si la talla no me queda bien?',
      'thread.suggest.1':       'Envío gratis a Floripa — normalmente 2–3 días laborables ✨',
      'thread.suggest.2':       '¡Sí! Lo cambiamos en 30 días, sin preguntas.',
      'thread.suggest.3':       'Te paso un código del 10% por la paciencia 🧡',
      'thread.draftFilled':     'Envío gratis a Floripa — normalmente 2–3 días laborables ✨',

      // ── Inbox ────────────────────────────────────────────
      'inbox.title':            'Bandeja',
      'inbox.repliesReady':     '6 respuestas listas',
      'inbox.search':           'Buscar conversaciones',
      'inbox.filter.all':       'Todas',
      'inbox.filter.ai':        'Con IA',
      'inbox.filter.mine':      'Por revisar',
      'inbox.filter.closed':    'Resueltas',
      'inbox.row.drafted':      'Borrador ·',
      'inbox.row.you':          'Tú: ',
      'inbox.row.replyReady':   'Lista',
      'inbox.source.all':       'Todos',
      'inbox.source.dms':       'DMs',
      'inbox.source.comments':  'Comentarios',
      'inbox.commentedOn':      'comentaró en una publicación',
      'inbox.comment.lila':     '¡me encanta este color!! ¿ya volvió el dorado?',
      'inbox.comment.beto':     '¿de dónde es?? lo necesito 🤍',
      'inbox.comment.ana':      '¿las camisetas de lino tallan bien?',
      'inbox.comment.rafa':     '¿hacen envíos a Floripa? 🙏',
      'inbox.preview.marina':   '¡Sí, por favor! ¿Y hacen envíos a Floripa?',
      'inbox.preview.theo':     'Vale — el dorado entonces 🙂',
      'inbox.preview.priya':    'Reembolso procesado, gracias por la paciencia.',
      'inbox.preview.julia':    'eh, el código de descuento no funcionó',
      'inbox.preview.sam':      'Tú: Lo miro con el almacén y te aviso…',
      'inbox.preview.noor':     'idea de colab — lanzamiento del libro',
      'inbox.preview.diego':    '¡Genial, espero a la reposición!',
      'inbox.preview.hana':     'Gracias por la respuesta rápida 🧡',
      'inbox.time.yesterday':   'Ayer',

      // ── Tab bar ──────────────────────────────────────────
      'tab.inbox':              'Bandeja',
      'tab.rules':              'Reglas',
      'tab.approvals':          'Pendientes',
      'tab.settings':           'Cuenta',

      // ── Approval inbox ───────────────────────────────────
      'appr.title':             'Pendientes',
      'appr.waiting':           '6 esperando tu visto bueno',
      'appr.desc':              'Revisa lo que Recadly quiere enviar. Aprueba, edita o salta — tu voz sigue siendo tuya.',
      'appr.drafted':           'Borrador de Recadly',
      'appr.match.high':        'Coincidencia alta',
      'appr.match.medium':      'Coincidencia media',
      'appr.match.low':         'Coincidencia baja',
      'appr.action.reject':     'Rechazar',
      'appr.action.edit':       'Editar',
      'appr.action.send':       'Enviar',
      'appr.tag.shipping':      'Envíos',
      'appr.tag.restock':       'Reposición',
      'appr.moreBelow':         '4 borradores más abajo',
      'appr.c1.time':           'hace 2 min',
      'appr.c1.incoming':       '¡Sí, por favor! ¿Y hacen envíos a Floripa? ¿Y si la talla no me queda bien?',
      'appr.c1.draft':          '¡Hey Marina! Envío gratis a Floripa — normalmente 2–3 días laborables 💛 Y si la talla no es la tuya, tienes 30 días para cambiarla, invita la casa. ¡Te paso el link enseguida!',
      'appr.c2.time':           'hace 11 min',
      'appr.c2.incoming':       '¿Hay chance de que vuelva el colgante dorado? Llevo semanas mirándolo 🙃',
      'appr.c2.draft':          '¡Hey Theo! Los colgantes dorados vuelven el próximo martes. ¿Te aviso en cuanto estén? Te guardo uno, invita la casa.',
    },

    pt: {
      // ── Conversation thread ──────────────────────────────
      'thread.activeNow':       'Online agora',
      'thread.activeAgo':       'Ativa há 2h',
      'thread.seen':            'Visto 14:18',
      'thread.seenEarlier':     'Visto 14:16',
      'thread.dayDivider':      'Hoje 14:14',
      'thread.suggested':       'Respostas sugeridas',
      'thread.composePlaceholder': 'Mensagem…',
      'thread.aiHint':          'O Recadly percebeu uma pergunta sobre frete e trocas',
      'thread.bubble.q1':       'Oi! As camisetas de linho voltaram pro estoque?',
      'thread.bubble.q2':       'Principalmente a cor areia no M 🙏',
      'thread.bubble.a1':       'Oi Marina! Repusemos ontem — areia M tá disponível de novo.',
      'thread.bubble.a2':       'Quer que eu mande o link por aqui?',
      'thread.bubble.q3':       'Sim, por favor!! E vocês entregam em Floripa?',
      'thread.bubble.q4':       'E se o tamanho não servir?',
      'thread.suggest.1':       'Frete grátis pra Floripa — normalmente 2–3 dias úteis ✨',
      'thread.suggest.2':       'Sim! Trocamos em até 30 dias, sem pergunta.',
      'thread.suggest.3':       'Te mando um cupom de 10% pela paciência 🧡',
      'thread.draftFilled':     'Frete grátis pra Floripa — normalmente 2–3 dias úteis ✨',

      // ── Inbox ────────────────────────────────────────────
      'inbox.title':            'Caixa',
      'inbox.repliesReady':     '6 respostas prontas',
      'inbox.search':           'Buscar conversas',
      'inbox.filter.all':       'Todas',
      'inbox.filter.ai':        'Com IA',
      'inbox.filter.mine':      'Pra revisar',
      'inbox.filter.closed':    'Resolvidas',
      'inbox.row.drafted':      'Rascunho ·',
      'inbox.row.you':          'Você: ',
      'inbox.row.replyReady':   'Pronta',
      'inbox.source.all':       'Tudo',
      'inbox.source.dms':       'DMs',
      'inbox.source.comments':  'Comentários',
      'inbox.commentedOn':      'comentou em um post',
      'inbox.comment.lila':     'amei essa cor!! o dourado já voltou??',
      'inbox.comment.beto':     'de onde é?? preciso 🤍',
      'inbox.comment.ana':      'as camisetas de linho vão no tamanho normal?',
      'inbox.comment.rafa':     'vocês entregam em Floripa? 🙏',
      'inbox.preview.marina':   'Sim, por favor!! E vocês entregam em Floripa?',
      'inbox.preview.theo':     'Show — o dourado então 🙂',
      'inbox.preview.priya':    'Reembolso feito, obrigada pela paciência.',
      'inbox.preview.julia':    'ei, o cupom de desconto não funcionou',
      'inbox.preview.sam':      'Você: Vou conferir com o estoque e te aviso…',
      'inbox.preview.noor':     'ideia de collab — lançamento do livro',
      'inbox.preview.diego':    'Show, espero a reposição!',
      'inbox.preview.hana':     'Valeu pela resposta rápida 🧡',
      'inbox.time.yesterday':   'Ontem',

      // ── Tab bar ──────────────────────────────────────────
      'tab.inbox':              'Caixa',
      'tab.rules':              'Regras',
      'tab.approvals':          'Aprovações',
      'tab.settings':           'Conta',

      // ── Approval inbox ───────────────────────────────────
      'appr.title':             'Aprovações',
      'appr.waiting':           '6 esperando você',
      'appr.desc':              'Veja o que o Recadly quer enviar. Aprove, ajuste ou pule — a voz continua sendo a sua.',
      'appr.drafted':           'Rascunho do Recadly',
      'appr.match.high':        'Match alto',
      'appr.match.medium':      'Match médio',
      'appr.match.low':         'Match baixo',
      'appr.action.reject':     'Rejeitar',
      'appr.action.edit':       'Editar',
      'appr.action.send':       'Enviar',
      'appr.tag.shipping':      'Frete',
      'appr.tag.restock':       'Reposição',
      'appr.moreBelow':         'Mais 4 rascunhos abaixo',
      'appr.c1.time':           'há 2 min',
      'appr.c1.incoming':       'Sim, por favor!! E vocês entregam em Floripa? E se o tamanho não servir?',
      'appr.c1.draft':          'Oi Marina! Frete grátis pra Floripa — normalmente 2–3 dias úteis 💛 E se o tamanho não servir, você tem 30 dias pra trocar por qualquer outro, por nossa conta. Te mando o link já já!',
      'appr.c2.time':           'há 11 min',
      'appr.c2.incoming':       'Tem chance do pingente dourado voltar? Tô de olho nele faz semanas 🙃',
      'appr.c2.draft':          'Oi Theo! Os pingentes dourados voltam ao estoque terça-feira. Quero te avisar assim que entrarem? Guardo um — por nossa conta.',
    },
  };

  // Merge into the main translations dict from i18n.js (always loaded first).
  function merge() {
    const T = window.RecadlyI18n.translations;
    for (const lang of Object.keys(S)) {
      T[lang] = Object.assign(T[lang] || {}, S[lang]);
    }
  }
  merge();

  // ─── Helpers used by the React screen components ──────────
  // tr(key, fallback?) — synchronous lookup against the current lang.
  // Falls back to: en dict → fallback arg → the key itself.
  window.tr = function (key, fallback) {
    const lang = (window.RecadlyI18n && window.RecadlyI18n.currentLang()) || 'en';
    const T = window.RecadlyI18n.translations;
    return (T[lang] && T[lang][key])
        || (T.en && T.en[key])
        || (fallback != null ? fallback : key);
  };

  // useLang() — React hook. Returns the current language code AND
  // forces the calling component to re-render whenever the user
  // changes language (we listen for the `recadly:lang` event that
  // i18n.js dispatches on every apply()).
  window.useLang = function () {
    const lang0 = (window.RecadlyI18n && window.RecadlyI18n.currentLang()) || 'en';
    const [lang, setLang] = React.useState(lang0);
    React.useEffect(() => {
      const handler = (e) => setLang(e.detail.lang);
      document.addEventListener('recadly:lang', handler);
      return () => document.removeEventListener('recadly:lang', handler);
    }, []);
    return lang;
  };
})();
