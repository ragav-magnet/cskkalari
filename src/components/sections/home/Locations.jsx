import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion'
import { MapPin } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Photo from '@/components/ui/Photo'
import { locations, mapLink } from '@/data/site'

// Hover-reveal list: a photo of the centre follows the pointer on desktop,
// after the image-reveal list components on 21st.dev.
export default function Locations() {
  const [hover, setHover] = useState(null)
  const x = useSpring(useMotionValue(0), { stiffness: 300, damping: 30 })
  const y = useSpring(useMotionValue(0), { stiffness: 300, damping: 30 })
  const move = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    x.set(e.clientX - r.left)
    y.set(e.clientY - r.top)
  }
  const tones = ['laterite', 'kadu', 'soot']
  return (
    <section className="bg-kasavu-deep py-24 sm:py-32">
      <div className="shell">
        <h2 className="max-w-xl text-step-3 text-laterite sm:text-step-4">Three kalaris across Bengaluru</h2>
        <p className="mt-4 max-w-measure text-soot/70">Every centre follows the same syllabus, so you can train close to home or work, and switch when you need to.</p>
        <div className="relative mt-14" onPointerMove={move} onPointerLeave={() => setHover(null)}>
          <AnimatePresence>
            {hover !== null && (
              <motion.div
                key="reveal"
                style={{ x, y }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="pointer-events-none absolute left-0 top-0 z-20 hidden lg:block"
              >
                <Photo folder={locations[hover].id} caption={`${locations[hover].name} centre`} tone={tones[hover]} className="-ml-32 -mt-40 h-64 w-64 rounded-md shadow-2xl" />
              </motion.div>
            )}
          </AnimatePresence>
          <ul className="border-t border-soot/20">
            {locations.map((l, i) => (
              <li key={l.id} onPointerEnter={() => setHover(i)} className="group grid gap-4 border-b border-soot/20 py-8 md:grid-cols-12 md:items-center">
                <div className="md:col-span-5">
                  <h3 className="text-step-3 transition-colors group-hover:text-laterite sm:text-step-4">{l.name}</h3>
                  <p className="text-soot/60">{l.area}</p>
                </div>
                <div className="text-step--1 text-soot/70 md:col-span-4">
                  {l.hours.map((h) => (
                    <p key={h.days}><span className="inline-block w-24 font-medium text-soot">{h.days}</span>{h.time.join(', ')}</p>
                  ))}
                  <p className="mt-1">Near {l.near}</p>
                </div>
                <div className="flex gap-3 md:col-span-3 md:justify-end">
                  <a href={mapLink(l.mapQuery)} target="_blank" rel="noreferrer" className="btn-ghost-dark px-4 py-2"><MapPin className="h-4 w-4" />Directions</a>
                  <Link to={`/contact#${l.id}`} className="btn-laterite px-4 py-2">Enquire</Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
