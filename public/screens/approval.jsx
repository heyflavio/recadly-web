// screens/approval.jsx — Approval inbox (cards: incoming → AI draft → actions)
// All copy goes through window.tr() with EN fallbacks for canvas use.

const _trA = (k, fb) => (window.tr ? window.tr(k, fb) : fb);
const _useLangA = () => (window.useLang ? window.useLang() : 'en');

function ApprovalCard({ theme, name, handle, time, incoming, draft, tag, confidence, last }) {
  const t = useT(theme);
  return (
    <div style={{
      background: t.bg, borderRadius: 22,
      padding: 16,
      boxShadow: theme === 'light' ? '0 2px 8px rgba(0,0,0,0.05), 0 0 0 0.5px rgba(0,0,0,0.04)' : 'none',
      border: theme === 'dark' ? `0.5px solid ${t.separator}` : 'none',
      marginBottom: last ? 0 : 12,
    }}>
      {/* Header: who + topic tag */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <Avatar name={name} size={36} />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{
            fontSize: 14, fontWeight: 600, color: t.heading,
            letterSpacing: -0.2, lineHeight: 1.15,
          }}>{name}</div>
          <div style={{
            fontSize: 12, color: t.secondary, marginTop: 1,
            letterSpacing: -0.1,
          }}>@{handle} · {time}</div>
        </div>
        <div style={{
          fontSize: 11, fontWeight: 600, letterSpacing: 0.1,
          padding: '4px 8px', borderRadius: 999,
          background: tag.bg, color: tag.fg,
        }}>{tag.label}</div>
      </div>

      {/* Incoming */}
      <div style={{
        margin: '14px 0 0',
        padding: '11px 14px', background: t.surface, color: t.body,
        borderRadius: '14px 14px 14px 4px',
        fontSize: 14, lineHeight: '19px', letterSpacing: -0.15,
      }}>{incoming}</div>

      {/* Draft section header */}
      <div style={{
        marginTop: 14, marginBottom: 6,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 6,
          fontSize: 11, fontWeight: 700, letterSpacing: 0.9, textTransform: 'uppercase',
          color: t.accentText,
        }}>
          <Icons.sparkleFill size={11} color={t.accentText} />
          {_trA('appr.drafted', 'Recadly drafted')}
        </div>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 4,
          fontSize: 11, color: t.secondary, fontWeight: 500,
        }}>
          {/* confidence dots */}
          {[0,1,2].map(i => (
            <div key={i} style={{
              width: 5, height: 5, borderRadius: 3,
              background: i < confidence ? t.accent : (theme === 'dark' ? '#4A4A4A' : '#D9D9D9'),
            }} />
          ))}
          <span style={{ marginLeft: 3 }}>
            {confidence === 3 ? _trA('appr.match.high', 'High match')
              : confidence === 2 ? _trA('appr.match.medium', 'Medium match')
              : _trA('appr.match.low', 'Low match')}
          </span>
        </div>
      </div>

      {/* Draft */}
      <div style={{
        padding: '12px 14px',
        background: t.accentFill,
        color: theme === 'dark' ? t.body : t.heading,
        border: `1px solid ${theme === 'dark' ? 'rgba(255,136,133,0.22)' : 'rgba(229,91,80,0.16)'}`,
        borderRadius: 14,
        fontSize: 14.5, lineHeight: '20px', letterSpacing: -0.15,
        whiteSpace: 'pre-wrap',
      }}>{draft}</div>

      {/* Actions */}
      <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
        <button style={{
          flex: 1, height: 40, borderRadius: 12,
          background: t.surface, color: t.body, border: 'none',
          fontFamily: FONT, fontSize: 14, fontWeight: 600,
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5,
          letterSpacing: -0.1,
        }}>
          <Icons.x size={16} /> {_trA('appr.action.reject', 'Reject')}
        </button>
        <button style={{
          flex: 1, height: 40, borderRadius: 12,
          background: t.surface, color: t.body, border: 'none',
          fontFamily: FONT, fontSize: 14, fontWeight: 600,
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5,
          letterSpacing: -0.1,
        }}>
          <Icons.pencil size={15} /> {_trA('appr.action.edit', 'Edit')}
        </button>
        <button style={{
          flex: 1.2, height: 40, borderRadius: 12,
          background: t.accent, color: t.onAccent, border: 'none',
          fontFamily: FONT, fontSize: 14, fontWeight: 600,
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5,
          letterSpacing: -0.1, boxShadow: '0 4px 12px rgba(255,111,97,0.25)',
        }}>
          <Icons.check size={17} strokeWidth={2.4} color={t.onAccent} /> {_trA('appr.action.send', 'Send')}
        </button>
      </div>
    </div>
  );
}

function ApprovalInbox({ theme = 'light' }) {
  _useLangA();
  const t = useT(theme);
  const cards = [
    {
      name: 'Marina Costa', handle: 'marinacostaa', time: _trA('appr.c1.time', '2 min ago'),
      tag: { label: _trA('appr.tag.shipping', 'Shipping'), bg: '#FFE7E2', fg: '#C25540' },
      incoming: _trA('appr.c1.incoming'),
      draft:    _trA('appr.c1.draft'),
      confidence: 3,
    },
    {
      name: 'Theo Mendez', handle: 'theo.builds', time: _trA('appr.c2.time', '11 min ago'),
      tag: { label: _trA('appr.tag.restock', 'Restock'), bg: '#E4EAD8', fg: '#5C7A2E' },
      incoming: _trA('appr.c2.incoming'),
      draft:    _trA('appr.c2.draft'),
      confidence: 2,
    },
  ];

  return (
    <div style={{
      flex: 1, display: 'flex', flexDirection: 'column',
      background: theme === 'dark' ? t.bg : '#FAFAFA', minHeight: 0,
    }}>
      <div style={{ padding: '4px 20px 14px' }}>
        <div style={{
          fontSize: 13, fontWeight: 600, color: t.accentText,
          letterSpacing: 0.4, textTransform: 'uppercase',
          display: 'flex', alignItems: 'center', gap: 5,
        }}>
          <Icons.sparkleFill size={12} color={t.accentText} />
          {_trA('appr.waiting', '6 waiting on you')}
        </div>
        <div style={{
          fontSize: 34, fontWeight: 700, color: t.heading,
          letterSpacing: -0.8, lineHeight: 1.05, marginTop: 4,
        }}>{_trA('appr.title', 'Approvals')}</div>
        <div style={{
          fontSize: 14, color: t.secondary, marginTop: 8,
          lineHeight: '19px', letterSpacing: -0.15, maxWidth: 320,
        }}>
          {_trA('appr.desc', 'Review what Recadly wants to send. Approve, tweak, or skip — your voice stays yours.')}
        </div>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: '0 16px 16px', scrollbarWidth: 'none' }}>
        {cards.map((c, i) => (
          <ApprovalCard key={i} theme={theme} {...c} last={i === cards.length - 1} />
        ))}
        <div style={{
          textAlign: 'center', padding: '14px 0 6px',
          fontSize: 12, color: t.secondary, letterSpacing: -0.1,
        }}>{_trA('appr.moreBelow', '4 more drafts below')}</div>
      </div>

      <TabBar theme={theme} active="approvals" />
    </div>
  );
}

window.ApprovalInbox = ApprovalInbox;
