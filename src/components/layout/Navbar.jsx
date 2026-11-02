import { AnimatePresence, motion } from 'framer-motion'
import { Menu, Phone, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { nav, site } from '@/data/site'
import { cn } from '@/lib/utils'
import Logo from './Logo'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const solid = scrolled && !open
  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,padding] duration-300',
        solid ? 'bg-kasavu/95 py-3 shadow-[0_1px_0_rgba(26,19,14,.08)] backdrop-blur' : 'py-5',
      )}
    >
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 focus:rounded focus:bg-flame focus:px-3 focus:py-2 focus:text-soot">Skip to content</a>
      <div className="shell flex items-center justify-between">
        <Logo light={!solid} />
        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === '/'}
              className={({ isActive }) => cn('tap link-underline pb-0.5 text-step-0 font-medium transition-colors', solid ? 'text-soot hover:text-laterite' : 'text-kasavu/85 hover:text-kasavu', isActive && (solid ? 'text-laterite' : 'text-flame'))}
            >
              {n.label}
            </NavLink>
          ))}
          <NavLink to="/contact" className={solid ? 'btn-laterite py-2.5' : 'btn-flame py-2.5'}>Book a trial class</NavLink>
        </nav>
        <button
          className={cn('rounded-full p-2.5 lg:hidden', solid ? 'text-soot' : 'text-kasavu')}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ clipPath: 'circle(0% at 100% 0%)' }}
            animate={{ clipPath: 'circle(150% at 100% 0%)' }}
            exit={{ clipPath: 'circle(0% at 100% 0%)' }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 -z-10 flex flex-col overflow-y-auto bg-laterite-dark px-6 pb-10 pt-28 text-kasavu lg:hidden"
          >
            <nav aria-label="Mobile" className="flex flex-col gap-2">
              {nav.map((n, i) => (
                <motion.div key={n.to} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 + i * 0.05 }}>
                  <NavLink to={n.to} end={n.to === '/'} className={({ isActive }) => cn('block py-2 font-display text-step-3', isActive ? 'text-flame' : 'text-kasavu')}>
                    {n.label}
                  </NavLink>
                </motion.div>
              ))}
            </nav>
            <div className="mt-auto space-y-4 pt-6">
              <div className="kasavu-band-thin" />
              <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="tap flex gap-3 text-step-1"><Phone className="h-5 w-5 text-flame" />{site.phone}</a>
              <NavLink to="/contact" className="btn-flame w-full">Book a trial class</NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
