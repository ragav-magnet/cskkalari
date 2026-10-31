// Adapted from the "Lamp" effect popularised on 21st.dev (Aceternity UI):
// a cone of light opens outward from its source on load. Here the source is
// the nilavilakku flame and the light is warm lamplight.
import { motion, useReducedMotion } from 'framer-motion'

export default function LampGlow({ className = '' }) {
  const reduce = useReducedMotion()
  const t = reduce ? { duration: 0 } : { delay: 0.35, duration: 1.6, ease: [0.22, 1, 0.36, 1] }
  return (
    <div className={`pointer-events-none absolute left-1/2 top-[13%] -translate-x-1/2 ${className}`} aria-hidden="true">
      <div className="flex justify-center">
        <motion.div
          initial={{ opacity: 0, scaleX: 0.25 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={t}
          className="h-[46rem] w-[70rem] max-w-[200vw] origin-top"
          style={{
            backgroundImage:
              'conic-gradient(from 128deg at 50% 0%, transparent 0deg, rgba(242,179,61,.12) 22deg, rgba(242,179,61,.38) 52deg, rgba(242,179,61,.12) 82deg, transparent 104deg)',
            maskImage: 'linear-gradient(to bottom, #000 0%, rgba(0,0,0,.6) 45%, transparent 85%)',
            WebkitMaskImage: 'linear-gradient(to bottom, #000 0%, rgba(0,0,0,.6) 45%, transparent 85%)',
          }}
        />
      </div>
      <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={t}
          className="h-64 w-[34rem] max-w-[90vw] rounded-full bg-flame/25 blur-[90px]"
        />
      </div>
    </div>
  )
}
