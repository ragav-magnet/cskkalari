import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import Embers from '@/components/ui/Embers'
import MagneticButton from '@/components/ui/MagneticButton'
import TextReveal from '@/components/ui/TextReveal'
import { locations } from '@/data/site'
import { pick } from '@/lib/images'

export default function Hero() {
  const reduce = useReducedMotion()
  const ref = useRef(null)
  const bg = pick('hero')
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const wordY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const fade = (delay) => (reduce ? {} : { initial: { opacity: 0, y: 18 }, animate: { opacity: 1, y: 0 }, transition: { delay, duration: 0.9, ease: [0.22, 1, 0.36, 1] } })

  return (
    <section ref={ref} className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-soot text-kasavu grain">
      {bg && (
        <>
          <img src={bg.src} alt="" aria-hidden="true" className="absolute inset-0 -z-20 h-full w-full object-cover object-[22%_50%] sm:object-center" />
          <div aria-hidden="true" className="absolute inset-0 -z-20 bg-soot/60" />
        </>
      )}
      {/* the red earth of the kalari pit, glowing under the lamp */}
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-2/3 bg-[radial-gradient(ellipse_at_50%_100%,#7E2A17_0%,rgba(86,26,13,.6)_40%,transparent_72%)]" />

      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-[38%] -z-10 flex justify-center overflow-hidden">
        <motion.span style={{ y: reduce ? 0 : wordY }} className="select-none whitespace-nowrap font-mal text-[34vw] font-bold leading-none text-zari/[0.07] lg:text-[24vw]">
          കളരി
        </motion.span>
      </div>

      <Embers className="-z-10" />

      <div className="shell flex flex-1 flex-col items-center justify-center pb-10 pt-28 text-center sm:pt-32">
        <h1 className="max-w-4xl text-[2.75rem] leading-[0.98] sm:text-step-5 lg:text-[6rem] [@media(max-height:500px)]:text-step-4">
          <TextReveal text="The lamp is lit." delay={0.5} /><br /> <TextReveal text="Step into the kalari." delay={0.8} />
        </h1>
        <motion.p {...fade(1.1)} className="mt-6 max-w-xl text-step-1 text-kasavu/75">
          Traditional Kalaripayattu for children and adults, taught the way it has been for centuries, at three centres in Bengaluru.
        </motion.p>
        <motion.div {...fade(1.3)} className="mt-10 flex flex-col gap-3 sm:flex-row">
          <MagneticButton to="/contact" className="btn-flame px-8 py-4 text-step-0">Book a trial class</MagneticButton>
          <Link to="/services" className="btn-ghost-light px-8 py-4 text-step-0">See programmes</Link>
        </motion.div>
      </div>

      <motion.div {...fade(1.6)} className="shell pb-8">
        <ul className="flex flex-col items-center justify-center gap-x-10 border-t border-kasavu/15 pt-6 text-step--1 text-kasavu/60 sm:flex-row">
          {locations.map((l) => (
            <li key={l.id}><Link to={`/contact#${l.id}`} className="tap hover:text-flame"><span className="text-kasavu/90">{l.name}</span>, {l.area}</Link></li>
          ))}
        </ul>
      </motion.div>
    </section>
  )
}
