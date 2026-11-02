// Counts up when scrolled into view, after the Magic UI "Number Ticker".
import { animate, useInView, useReducedMotion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export default function NumberTicker({ value, suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })
  const reduce = useReducedMotion()
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!inView || reduce) return
    const controls = animate(0, value, { duration: 1.2, ease: [0.22, 1, 0.36, 1], onUpdate: (v) => setN(Math.round(v)) })
    return () => controls.stop()
  }, [inView, reduce, value])
  return (
    <span ref={ref}>
      <span className="sr-only">{value}{suffix}</span>
      <span aria-hidden="true">{reduce ? value : n}{suffix}</span>
    </span>
  )
}
