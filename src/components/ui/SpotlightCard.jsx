// Pointer-following spotlight, a pattern common across 21st.dev card components.
import { useRef } from 'react'
import { cn } from '@/lib/utils'

export default function SpotlightCard({ as: Tag = 'div', className, children, color = 'rgba(242,179,61,0.16)', ...props }) {
  const ref = useRef(null)
  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect()
    ref.current.style.setProperty('--x', `${e.clientX - r.left}px`)
    ref.current.style.setProperty('--y', `${e.clientY - r.top}px`)
  }
  return (
    <Tag
      ref={ref}
      onPointerMove={onMove}
      className={cn('group relative isolate overflow-hidden', className)}
      {...props}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: `radial-gradient(420px circle at var(--x) var(--y), ${color}, transparent 60%)` }}
      />
      {children}
    </Tag>
  )
}
