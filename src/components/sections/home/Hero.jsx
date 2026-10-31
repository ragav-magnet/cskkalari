import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Nilavilakku } from '@/components/motifs/Motifs'
import LampGlow from '@/components/ui/LampGlow'
import MagneticButton from '@/components/ui/MagneticButton'
import { locations } from '@/data/site'

export default function Hero() {
  const reduce = useReducedMotion()
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const wordY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const lampY = useTransform(scrollYProgress, [0, 1], ['0%', '-20%'])
  const fade = (delay) => (reduce ? {} : { initial: { opacity: 0, y: 18 }, animate: { opacity: 1, y: 0 }, transition: { delay, duration: 0.9, ease: [0.22, 1, 0.36, 1] } })

  return (
    <section ref={ref} className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-soot text-kasavu grain">
      {/* the red earth of the kalari pit, glowing under the lamp */}
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-2/3 bg-[radial-gradient(ellipse_at_50%_100%,#7E2A17_0%,rgba(86,26,13,.6)_40%,transparent_72%)]" />

      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-[38%] -z-10 flex justify-center overflow-hidden">
        <motion.span style={{ y: reduce ? 0 : wordY }} className="select-none whitespace-nowrap font-mal text-[34vw] font-bold leading-none text-zari/[0.07] lg:text-[24vw]">
          കളരി
        </motion.span>
      </div>

      <div className="shell flex flex-1 flex-col items-center pb-10 pt-28 text-center sm:pt-32">
        <motion.div style={{ y: reduce ? 0 : lampY }} {...(reduce ? {} : { initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } })}>
          <div className="relative">
            <LampGlow className="-z-10" />
            <Nilavilakku className="h-36 w-20 drop-shadow-[0_0_40px_rgba(242,179,61,.45)] sm:h-44 sm:w-24" />
          </div>
        </motion.div>

        <motion.h1 {...fade(0.9)} className="mt-8 max-w-4xl text-[2.75rem] leading-[0.98] sm:text-step-5 lg:text-[6rem]">
          The lamp is lit.<br /> Step into the kalari.
        </motion.h1>
        <motion.p {...fade(1.1)} className="mt-6 max-w-xl text-step-1 text-kasavu/75">
          Traditional Kalaripayattu for children and adults, taught the way it has been for centuries, at three centres in Bengaluru.
        </motion.p>
        <motion.div {...fade(1.3)} className="mt-10 flex flex-col gap-3 sm:flex-row">
          <MagneticButton to="/contact" className="btn-flame px-8 py-4 text-step-0">Book a trial class</MagneticButton>
          <Link to="/services" className="btn-ghost-light px-8 py-4 text-step-0">See programmes</Link>
        </motion.div>
      </div>

      <motion.div {...fade(1.6)} className="shell pb-8">
        <ul className="flex flex-col items-center justify-center gap-x-10 gap-y-2 border-t border-kasavu/15 pt-6 text-step--1 text-kasavu/60 sm:flex-row">
          {locations.map((l) => (
            <li key={l.id}><Link to={`/contact#${l.id}`} className="hover:text-flame"><span className="text-kasavu/90">{l.name}</span>, {l.area}</Link></li>
          ))}
        </ul>
      </motion.div>
    </section>
  )
}
