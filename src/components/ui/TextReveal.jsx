// Word-by-word blur-in for headlines, after the Aceternity "Text Generate" effect.
import { motion, useReducedMotion } from 'framer-motion'
import { Fragment } from 'react'

export default function TextReveal({ text, delay = 0, stagger = 0.07 }) {
  const reduce = useReducedMotion()
  if (reduce) return text
  return text.split(' ').map((word, i) => (
    <Fragment key={`${word}-${i}`}>
      <motion.span
        className="inline-block"
        initial={{ opacity: 0, y: '0.35em', filter: 'blur(8px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ delay: delay + i * stagger, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        {word}
      </motion.span>{' '}
    </Fragment>
  ))
}
