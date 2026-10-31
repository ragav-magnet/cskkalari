// Magnetic hover, after the 21st.dev magnetic button. Pulls slightly toward the pointer.
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'

const MotionLink = motion.create(Link)

export default function MagneticButton({ to, href, className, children, strength = 0.3 }) {
  const reduce = useReducedMotion()
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 15 })
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 15 })
  const move = (e) => {
    if (reduce) return
    const r = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - r.left - r.width / 2) * strength)
    y.set((e.clientY - r.top - r.height / 2) * strength)
  }
  const reset = () => { x.set(0); y.set(0) }
  const props = { className, style: { x, y }, onPointerMove: move, onPointerLeave: reset }
  return to ? <MotionLink to={to} {...props}>{children}</MotionLink> : <motion.a href={href} {...props}>{children}</motion.a>
}
