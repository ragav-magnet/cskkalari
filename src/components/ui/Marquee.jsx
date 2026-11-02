// Endless scrolling band with faded edges, after the Magic UI "Marquee".
// Pauses on hover. Two copies slide together so the loop has no visible seam.
import { cn } from '@/lib/utils'

export default function Marquee({ children, className, duration = 40 }) {
  return (
    <div aria-hidden="true" className={cn('group flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]', className)}>
      {[0, 1].map((copy) => (
        <div key={copy} className="flex min-w-full shrink-0 animate-marquee items-center justify-around group-hover:[animation-play-state:paused]" style={{ animationDuration: `${duration}s` }}>
          {children}
        </div>
      ))}
    </div>
  )
}
