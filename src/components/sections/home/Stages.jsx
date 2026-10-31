import { AnimatePresence, motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { stages } from '@/data/content'

function Panel({ stage, i, onActive }) {
  const ref = useRef(null)
  const inView = useInView(ref, { margin: '-45% 0px -45% 0px' })
  useEffect(() => { if (inView) onActive(i) }, [inView, i, onActive])
  return (
    <article ref={ref} className="flex min-h-[auto] flex-col justify-center border-t border-kasavu/15 py-14 first:border-t-0 lg:min-h-[70vh]">
      <p className="text-step--1 text-zari-light">Stage {i + 1} of {stages.length}</p>
      <p className="mt-3 font-mal text-step-3 text-flame lg:hidden">{stage.mal}</p>
      <h3 className="mt-2 text-step-3 sm:text-step-4">{stage.name}</h3>
      <p className="mt-1 text-step-1 text-kasavu/70">{stage.gloss}</p>
      <p className="mt-6 max-w-measure text-kasavu/80">{stage.text}</p>
      <ul className="mt-8 grid max-w-lg grid-cols-1 gap-x-6 gap-y-2 text-step--1 text-kasavu/75 sm:grid-cols-2">
        {stage.learns.map((l) => (
          <li key={l} className="flex items-center gap-3"><span className="h-px w-4 bg-zari" />{l}</li>
        ))}
      </ul>
    </article>
  )
}

export default function Stages() {
  const [active, setActive] = useState(0)
  const s = stages[active]
  return (
    <section className="relative bg-kadu text-kasavu grain">
      <div className="shell grid gap-10 pt-24 lg:grid-cols-2 lg:gap-20 lg:pt-0">
        <div className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-col lg:justify-center">
          <h2 className="text-step-3 sm:text-step-4">Four stages, one lifetime of practice</h2>
          <p className="mt-6 max-w-md text-kasavu/70">Traditional Kalaripayattu is learned in order. Each stage is earned, and the gurukkal decides when a student moves on.</p>
          <div className="relative mt-12 hidden h-44 lg:block" aria-hidden="true">
            <AnimatePresence mode="wait">
              <motion.span
                key={s.id}
                initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -30, filter: 'blur(8px)' }}
                transition={{ duration: 0.5 }}
                className="absolute font-mal text-[5.5rem] font-bold leading-none text-flame xl:text-[6.5rem]"
              >
                {s.mal}
              </motion.span>
            </AnimatePresence>
          </div>
          <ol className="mt-6 hidden gap-2 lg:flex" aria-hidden="true">
            {stages.map((st, i) => (
              <li key={st.id} className="h-1 w-16 overflow-hidden rounded-full bg-kasavu/15">
                <motion.span className="block h-full bg-flame" animate={{ width: i <= active ? '100%' : '0%' }} transition={{ duration: 0.5 }} />
              </li>
            ))}
          </ol>
        </div>
        <div className="pb-16 lg:py-[10vh]">
          {stages.map((st, i) => <Panel key={st.id} stage={st} i={i} onActive={setActive} />)}
        </div>
      </div>
    </section>
  )
}
