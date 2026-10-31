// Shared header for inner pages: a dark lamplit band with a large Malayalam word.
import { motion, useReducedMotion } from 'framer-motion'

export default function PageHeader({ mal, title, intro, children }) {
  const reduce = useReducedMotion()
  return (
    <section className="relative overflow-hidden bg-soot pb-16 pt-36 text-kasavu grain sm:pb-24 sm:pt-44">
      <div aria-hidden="true" className="absolute -right-10 top-1/2 h-[40rem] w-[40rem] -translate-y-1/2 rounded-full bg-laterite/40 blur-[120px]" />
      <motion.span
        aria-hidden="true"
        initial={reduce ? false : { opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute -bottom-8 right-0 select-none font-mal text-[7rem] font-bold leading-none text-zari/10 sm:text-[12rem] lg:text-[16rem]"
      >
        {mal}
      </motion.span>
      <div className="shell relative">
        <h1 className="max-w-3xl text-step-4 sm:text-step-5">{title}</h1>
        {intro && <p className="mt-6 max-w-measure text-step-1 text-kasavu/75">{intro}</p>}
        {children}
      </div>
    </section>
  )
}
