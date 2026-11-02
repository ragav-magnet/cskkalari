// Tilts toward the pointer, after the Aceternity "3D Card". Mouse only.
import { motion, useReducedMotion, useSpring } from 'framer-motion'

const spring = { stiffness: 220, damping: 20 }

export default function TiltCard({ className, children, max = 5 }) {
  const reduce = useReducedMotion()
  const rotateX = useSpring(0, spring)
  const rotateY = useSpring(0, spring)
  const move = (e) => {
    if (reduce || e.pointerType !== 'mouse') return
    const r = e.currentTarget.getBoundingClientRect()
    rotateY.set(((e.clientX - r.left) / r.width - 0.5) * max * 2)
    rotateX.set((0.5 - (e.clientY - r.top) / r.height) * max * 2)
  }
  const reset = () => { rotateX.set(0); rotateY.set(0) }
  return (
    <motion.div className={className} style={{ rotateX, rotateY, transformPerspective: 900 }} onPointerMove={move} onPointerLeave={reset}>
      {children}
    </motion.div>
  )
}
