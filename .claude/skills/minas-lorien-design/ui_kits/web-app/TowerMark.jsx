// Tower mark — extracted from production source, faithful copy.
const TowerMark = ({ size = 36 }) => {
  const w = size;
  const h = Math.round(size * (160/100));
  return (
    <svg width={w} height={h} viewBox="0 0 100 160" style={{overflow:'visible',opacity:0.85,flexShrink:0}}>
      <circle cx="8" cy="14" r="1.2" fill="#a58a5c" opacity="0.8"/>
      <circle cx="16" cy="30" r="0.7" fill="#d8d2c4" opacity="0.5"/>
      <circle cx="4" cy="52" r="0.9" fill="#c8c0b0" opacity="0.45"/>
      <circle cx="92" cy="10" r="1.0" fill="#d8d2c4" opacity="0.6"/>
      <circle cx="88" cy="28" r="0.7" fill="#a58a5c" opacity="0.7"/>
      <circle cx="76" cy="18" r="0.9" fill="#a58a5c" opacity="0.5"/>
      <circle cx="50" cy="4" r="0.7" fill="#d8d2c4" opacity="0.4"/>
      <circle cx="12" cy="70" r="0.6" fill="#a58a5c" opacity="0.4"/>
      <circle cx="84" cy="68" r="0.6" fill="#d8d2c4" opacity="0.35"/>
      <path d="M28,143 C22,135 10,128 8,118 C6,108 14,102 18,108 C22,114 16,120 12,118" fill="none" stroke="#4a6a58" strokeWidth="0.9" strokeLinecap="round" opacity="0.7"/>
      <path d="M72,143 C78,135 90,128 92,118 C94,108 86,102 82,108 C78,114 84,120 88,118" fill="none" stroke="#4a6a58" strokeWidth="0.9" strokeLinecap="round" opacity="0.7"/>
      <rect x="14" y="145" width="72" height="5" rx="2.5" fill="none" stroke="#5a6a62" strokeWidth="0.6" opacity="0.5"/>
      <rect x="22" y="139" width="56" height="6" rx="2" fill="none" stroke="#5a6a62" strokeWidth="0.5" opacity="0.4"/>
      <rect x="12" y="104" width="16" height="35" rx="2" fill="none" stroke="#5a6a62" strokeWidth="0.65"/>
      <rect x="16" y="112" width="8" height="13" rx="4" fill="#a58a5c" opacity="0.4"/>
      <rect x="10" y="97" width="20" height="7" rx="1.5" fill="none" stroke="#5a6a62" strokeWidth="0.55" opacity="0.75"/>
      <rect x="16" y="72" width="8" height="20" rx="1.5" fill="none" stroke="#8a9f98" strokeWidth="0.55"/>
      <rect x="18" y="77" width="4" height="8" rx="2" fill="#a58a5c" opacity="0.35"/>
      <polygon points="20,48 15,72 25,72" fill="none" stroke="#c8c0b0" strokeWidth="0.7"/>
      <circle cx="20" cy="48" r="2" fill="#a58a5c" opacity="0.75"/>
      <rect x="72" y="104" width="16" height="35" rx="2" fill="none" stroke="#5a6a62" strokeWidth="0.65"/>
      <rect x="76" y="112" width="8" height="13" rx="4" fill="#a58a5c" opacity="0.4"/>
      <rect x="70" y="97" width="20" height="7" rx="1.5" fill="none" stroke="#5a6a62" strokeWidth="0.55" opacity="0.75"/>
      <rect x="76" y="72" width="8" height="20" rx="1.5" fill="none" stroke="#8a9f98" strokeWidth="0.55"/>
      <rect x="78" y="77" width="4" height="8" rx="2" fill="#a58a5c" opacity="0.35"/>
      <polygon points="80,48 75,72 85,72" fill="none" stroke="#c8c0b0" strokeWidth="0.7"/>
      <circle cx="80" cy="48" r="2" fill="#a58a5c" opacity="0.75"/>
      <rect x="37" y="88" width="26" height="51" rx="2.5" fill="none" stroke="#d8d2c4" strokeWidth="0.9"/>
      <rect x="43" y="96" width="14" height="20" rx="7" fill="#a58a5c" opacity="0.6"/>
      <rect x="44" y="122" width="12" height="12" rx="6" fill="#a58a5c" opacity="0.3"/>
      <rect x="33" y="80" width="34" height="8" rx="2" fill="none" stroke="#d8d2c4" strokeWidth="0.8" opacity="0.85"/>
      <rect x="34" y="72" width="5" height="9" rx="1.5" fill="none" stroke="#d8d2c4" strokeWidth="0.65" opacity="0.7"/>
      <rect x="42" y="72" width="5" height="9" rx="1.5" fill="none" stroke="#d8d2c4" strokeWidth="0.65" opacity="0.7"/>
      <rect x="50" y="72" width="5" height="9" rx="1.5" fill="none" stroke="#d8d2c4" strokeWidth="0.65" opacity="0.7"/>
      <rect x="58" y="72" width="5" height="9" rx="1.5" fill="none" stroke="#d8d2c4" strokeWidth="0.65" opacity="0.7"/>
      <rect x="66" y="72" width="5" height="9" rx="1.5" fill="none" stroke="#d8d2c4" strokeWidth="0.65" opacity="0.7"/>
      <rect x="42" y="48" width="16" height="26" rx="2" fill="none" stroke="#d8d2c4" strokeWidth="0.75"/>
      <rect x="46" y="55" width="8" height="12" rx="4" fill="#a58a5c" opacity="0.75"/>
      <polygon points="50,10 44,48 56,48" fill="none" stroke="#d8d2c4" strokeWidth="0.85"/>
      <circle cx="50" cy="10" r="3.2" fill="#a58a5c"/>
      <circle cx="50" cy="10" r="1.5" fill="#fff" opacity="0.95"/>
    </svg>
  );
};

// Double-chevron meta indicator
const ChevronMark = ({ color = '#a58a5c' }) => (
  <svg width="9" height="12" viewBox="0 0 9 12" style={{display:'inline-block',verticalAlign:'middle',marginRight:7,flexShrink:0}}>
    <polyline points="1,1 4.5,6 1,11" fill="none" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    <polyline points="4.5,1 8,6 4.5,11" fill="none" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.45"/>
  </svg>
);

window.TowerMark = TowerMark;
window.ChevronMark = ChevronMark;
