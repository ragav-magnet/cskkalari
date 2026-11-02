// Motifs drawn from the kalari: the emblem (nilavilakku lamp and crossed swords),
// the poothara altar, and the training weapons. All but the emblem are
// stroke-only so they take any colour.
import { useId } from 'react'

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

function Sword({ steel, brass, flip }) {
  return (
    <g transform={flip ? 'matrix(-1 0 0 1 360 0)' : undefined}>
      {/* curved talwar blade with a fuller line */}
      <path d="M90 280C150 246 262 170 326 26C306 150 196 256 104 298Z" fill={`url(#${steel})`} stroke="#59636B" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M112 278C176 240 262 168 312 62" fill="none" stroke="#6B757D" strokeWidth="1.6" strokeLinecap="round" opacity=".7" />
      {/* guard, wrapped grip and disc pommel */}
      <path d="M78 264C86 268 106 296 112 312" fill="none" stroke={`url(#${brass})`} strokeWidth="10" strokeLinecap="round" />
      <path d="M95 288 58 318" fill="none" stroke={`url(#${brass})`} strokeWidth="13" strokeLinecap="round" />
      <path d="M88 294 65 312" fill="none" stroke="#561A0D" strokeWidth="2" strokeDasharray="3 5" />
      <circle cx="50" cy="325" r="12" fill={`url(#${brass})`} stroke="#6E4C16" strokeWidth="1.5" />
      <circle cx="50" cy="325" r="4" fill="#E3C27A" />
    </g>
  )
}

function Lamp({ brass, flame, lit, flameClassName }) {
  const fill = `url(#${brass})`
  return (
    <g transform="translate(80 0)">
      {/* finial */}
      <path d="M100 8c-6 10-6 18 0 24 6-6 6-14 0-24z" fill={fill} />
      <rect x="96" y="32" width="8" height="34" fill={fill} />
      {/* bowl with wicks */}
      <path d="M38 78h124c-6 16-30 26-62 26S44 94 38 78z" fill={fill} />
      <ellipse cx="100" cy="78" rx="62" ry="7" fill="#E3C27A" />
      {/* stem with nodes */}
      <rect x="94" y="104" width="12" height="190" fill={fill} />
      {[130, 175, 220, 262].map((y) => (
        <ellipse key={y} cx="100" cy={y} rx="16" ry="6" fill={fill} />
      ))}
      {/* stepped base */}
      <path d="M70 294h60l10 22H60z" fill={fill} />
      <path d="M40 316h120c4 0 8 6 8 12v6H32v-6c0-6 4-12 8-12z" fill={fill} />
      <rect x="26" y="334" width="148" height="10" rx="3" fill={fill} />
      {lit &&
        [-46, -23, 0, 23, 46].map((dx, i) => (
          <g key={dx} transform={`translate(${100 + dx} 76)`}>
            <path
              d="M0 0c-7-6-8-16-1-30 1-2 2-2 2 0 7 14 6 24-1 30z"
              fill={`url(#${flame})`}
              className={`origin-bottom animate-flicker ${flameClassName}`}
              style={{ animationDelay: `${i * 0.37}s`, transformBox: 'fill-box' }}
            />
          </g>
        ))}
    </g>
  )
}

/**
 * The CSK emblem: a nilavilakku with two crossed swords behind it. Use `badge`
 * on light or busy backgrounds and at small sizes, where it sits in a laterite
 * seal so the steel blades stay visible.
 */
export function Emblem({ className, lit = true, badge = false, flameClassName = '' }) {
  // Unique per instance: a shared gradient id breaks if its first SVG is hidden
  const uid = useId().replace(/\W/g, '')
  const brass = `brass-${uid}`
  const steel = `steel-${uid}`
  const flame = `flame-${uid}`
  const seal = `seal-${uid}`
  const art = (
    <>
      <Sword steel={steel} brass={brass} />
      <Sword steel={steel} brass={brass} flip />
      <Lamp brass={brass} flame={flame} lit={lit} flameClassName={flameClassName} />
    </>
  )
  return (
    <svg viewBox="0 0 360 360" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={brass} x1="0" x2="1">
          <stop offset="0" stopColor="#8C6420" />
          <stop offset=".45" stopColor="#E3C27A" />
          <stop offset=".6" stopColor="#C99A43" />
          <stop offset="1" stopColor="#6E4C16" />
        </linearGradient>
        <linearGradient id={steel} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#8E98A1" />
          <stop offset=".3" stopColor="#F7F9FA" />
          <stop offset=".55" stopColor="#C3CBD2" />
          <stop offset=".8" stopColor="#F7F9FA" />
          <stop offset="1" stopColor="#AEB7BF" />
        </linearGradient>
        <radialGradient id={flame} cx=".5" cy=".75" r=".7">
          <stop offset="0" stopColor="#FFF6D6" />
          <stop offset=".35" stopColor="#FFD36B" />
          <stop offset=".8" stopColor="#F2902D" />
          <stop offset="1" stopColor="#C2410C" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={seal} cx=".5" cy=".42" r=".65">
          <stop offset="0" stopColor="#A3442A" />
          <stop offset=".65" stopColor="#7E2A17" />
          <stop offset="1" stopColor="#561A0D" />
        </radialGradient>
      </defs>
      {badge ? (
        <>
          <circle cx="180" cy="180" r="176" fill={`url(#${seal})`} />
          <circle cx="180" cy="180" r="170" fill="none" stroke={`url(#${brass})`} strokeWidth="10" />
          <circle cx="180" cy="180" r="158" fill="none" stroke="#D9B66A" strokeWidth="1.5" opacity=".7" />
          <g transform="translate(36 40) scale(.8)">{art}</g>
        </>
      ) : (
        art
      )}
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
  events: Emblem,
  kasavanahalli: Staff,
  'sg-palaya': Otta,
  udayanagar: ShieldSword,
  hero: Poothara,
  urumi: Urumi,
}
