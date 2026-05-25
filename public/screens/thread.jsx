// screens/thread.jsx — Conversation Thread (the hero screen)
// Instagram-style DM layout: header → messages → AI suggestion strip → compose.
// All user-visible copy goes through window.tr() so the language picker
// on the landing page swaps content live. Falls back to EN literals when
// i18n isn't loaded (e.g. when this file is used inside the design canvas).

const _tr = (k, fb) => (window.tr ? window.tr(k, fb) : fb);
const _useLang = () => (window.useLang ? window.useLang() : 'en');

function ThreadHeader({ theme, name, handle, presence }) {
  const t = useT(theme);
  return (
    <div style={{
      padding: '4px 12px 10px',
      borderBottom: `0.5px solid ${t.separator}`,
      background: t.bg,
      display: 'flex', alignItems: 'center', gap: 10,
      position: 'relative', zIndex: 3,
    }}>
      <button style={{
        background: 'transparent', border: 'none', padding: 8, cursor: 'pointer',
        color: t.accent, display: 'flex', alignItems: 'center',
      }}>
        <Icons.chevronLeft size={24} strokeWidth={2.2} />
      </button>
      <Avatar name={name} size={36} />
      <div style={{ flex: 1, minWidth: 0, lineHeight: 1.15 }}>
        <div style={{ fontSize: 15, fontWeight: 600, color: t.heading, letterSpacing: -0.2 }}>{name}</div>
        <div style={{ fontSize: 12, color: t.secondary, marginTop: 2, display: 'flex', alignItems: 'center', gap: 4 }}>
          {presence && <span style={{
            width: 6, height: 6, borderRadius: 3, background: '#3FBF61', display: 'inline-block',
          }} />}
          @{handle} · {presence ? _tr('thread.activeNow', 'Active now') : _tr('thread.activeAgo', 'Active 2h ago')}
        </div>
      </div>
      <button style={{
        background: 'transparent', border: 'none', padding: 8, cursor: 'pointer',
        color: t.body, opacity: 0.7, display: 'flex',
      }}><Icons.ellipsis size={22} /></button>
    </div>
  );
}

// Day divider — "TODAY 2:14 PM"
function DayDivider({ theme, label }) {
  const t = useT(theme);
  return (
    <div style={{
      textAlign: 'center', margin: '14px 0 8px',
      fontSize: 11, fontWeight: 600, letterSpacing: 1.2,
      color: t.secondary, textTransform: 'uppercase',
    }}>{label}</div>
  );
}

// Tiny "delivered/seen" status under the last outbound bubble in a group.
function ReadReceipt({ theme, label }) {
  const t = useT(theme);
  return (
    <div style={{
      alignSelf: 'flex-end', fontSize: 11, color: t.secondary,
      margin: '2px 4px 0 0', letterSpacing: -0.1,
    }}>{label}</div>
  );
}

// AI-suggestion strip. Three suggestions; tapping one drops it into the
// compose field. Built as a horizontally-scrollable row at the device width.
function SuggestStrip({ theme, suggestions, onPick }) {
  const t = useT(theme);
  return (
    <div style={{
      padding: '10px 14px 8px',
      background: t.bg,
      borderTop: `0.5px solid ${t.separator}`,
    }}>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 6,
        padding: '0 2px 8px',
        fontSize: 11, fontWeight: 600, letterSpacing: 0.8,
        color: t.accentText, textTransform: 'uppercase',
      }}>
        <Icons.sparkleFill size={13} color={t.accentText} />
        {_tr('thread.suggested', 'Suggested replies')}
      </div>
      <div style={{
        display: 'flex', gap: 8, overflowX: 'auto',
        scrollbarWidth: 'none',
      }}>
        {suggestions.map((s, i) => (
          <button key={i} onClick={() => onPick && onPick(s)} style={{
            flexShrink: 0, maxWidth: 260, textAlign: 'left',
            background: t.accentFill, color: t.accentText,
            border: `1px solid ${theme === 'dark' ? 'rgba(255,136,133,0.22)' : 'rgba(229,91,80,0.18)'}`,
            borderRadius: 14, padding: '10px 14px',
            fontFamily: FONT, fontSize: 14, lineHeight: '18px',
            fontWeight: 500, letterSpacing: -0.15, cursor: 'pointer',
          }}>{s}</button>
        ))}
      </div>
    </div>
  );
}

// Compose bar: sparkle (left), text field, send (right). The field shows
// either the placeholder or a draft (e.g. dropped-in suggestion).
function ComposeBar({ theme, draft, focused }) {
  const t = useT(theme);
  const hasText = !!(draft && draft.length);
  return (
    <div style={{
      padding: '8px 12px 12px',
      background: t.bg,
      display: 'flex', alignItems: 'flex-end', gap: 8,
    }}>
      <button style={{
        width: 36, height: 36, borderRadius: 18,
        background: t.surface, border: 'none', cursor: 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: t.accentText, flexShrink: 0,
      }} title="Suggest a reply">
        <Icons.sparkle size={20} color={t.accentText} strokeWidth={1.7} />
      </button>
      <div style={{
        flex: 1, minHeight: 36,
        background: t.surface,
        borderRadius: 18,
        padding: '8px 14px',
        boxShadow: focused ? `0 0 0 2px ${t.accent}` : 'none',
        display: 'flex', alignItems: 'center',
        fontFamily: FONT, fontSize: 16, lineHeight: '20px',
        letterSpacing: -0.2,
        color: hasText ? t.body : t.secondary,
      }}>
        {hasText ? draft : _tr('thread.composePlaceholder', 'Message…')}
      </div>
      <button style={{
        width: 36, height: 36, borderRadius: 18,
        background: hasText ? t.accent : t.surface,
        color: hasText ? t.onAccent : t.secondary,
        border: 'none', cursor: 'pointer', flexShrink: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'background 0.15s',
      }}>
        <Icons.send size={20} color={hasText ? t.onAccent : t.secondary} />
      </button>
    </div>
  );
}

// Default thread content. opts:
//   draft — text in compose field (simulates a tapped suggestion). When
//           draft === true, we pull the localized "draftFilled" string
//           so callers don't have to know which language we're in.
//   suggestionsHidden — hide the AI strip (when the user is mid-edit)
function ConversationThread({ theme = 'light', draft = '', focused = false, suggestionsHidden = false }) {
  _useLang();                   // subscribe to language changes → re-render
  const t = useT(theme);

  const suggestions = [
    _tr('thread.suggest.1', 'Ships free to Floripa — usually 2–3 business days ✨'),
    _tr('thread.suggest.2', 'Yes! We replace it within 30 days, no questions.'),
    _tr('thread.suggest.3', "I'll DM you a 10% code for being patient 🧡"),
  ];

  // Allow callers to pass `draft={true}` and let the component pick the
  // localized "filled draft" sample. Anything else is used as-is.
  const draftText = draft === true ? _tr('thread.draftFilled', suggestions[0]) : draft;

  return (
    <div style={{
      flex: 1, display: 'flex', flexDirection: 'column',
      background: t.bg, minHeight: 0,
    }}>
      <ThreadHeader theme={theme} name="Marina Costa" handle="marinacostaa" presence />

      <div style={{
        flex: 1, overflowY: 'auto', padding: '8px 14px 8px',
        display: 'flex', flexDirection: 'column', gap: 3,
        scrollbarWidth: 'none',
      }}>
        <DayDivider theme={theme} label={_tr('thread.dayDivider', 'Today 2:14 PM')} />

        <Bubble side="in" theme={theme} tail={false}>{_tr('thread.bubble.q1')}</Bubble>
        <Bubble side="in" theme={theme}>{_tr('thread.bubble.q2')}</Bubble>

        <div style={{ height: 6 }} />
        <Bubble side="out" theme={theme} tail={false}>{_tr('thread.bubble.a1')}</Bubble>
        <Bubble side="out" theme={theme}>{_tr('thread.bubble.a2')}</Bubble>
        <ReadReceipt theme={theme} label={_tr('thread.seenEarlier', 'Seen 2:16 PM')} />

        <div style={{ height: 8 }} />
        <Bubble side="in" theme={theme} tail={false}>{_tr('thread.bubble.q3')}</Bubble>
        <Bubble side="in" theme={theme}>{_tr('thread.bubble.q4')}</Bubble>

        <div style={{ height: 6 }} />

        {/* AI-context strip — a soft, in-line hint that AI is paying
            attention. Lives between the last inbound message and the
            compose, so suggestions feel earned, not invasive. */}
        <div style={{
          alignSelf: 'flex-start', display: 'inline-flex', alignItems: 'center', gap: 6,
          padding: '4px 10px', borderRadius: 999, marginTop: 4, marginBottom: 2,
          background: t.accentFill, color: t.accentText,
          fontSize: 11, fontWeight: 600, letterSpacing: 0.2,
          border: `1px solid ${theme === 'dark' ? 'rgba(255,136,133,0.22)' : 'rgba(229,91,80,0.16)'}`,
        }}>
          <Icons.sparkleFill size={11} color={t.accentText} />
          {_tr('thread.aiHint', 'Recadly noticed a question about shipping & returns')}
        </div>
      </div>

      {!suggestionsHidden && (
        <SuggestStrip theme={theme} suggestions={suggestions} />
      )}
      <ComposeBar theme={theme} draft={draftText} focused={focused} />
    </div>
  );
}

window.ConversationThread = ConversationThread;
