// Sparks drifting up from the lamp, after the Aceternity "Sparkles" effect.
// Fixed positions rather than random ones, so the layout is the same every visit.
const embers = Array.from({ length: 18 }, (_, i) => ({
  left: `${8 + ((i * 37) % 84)}%`,
  size: 2 + (i % 3),
  drift: `${((i * 13) % 60) - 30}px`,
  duration: `${7 + (i % 5)}s`,
  delay: `${(i * 0.7) % 8}s`,
}))

export default function Embers({ className = '' }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {embers.map((e) => (
        <span
          key={e.left}
          className="absolute bottom-0 animate-ember rounded-full bg-flame opacity-0 shadow-[0_0_8px_2px_rgba(242,179,61,.6)]"
          style={{ left: e.left, width: e.size, height: e.size, '--drift': e.drift, animationDuration: e.duration, animationDelay: e.delay }}
        />
      ))}
    </div>
  )
}
