// Tab bar with a sliding indicator (shared layoutId), after 21st.dev animated tabs.
import { motion } from 'framer-motion'
import { useId } from 'react'
import { cn } from '@/lib/utils'

export default function AnimatedTabs({ tabs, value, onChange, className, tone = 'light', label }) {
  const id = useId()
  const dark = tone === 'dark'
  const onKey = (e, i) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return
    const next = (i + (e.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length
    onChange(tabs[next].id)
    e.currentTarget.parentElement.children[next]?.focus()
  }
  return (
    <div role="tablist" aria-label={label} className={cn('flex flex-wrap gap-1', className)}>
      {tabs.map((t, i) => {
        const active = t.id === value
        return (
          <button
            key={t.id}
            role="tab"
            aria-selected={active}
            tabIndex={active ? 0 : -1}
            onClick={() => onChange(t.id)}
            onKeyDown={(e) => onKey(e, i)}
            className={cn(
              'relative min-h-11 rounded-full px-4 py-2 text-step--1 font-medium transition-colors',
              dark ? (active ? 'text-soot' : 'text-kasavu/70 hover:text-kasavu') : active ? 'text-kasavu' : 'text-soot/70 hover:text-soot',
            )}
          >
            {active && (
              <motion.span
                layoutId={`tab-${id}`}
                className={cn('absolute inset-0 -z-0 rounded-full', dark ? 'bg-flame' : 'bg-laterite')}
                transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
              />
            )}
            <span className="relative z-10">{t.label}</span>
          </button>
        )
      })}
    </div>
  )
}
