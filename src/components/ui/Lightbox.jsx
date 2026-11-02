import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useCallback, useEffect, useRef } from 'react'
import Photo from './Photo'

export default function Lightbox({ items, index, onClose, onIndex }) {
  const open = index !== null && index >= 0
  const closeRef = useRef(null)
  const go = useCallback((d) => onIndex((index + d + items.length) % items.length), [index, items.length, onIndex])

  useEffect(() => {
    if (!open) return
    const prev = document.activeElement
    closeRef.current?.focus()
    document.body.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') go(1)
      if (e.key === 'ArrowLeft') go(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = ''; prev?.focus?.() }
  }, [open, go, onClose])

  const item = open ? items[index] : null
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={item.caption}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-soot/95 p-4 backdrop-blur-sm sm:p-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.figure
            key={item.key}
            layoutId={`g-${item.key}`}
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Photo image={item.image} folder={item.folder} caption={item.image ? item.caption : undefined} tone={item.tone} className="aspect-[3/2] max-h-[78vh] w-full rounded-sm" imgClassName="object-contain bg-soot" loading="eager" />
            <figcaption className="mt-4 flex items-baseline justify-between gap-4 text-kasavu">
              <span className="text-step-0">{item.caption}</span>
              <span className="text-step--1 text-kasavu/60">{index + 1} of {items.length}</span>
            </figcaption>
          </motion.figure>
          <button ref={closeRef} onClick={onClose} aria-label="Close" className="absolute right-4 top-4 rounded-full p-2.5 text-kasavu hover:bg-kasavu/10"><X /></button>
          <button onClick={(e) => { e.stopPropagation(); go(-1) }} aria-label="Previous photo" className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full p-3 text-kasavu hover:bg-kasavu/10 sm:left-6"><ChevronLeft /></button>
          <button onClick={(e) => { e.stopPropagation(); go(1) }} aria-label="Next photo" className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-3 text-kasavu hover:bg-kasavu/10 sm:right-6"><ChevronRight /></button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
