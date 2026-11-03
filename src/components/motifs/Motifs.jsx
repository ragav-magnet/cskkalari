// Line-art motifs drawn from the kalari: the poothara altar and the training
// weapons. Stroke-only so they take any colour.

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function Poothara({ className }) {
  // The seven-tiered altar in the south-west corner of every kalari
  return (
    <svg viewBox="0 0 120 100" className={className} aria-hidden="true" {...base}>
      {Array.from({ length: 7 }).map((_, i) => {
        const w = 104 - i * 13
        return <rect key={i} x={60 - w / 2} y={88 - i * 11} width={w} height={11} />
      })}
      <path d="M60 10v-6" />
    </svg>
  )
}

export function Staff({ className }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true" {...base}>
      <path d="M14 86 86 14M14 14l72 72" strokeWidth="3" />
      <circle cx="50" cy="50" r="6" />
    </svg>
  )
}

export function Otta({ className }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true" {...base}>
      <path d="M24 88c0-22 8-34 22-44 14-10 20-20 18-34" strokeWidth="5" />
      <circle cx="64" cy="9" r="4" fill="currentColor" />
    </svg>
  )
}

export function ShieldSword({ className }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true" {...base}>
      <circle cx="40" cy="58" r="26" />
      <circle cx="40" cy="58" r="16" />
      <circle cx="40" cy="58" r="3" fill="currentColor" />
      <path d="M58 76 90 10M54 70l10 10" strokeWidth="2.5" />
    </svg>
  )
}

export function Urumi({ className }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true" {...base}>
      <path d="M14 86l10-10" strokeWidth="4" />
      <path d="M24 76c20-10 40-6 46 8 6 14-14 18-18 6s14-30 34-28" />
      <path d="M26 74c16-18 36-26 50-16" opacity=".6" />
    </svg>
  )
}

export function Chuvadu({ className }) {
  // Footwork diagram — the kalari floor marks
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true" {...base}>
      <rect x="10" y="10" width="80" height="80" strokeDasharray="3 4" />
      <path d="M10 10l80 80M90 10 10 90" strokeDasharray="2 5" opacity=".6" />
      {[[30, 70], [50, 50], [70, 30]].map(([x, y]) => (
        <ellipse key={x} cx={x} cy={y} rx="5" ry="9" transform={`rotate(45 ${x} ${y})`} />
      ))}
    </svg>
  )
}

export const motifFor = {
  training: Chuvadu,
  events: Poothara,
  kasavanahalli: Staff,
  'sg-palaya': Otta,
  udayanagar: ShieldSword,
  hero: Poothara,
  urumi: Urumi,
}
