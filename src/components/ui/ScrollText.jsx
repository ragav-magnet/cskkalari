// Words light up one by one as the text scrolls through, after the Magic UI "Text Reveal".
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { Fragment, useRef } from 'react'

function Word({ progress, range, children }) {
  const opacity = useTransform(progress, range, [0.2, 1])
  return <motion.span style={{ opacity }}>{children}</motion.span>
}

export default function ScrollText({ text }) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 85%', 'start 40%'] })
  if (reduce) return text
  const words = text.split(' ')
  return (
    <span ref={ref}>
      {words.map((word, i) => (
        <Fragment key={`${word}-${i}`}>
          <Word progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>{word}</Word>{' '}
        </Fragment>
      ))}
    </span>
  )
}
