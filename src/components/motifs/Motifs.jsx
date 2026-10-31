// Line-art motifs drawn from the kalari: the nilavilakku lamp, the poothara
// altar, and the training weapons. Stroke-only so they take any colour.

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function Nilavilakku({ className, lit = true, flameClassName = '' }) {
  const wicks = [-46, -23, 0, 23, 46]
  return (
    <svg viewBox="0 0 200 360" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="brass" x1="0" x2="1">
          <stop offset="0" stopColor="#8C6420" />
          <stop offset=".45" stopColor="#E3C27A" />
          <stop offset=".6" stopColor="#C99A43" />
          <stop offset="1" stopColor="#6E4C16" />
        </linearGradient>
        <radialGradient id="flame" cx=".5" cy=".75" r=".7">
          <stop offset="0" stopColor="#FFF6D6" />
          <stop offset=".35" stopColor="#FFD36B" />
          <stop offset=".8" stopColor="#F2902D" />
          <stop offset="1" stopColor="#C2410C" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* finial */}
      <path d="M100 8c-6 10-6 18 0 24 6-6 6-14 0-24z" fill="url(#brass)" />
      <rect x="96" y="32" width="8" height="34" fill="url(#brass)" />
      {/* bowl with wicks */}
      <path d="M38 78h124c-6 16-30 26-62 26S44 94 38 78z" fill="url(#brass)" />
      <ellipse cx="100" cy="78" rx="62" ry="7" fill="#E3C27A" />
      {/* stem with nodes */}
      <rect x="94" y="104" width="12" height="190" fill="url(#brass)" />
      {[130, 175, 220, 262].map((y) => (
        <ellipse key={y} cx="100" cy={y} rx="16" ry="6" fill="url(#brass)" />
      ))}
      {/* stepped base */}
      <path d="M70 294h60l10 22H60z" fill="url(#brass)" />
      <path d="M40 316h120c4 0 8 6 8 12v6H32v-6c0-6 4-12 8-12z" fill="url(#brass)" />
      <rect x="26" y="334" width="148" height="10" rx="3" fill="url(#brass)" />
      {lit &&
        wicks.map((dx, i) => (
          <g key={dx} transform={`translate(${100 + dx} 76)`}>
            <path
              d="M0 0c-7-6-8-16-1-30 1-2 2-2 2 0 7 14 6 24-1 30z"
              fill="url(#flame)"
              className={`origin-bottom animate-flicker ${flameClassName}`}
              style={{ animationDelay: `${i * 0.37}s`, transformBox: 'fill-box' }}
            />
          </g>
        ))}
    </svg>
  )
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
  events: Nilavilakku,
  kasavanahalli: Staff,
  'sg-palaya': Otta,
  udayanagar: ShieldSword,
  hero: Poothara,
  urumi: Urumi,
}
