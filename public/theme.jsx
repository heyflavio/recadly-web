// theme.jsx — Recadly design tokens + shared chrome primitives
// Semantic color tokens (light/dark), spacing, type scale, SF-style icons.

const TOKENS = {
  light: {
    bg:        '#FFFFFF',
    surface:   '#F5F5F5',
    surface2:  '#FAFAFA',  // very subtle layer above bg (compose bar, etc.)
    heading:   '#252525',
    body:      '#333333',
    secondary: '#8A8A8A',
    accent:    '#FF6F61',
    accentSoft:'#FF8885',
    accentText:'#E55B50',
    accentFill:'#FFF1EF',  // tint for AI chips on light
    separator: '#E8E8E8',
    onAccent:  '#FFFFFF',
    chrome:    '#FFFFFF',  // nav bar bg
    chromeBlur:'rgba(255,255,255,0.82)',
  },
  dark: {
    bg:        '#252525',
    surface:   '#333333',
    surface2:  '#2D2D2D',
    heading:   '#FFFFFF',
    body:      '#F5F5F5',
    secondary: '#9A9A9A',
    accent:    '#FF6F61',
    accentSoft:'#FF8885',
    accentText:'#FF8885',
    accentFill:'#3A2A28',  // deep coral-tinted surface
    separator: '#3D3D3D',
    onAccent:  '#FFFFFF',
    chrome:    '#252525',
    chromeBlur:'rgba(37,37,37,0.82)',
  },
};

const FONT = '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", system-ui, sans-serif';

// useT: returns the active token set for a given theme key
function useT(theme) { return TOKENS[theme === 'dark' ? 'dark' : 'light']; }

// ─────────────────────────────────────────────────────────────
// Icons — SF-Symbols-style line glyphs. stroke 1.8, rounded caps.
// All accept { size, color } and render at currentColor by default.
// ─────────────────────────────────────────────────────────────
const Icon = ({ d, size = 22, color = 'currentColor', fill = 'none', strokeWidth = 1.8, ...rest }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={color}
    strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...rest}>
    {d}
  </svg>
);

const Icons = {
  chevronLeft: (p) => <Icon {...p} d={<path d="M15 5l-7 7 7 7"/>} />,
  chevronRight:(p) => <Icon {...p} d={<path d="M9 5l7 7-7 7"/>} />,
  chevronDown: (p) => <Icon {...p} d={<path d="M5 9l7 7 7-7"/>} />,
  ellipsis:    (p) => <Icon {...p} fill="currentColor" strokeWidth="0" d={<>
    <circle cx="5" cy="12" r="1.7"/><circle cx="12" cy="12" r="1.7"/><circle cx="19" cy="12" r="1.7"/></>} />,
  phone:       (p) => <Icon {...p} d={<path d="M5 4h3l2 5-2.5 1.5a11 11 0 005 5L14 13l5 2v3a2 2 0 01-2 2A14 14 0 014 6a2 2 0 011-2z"/>} />,
  video:       (p) => <Icon {...p} d={<><rect x="3" y="6" width="13" height="12" rx="2.5"/><path d="M16 10l5-3v10l-5-3z"/></>} />,
  send:        (p) => <Icon {...p} fill="currentColor" strokeWidth="0" d={<path d="M12 4l-7 7h4v8h6v-8h4z"/>} />,
  // Sparkle — the AI mark. Four-point star with two small accent sparkles.
  sparkle: ({ size = 22, color = 'currentColor', strokeWidth = 1.6 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color}
      strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l1.6 4.6a3 3 0 002 2L20 11l-4.4 1.4a3 3 0 00-2 2L12 19l-1.6-4.6a3 3 0 00-2-2L4 11l4.4-1.4a3 3 0 002-2z"/>
      <path d="M19 3.5l.5 1.4a1 1 0 00.6.6L21.5 6l-1.4.5a1 1 0 00-.6.6L19 8.5 18.5 7.1a1 1 0 00-.6-.6L16.5 6l1.4-.5a1 1 0 00.6-.6z"/>
    </svg>
  ),
  sparkleFill: ({ size = 22, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M12 3l1.6 4.6a3 3 0 002 2L20 11l-4.4 1.4a3 3 0 00-2 2L12 19l-1.6-4.6a3 3 0 00-2-2L4 11l4.4-1.4a3 3 0 002-2z"/>
      <path d="M19 3.5l.5 1.4a1 1 0 00.6.6L21.5 6l-1.4.5a1 1 0 00-.6.6L19 8.5 18.5 7.1a1 1 0 00-.6-.6L16.5 6l1.4-.5a1 1 0 00.6-.6z"/>
    </svg>
  ),
  search:      (p) => <Icon {...p} d={<><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></>} />,
  plus:        (p) => <Icon {...p} d={<><path d="M12 5v14"/><path d="M5 12h14"/></>} />,
  check:       (p) => <Icon {...p} d={<path d="M5 12.5l4.5 4.5L19 7"/>} />,
  x:           (p) => <Icon {...p} d={<><path d="M6 6l12 12"/><path d="M18 6L6 18"/></>} />,
  pencil:      (p) => <Icon {...p} d={<><path d="M4 20l4-1 10-10-3-3L5 16l-1 4z"/><path d="M14 7l3 3"/></>} />,
  bell:        (p) => <Icon {...p} d={<><path d="M6 16V11a6 6 0 0112 0v5l1.5 2H4.5L6 16z"/><path d="M10 20a2 2 0 004 0"/></>} />,
  tag:         (p) => <Icon {...p} d={<><path d="M3 12V4h8l10 10-8 8L3 12z"/><circle cx="8" cy="8" r="1.3" fill="currentColor"/></>} />,
  flow:        (p) => <Icon {...p} d={<><circle cx="6" cy="6" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="12" cy="18" r="2.5"/><path d="M7.7 7.7l3 8.3M16.3 7.7l-3 8.3"/></>} />,
  inbox:       (p) => <Icon {...p} d={<><path d="M3 13l3-8h12l3 8v6H3z"/><path d="M3 13h5l1 2h6l1-2h5"/></>} />,
  settings:    (p) => <Icon {...p} d={<><circle cx="12" cy="12" r="3"/><path d="M19 12l2-1.5-1-2.5-2.5.5-1.5-1.5.5-2.5L14 3l-2 2h-2L8 3 5.5 4.5 6 7 4.5 8.5 2 8l-1 2.5 2 1.5-2 1.5 1 2.5 2.5-.5L6 17l-.5 2.5L8 21l2-2h2l2 2 2.5-1.5L16 17l1.5-1.5 2.5.5 1-2.5z"/></>} />,
  instagram:   ({ size = 22, color = 'currentColor', strokeWidth = 1.8 }) => (
    // generic camera/square — placeholder for the "connect IG" CTA, not the
    // real Instagram glyph (we explicitly avoid copying that branding).
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color}
      strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.8" fill={color} stroke="none"/>
    </svg>
  ),
  shieldCheck: (p) => <Icon {...p} d={<><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z"/><path d="M9 12l2 2 4-4"/></>} />,
  bolt:        (p) => <Icon {...p} d={<path d="M13 3L5 14h6l-1 7 8-11h-6z"/>} />,
  globe:       (p) => <Icon {...p} d={<><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a14 14 0 010 18a14 14 0 010-18z"/></>} />,
  chat:        (p) => <Icon {...p} d={<path d="M4 5h16v11H8l-4 4z"/>} />,
  // Two-bubble comment glyph — distinct from "chat" so the inbox can
  // visually separate post/reel comments from DMs.
  comment:     (p) => <Icon {...p} d={<><path d="M3 5h13v9H8l-3 3v-3H3z"/><path d="M9 11h8l3 3v-7a2 2 0 00-2-2"/></>} />,
  heart:       (p) => <Icon {...p} d={<path d="M12 20S4 14 4 8.5A4.5 4.5 0 0112 6a4.5 4.5 0 018 2.5C20 14 12 20 12 20z"/>} />,
};

// ─────────────────────────────────────────────────────────────
// Avatar — letter monogram on a soft tinted disc. No fake faces.
// ─────────────────────────────────────────────────────────────
const AVATAR_TINTS = [
  ['#F5D6CF', '#9E3A2E'],  // peach
  ['#D8E4D2', '#3A6B3F'],  // sage
  ['#D7DCE8', '#3B4A6B'],  // slate
  ['#EDDCC5', '#7A4E1F'],  // sand
  ['#E2D6E6', '#5B3A6B'],  // mauve
  ['#CFD9D9', '#2F4F4F'],  // teal-grey
  ['#E8D6D1', '#7A3525'],  // terracotta
];
function avatarTint(seed) {
  let h = 0; for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) | 0;
  return AVATAR_TINTS[Math.abs(h) % AVATAR_TINTS.length];
}
function Avatar({ name, size = 36, ring }) {
  const [bg, fg] = avatarTint(name || '?');
  const initials = (name || '?').split(/\s+/).slice(0,2).map(s=>s[0]).join('').toUpperCase();
  return (
    <div style={{
      width: size, height: size, borderRadius: size/2,
      background: bg, color: fg,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: FONT, fontWeight: 600, fontSize: size * 0.4,
      letterSpacing: -0.2, flexShrink: 0,
      boxShadow: ring ? `0 0 0 2px ${ring}` : 'none',
    }}>{initials}</div>
  );
}

// ─────────────────────────────────────────────────────────────
// Bubble — chat message bubble. side: 'in' | 'out'. tail squares
// the bottom-outer corner for a familiar messaging silhouette.
// ─────────────────────────────────────────────────────────────
function Bubble({ side, theme, children, tail = true, maxWidth = '76%' }) {
  const t = useT(theme);
  const out = side === 'out';
  const bg = out ? t.accent : t.surface;
  const fg = out ? t.onAccent : t.body;
  const r = 20, tip = tail ? 6 : 20;
  const radius = out
    ? `${r}px ${r}px ${tip}px ${r}px`
    : `${r}px ${r}px ${r}px ${tip}px`;
  return (
    <div style={{
      maxWidth, background: bg, color: fg,
      padding: '9px 14px', borderRadius: radius,
      fontFamily: FONT, fontSize: 16, lineHeight: '21px',
      letterSpacing: -0.2, wordBreak: 'break-word',
      alignSelf: out ? 'flex-end' : 'flex-start',
    }}>{children}</div>
  );
}

// ─────────────────────────────────────────────────────────────
// Chip — small rounded pill used for AI suggestions, filters, etc.
// variant: 'suggest' (coral-tinted) | 'plain' (surface) | 'accent' (filled)
// ─────────────────────────────────────────────────────────────
function Chip({ theme, variant = 'plain', icon, children, style = {} }) {
  const t = useT(theme);
  const styles = {
    suggest: {
      background: t.accentFill,
      color: t.accentText,
      border: `1px solid ${theme === 'dark' ? 'rgba(255,136,133,0.18)' : 'rgba(229,91,80,0.16)'}`,
    },
    plain: { background: t.surface, color: t.body, border: 'none' },
    accent:{ background: t.accent, color: t.onAccent, border: 'none' },
  }[variant];
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      padding: '8px 12px', borderRadius: 999,
      fontFamily: FONT, fontSize: 14, fontWeight: 500,
      letterSpacing: -0.15, lineHeight: '18px',
      ...styles, ...style,
    }}>
      {icon}
      {children}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// StatusBar + HomeIndicator — minimal, theme-aware. The starter's
// IOSDevice provides these too, but we want custom-styled screens
// without its nav bar, so we re-render here scoped to the screen.
// ─────────────────────────────────────────────────────────────
function StatusBar({ theme, time = '9:41' }) {
  const c = theme === 'dark' ? '#fff' : '#000';
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '18px 32px 0', height: 54, boxSizing: 'border-box',
      position: 'relative', zIndex: 5,
    }}>
      <div style={{
        fontFamily: FONT, fontWeight: 600, fontSize: 17, color: c,
        letterSpacing: -0.3,
      }}>{time}</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <svg width="19" height="12" viewBox="0 0 19 12">
          <rect x="0" y="7.5" width="3.2" height="4.5" rx="0.7" fill={c}/>
          <rect x="4.8" y="5" width="3.2" height="7" rx="0.7" fill={c}/>
          <rect x="9.6" y="2.5" width="3.2" height="9.5" rx="0.7" fill={c}/>
          <rect x="14.4" y="0" width="3.2" height="12" rx="0.7" fill={c}/>
        </svg>
        <svg width="17" height="12" viewBox="0 0 17 12">
          <path d="M8.5 3.2c2.3 0 4.4.9 5.9 2.4l1.1-1.1A9 9 0 008.5 1.5 9 9 0 002.6 4.5l1.1 1.1A8 8 0 018.5 3.2z" fill={c}/>
          <path d="M8.5 6.8c1.4 0 2.6.5 3.5 1.4l1.1-1.1A6 6 0 008.5 5.1a6 6 0 00-4.6 2l1.1 1.1A5 5 0 018.5 6.8z" fill={c}/>
          <circle cx="8.5" cy="10.5" r="1.5" fill={c}/>
        </svg>
        <svg width="27" height="13" viewBox="0 0 27 13">
          <rect x="0.5" y="0.5" width="23" height="12" rx="3.5" stroke={c} strokeOpacity="0.35" fill="none"/>
          <rect x="2" y="2" width="18" height="9" rx="2" fill={c}/>
          <path d="M25 4.5v4c0.8-0.3 1.5-1.3 1.5-2s-0.7-1.7-1.5-2z" fill={c} fillOpacity="0.4"/>
        </svg>
      </div>
    </div>
  );
}

function HomeIndicator({ theme }) {
  return (
    <div style={{
      position: 'absolute', bottom: 0, left: 0, right: 0,
      height: 34, display: 'flex', justifyContent: 'center', alignItems: 'flex-end',
      paddingBottom: 8, pointerEvents: 'none', zIndex: 60,
    }}>
      <div style={{
        width: 139, height: 5, borderRadius: 100,
        background: theme === 'dark' ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.25)',
      }} />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Phone — minimal phone shell. We do NOT use the starter IOSDevice
// directly because most screens want full-bleed custom nav rather
// than its built-in nav bar. width 402 / height 874 matches it.
// ─────────────────────────────────────────────────────────────
function Phone({ theme, children, statusBar = true, dynamicIsland = true }) {
  const t = useT(theme);
  return (
    <div style={{
      width: 402, height: 874, borderRadius: 48, overflow: 'hidden',
      position: 'relative', background: t.bg,
      boxShadow: '0 40px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.12)',
      fontFamily: FONT, WebkitFontSmoothing: 'antialiased',
      color: t.body,
    }}>
      {dynamicIsland && (
        <div style={{
          position: 'absolute', top: 11, left: '50%', transform: 'translateX(-50%)',
          width: 126, height: 37, borderRadius: 24, background: '#000', zIndex: 50,
        }} />
      )}
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        {statusBar && <StatusBar theme={theme} />}
        <div style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column', position: 'relative' }}>
          {children}
        </div>
      </div>
      <HomeIndicator theme={theme} />
    </div>
  );
}

Object.assign(window, { TOKENS, FONT, useT, Icons, Avatar, Bubble, Chip, StatusBar, HomeIndicator, Phone });
