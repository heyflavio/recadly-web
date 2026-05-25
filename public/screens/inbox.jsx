// screens/inbox.jsx — Conversation list
// Localized via window.tr() / window.useLang(). Falls back to EN literals
// when used standalone in the design canvas (no i18n).
//
// Mirrors the real app's two-source inbox: DMs *and* post/reel Comments,
// switched with the segmented control at the top.

const _trI = (k, fb) => (window.tr ? window.tr(k, fb) : fb);
const _useLangI = () => (window.useLang ? window.useLang() : 'en');

// Inbox row. `kind` is 'dm' (default) or 'comment'. Comment rows show a
// small swatch standing in for the post/reel thumbnail + a "commented on"
// subhead so the source is unambiguous at a glance.
function InboxRow({ theme, name, handle, preview, time, unread, drafted, lastFromYou, kind = 'dm', postTint }) {
  const t = useT(theme);
  const isComment = kind === 'comment';
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 12,
      padding: '12px 16px',
      borderBottom: `0.5px solid ${t.separator}`,
      position: 'relative',
    }}>
      {/* Leading visual — avatar for DMs, or a tile that pairs the
          commenter's avatar with a post thumbnail for comments. */}
      {isComment ? (
        <div style={{ position: 'relative', width: 52, height: 52, flexShrink: 0 }}>
          <div style={{
            position: 'absolute', inset: 0, width: 44, height: 44,
            borderRadius: 10, overflow: 'hidden',
            background: postTint?.bg || '#E4EAD8',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            {/* Subtle pattern to suggest content without faking imagery */}
            <div style={{
              position: 'absolute', inset: 0,
              background: `radial-gradient(circle at 30% 30%, ${postTint?.fg || '#5C7A2E'}33, transparent 60%), radial-gradient(circle at 70% 70%, ${postTint?.fg || '#5C7A2E'}22, transparent 65%)`,
            }} />
            <Icons.heart size={16} color={postTint?.fg || '#5C7A2E'} strokeWidth={1.7} />
          </div>
          {/* small avatar tucked in the corner */}
          <div style={{
            position: 'absolute', right: 0, bottom: 0,
            width: 22, height: 22, borderRadius: 11,
            boxShadow: `0 0 0 2px ${t.bg}`, overflow: 'hidden',
          }}>
            <Avatar name={name} size={22} />
          </div>
        </div>
      ) : (
        <Avatar name={name} size={52} />
      )}

      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{
          display: 'flex', alignItems: 'baseline', gap: 6,
        }}>
          <div style={{
            fontSize: 15, fontWeight: unread ? 600 : 500,
            color: t.heading, letterSpacing: -0.2,
            whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
          }}>{name}</div>
          <div style={{
            fontSize: 12, color: t.secondary,
            whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
          }}>
            {isComment ? _trI('inbox.commentedOn', 'commented on a post') : `@${handle}`}
          </div>
        </div>
        <div style={{
          fontSize: 14, marginTop: 3, letterSpacing: -0.15,
          color: unread ? t.body : t.secondary,
          fontWeight: unread ? 500 : 400,
          whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
          display: 'flex', alignItems: 'center', gap: 5,
        }}>
          {drafted && (
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 3,
              color: t.accentText, fontWeight: 600,
              fontSize: 12,
            }}>
              <Icons.sparkleFill size={11} color={t.accentText} />
              {_trI('inbox.row.drafted', 'Drafted ·')}
            </span>
          )}
          {lastFromYou && !drafted && <span style={{ color: t.secondary }}>{_trI('inbox.row.you', 'You: ')}</span>}
          <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>{preview}</span>
        </div>
      </div>
      <div style={{
        display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6,
        flexShrink: 0,
      }}>
        <div style={{ fontSize: 12, color: t.secondary, letterSpacing: -0.1 }}>{time}</div>
        {drafted ? (
          <div style={{
            background: t.accent, color: t.onAccent,
            fontSize: 10, fontWeight: 700, letterSpacing: 0.4,
            padding: '3px 7px', borderRadius: 10,
            textTransform: 'uppercase',
          }}>{_trI('inbox.row.replyReady', 'Reply ready')}</div>
        ) : unread ? (
          <div style={{
            width: 9, height: 9, borderRadius: 5, background: t.accent,
          }} />
        ) : (
          <div style={{ height: 9 }} />
        )}
      </div>
    </div>
  );
}

// Top-level source switcher: All / DMs / Comments. iOS-style filled pill
// on a tinted track. The whole control sits on one row, full width.
function SourceSegmentedControl({ theme, active = 'all' }) {
  const t = useT(theme);
  const items = [
    { id: 'all',      label: _trI('inbox.source.all',      'All') },
    { id: 'dms',      label: _trI('inbox.source.dms',      'DMs') },
    { id: 'comments', label: _trI('inbox.source.comments', 'Comments') },
  ];
  return (
    <div style={{
      display: 'flex', padding: '4px',
      background: t.surface, borderRadius: 999,
      margin: '0 16px',
    }}>
      {items.map(it => {
        const sel = it.id === active;
        return (
          <div key={it.id} style={{
            flex: 1, textAlign: 'center',
            padding: '8px 6px', borderRadius: 999,
            background: sel ? t.bg : 'transparent',
            boxShadow: sel
              ? '0 1px 2px rgba(0,0,0,0.06), 0 0 0 0.5px rgba(0,0,0,0.04)'
              : 'none',
            fontSize: 13, fontWeight: sel ? 600 : 500,
            color: sel ? t.heading : t.secondary,
            letterSpacing: -0.1,
          }}>{it.label}</div>
        );
      })}
    </div>
  );
}

function InboxFilters({ theme, active = 'all' }) {
  const t = useT(theme);
  const items = [
    { id: 'all',    label: _trI('inbox.filter.all', 'All'),         count: 24 },
    { id: 'ai',     label: _trI('inbox.filter.ai', 'AI drafted'),   count: 6, sparkle: true },
    { id: 'mine',   label: _trI('inbox.filter.mine', 'Needs me'),   count: 4 },
    { id: 'closed', label: _trI('inbox.filter.closed', 'Resolved'), count: 132 },
  ];
  return (
    <div style={{
      display: 'flex', gap: 8, padding: '12px 16px 12px',
      overflowX: 'auto', scrollbarWidth: 'none',
    }}>
      {items.map(it => {
        const sel = it.id === active;
        return (
          <div key={it.id} style={{
            display: 'inline-flex', alignItems: 'center', gap: 5,
            padding: '7px 12px', borderRadius: 999,
            background: sel ? (it.sparkle ? t.accent : t.heading) : t.surface,
            color: sel ? (it.sparkle ? t.onAccent : t.bg) : t.body,
            fontSize: 13, fontWeight: 600, letterSpacing: -0.1,
            flexShrink: 0,
          }}>
            {it.sparkle && <Icons.sparkleFill size={12} color={sel ? t.onAccent : t.accentText} />}
            {it.label}
            <span style={{
              opacity: sel ? 0.7 : 0.5,
              fontVariantNumeric: 'tabular-nums', fontWeight: 500,
            }}>{it.count}</span>
          </div>
        );
      })}
    </div>
  );
}

// `source` picks which segmented-control tab is active so callers can
// screenshot "Comments" view too. Mixed rows in 'all', filtered otherwise.
function ConversationList({ theme = 'light', source = 'all' }) {
  _useLangI();                  // subscribe to language changes
  const t = useT(theme);

  const dms = [
    { kind: 'dm', name: 'Marina Costa',  handle: 'marinacostaa',   preview: _trI('inbox.preview.marina'), time: '2:18 PM',  unread: true,  drafted: true },
    { kind: 'dm', name: 'Theo Mendez',   handle: 'theo.builds',    preview: _trI('inbox.preview.theo'),   time: '1:52 PM',  unread: true,  drafted: true },
    { kind: 'dm', name: 'Priya Raman',   handle: 'priya.r',        preview: _trI('inbox.preview.priya'),  time: '1:14 PM',  lastFromYou: true },
    { kind: 'dm', name: 'Júlia Almeida', handle: 'juliaaa',        preview: _trI('inbox.preview.julia'),  time: '12:40 PM', unread: true },
    { kind: 'dm', name: 'Sam Okafor',    handle: 'samo.k',         preview: _trI('inbox.preview.sam'),    time: '11:22 AM', lastFromYou: true },
    { kind: 'dm', name: 'Noor Ahmadi',   handle: 'noor.studio',    preview: _trI('inbox.preview.noor'),   time: _trI('inbox.time.yesterday') },
  ];
  const comments = [
    { kind: 'comment', name: 'Lila Romero',  handle: 'lilaa',       preview: _trI('inbox.comment.lila'),   time: '2:05 PM',  unread: true, drafted: true, postTint: { bg: '#FFE7E2', fg: '#C25540' } },
    { kind: 'comment', name: 'Beto Silva',   handle: 'beto.s',      preview: _trI('inbox.comment.beto'),   time: '1:40 PM',  unread: true, postTint: { bg: '#E0E7F2', fg: '#3F5680' } },
    { kind: 'comment', name: 'Ana Vidal',    handle: 'anavidall',   preview: _trI('inbox.comment.ana'),    time: '12:08 PM', drafted: true, postTint: { bg: '#EDE3D2', fg: '#7A5520' } },
    { kind: 'comment', name: 'Rafa Tavares', handle: 'rafatav',     preview: _trI('inbox.comment.rafa'),   time: _trI('inbox.time.yesterday'), postTint: { bg: '#F1E1E8', fg: '#8B3F66' } },
  ];

  // 'all' interleaves to demonstrate that both sources land in one place.
  // Source-specific tabs show only that type.
  let rows;
  if (source === 'dms') rows = dms;
  else if (source === 'comments') rows = comments;
  else rows = [
    dms[0], comments[0], dms[1], comments[1], dms[2], dms[3], comments[2], dms[4], comments[3], dms[5],
  ];

  return (
    <div style={{
      flex: 1, display: 'flex', flexDirection: 'column',
      background: t.bg, minHeight: 0,
    }}>
      {/* Large title header */}
      <div style={{ padding: '4px 20px 12px' }}>
        <div style={{
          display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
          gap: 12,
        }}>
          <div>
            <div style={{
              fontSize: 13, fontWeight: 600, color: t.accentText,
              letterSpacing: 0.4, textTransform: 'uppercase',
              display: 'flex', alignItems: 'center', gap: 5,
            }}>
              <Icons.sparkleFill size={12} color={t.accentText} /> {_trI('inbox.repliesReady', '6 replies ready')}
            </div>
            <div style={{
              fontSize: 34, fontWeight: 700, color: t.heading,
              letterSpacing: -0.8, marginTop: 4, lineHeight: 1.05,
            }}>{_trI('inbox.title', 'Inbox')}</div>
          </div>
        </div>
        {/* search */}
        <div style={{
          marginTop: 14, background: t.surface, borderRadius: 12,
          height: 36, display: 'flex', alignItems: 'center', gap: 8,
          padding: '0 12px', color: t.secondary,
        }}>
          <Icons.search size={17} color={t.secondary} />
          <div style={{ fontSize: 15, color: t.secondary, letterSpacing: -0.2 }}>{_trI('inbox.search', 'Search conversations')}</div>
        </div>
      </div>

      {/* Source switcher — DMs vs. post/reel Comments. */}
      <SourceSegmentedControl theme={theme} active={source} />

      {/* Secondary filters (drafted / needs me / resolved) */}
      <InboxFilters theme={theme} active="all" />

      <div style={{ flex: 1, overflowY: 'auto', scrollbarWidth: 'none' }}>
        {rows.map((r, i) => <InboxRow key={i} theme={theme} {...r} />)}
      </div>

      {/* Tab bar */}
      <TabBar theme={theme} active="inbox" />
    </div>
  );
}

function TabBar({ theme, active }) {
  const t = useT(theme);
  const tabs = [
    { id: 'inbox',     label: _trI('tab.inbox', 'Inbox'),         icon: Icons.chat },
    { id: 'approvals', label: _trI('tab.approvals', 'Approvals'), icon: Icons.sparkle },
    { id: 'rules',     label: _trI('tab.rules', 'Rules'),         icon: Icons.flow },
    { id: 'settings',  label: _trI('tab.settings', 'Account'),    icon: Icons.settings },
  ];
  return (
    <div style={{
      borderTop: `0.5px solid ${t.separator}`,
      background: t.bg,
      padding: '8px 12px 32px',
      display: 'flex', justifyContent: 'space-around',
    }}>
      {tabs.map(tab => {
        const sel = tab.id === active;
        const I = tab.icon;
        const col = sel ? t.accent : t.secondary;
        return (
          <div key={tab.id} style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2,
            color: col, padding: '4px 12px',
          }}>
            <I size={24} color={col} strokeWidth={sel ? 2.1 : 1.8} />
            <div style={{
              fontSize: 10, fontWeight: 600, letterSpacing: 0.1,
            }}>{tab.label}</div>
          </div>
        );
      })}
    </div>
  );
}

window.ConversationList = ConversationList;
window.TabBar = TabBar;
