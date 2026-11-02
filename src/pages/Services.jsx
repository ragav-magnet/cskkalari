import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Check } from 'lucide-react'
import PageHeader from '@/components/layout/PageHeader'
import AnimatedTabs from '@/components/ui/AnimatedTabs'
import Accordion from '@/components/ui/Accordion'
import Photo from '@/components/ui/Photo'
import SpotlightCard from '@/components/ui/SpotlightCard'
import MagneticButton from '@/components/ui/MagneticButton'
import { programmes, faqs, firstClass, stages } from '@/data/content'
import { locations } from '@/data/site'

const audiences = ['All', ...new Set(programmes.map((p) => p.audience))].map((a) => ({ id: a, label: a === 'All' ? 'All programmes' : a }))

export default function Services() {
  const [filter, setFilter] = useState('All')
  const { hash } = useLocation()
  useEffect(() => {
    if (!hash) return
    setFilter('All')
    const t = setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth', block: 'center' }), 350)
    return () => clearTimeout(t)
  }, [hash])
  const list = programmes.filter((p) => filter === 'All' || p.audience === filter)

  return (
    <>
      <PageHeader mal="പരിശീലനം" title="Programmes and classes" intro="From a child’s first class to weapons training and workshops for groups. Every programme follows the traditional order of the kalari." />

      <section className="py-24 sm:py-28">
        <div className="shell">
          <AnimatedTabs label="Filter programmes" tabs={audiences} value={filter} onChange={setFilter} />
          <motion.div layout className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
            <AnimatePresence mode="popLayout">
              {list.map((p) => (
                <motion.div key={p.id} layout initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.97 }} transition={{ duration: 0.3 }}>
                  <SpotlightCard id={p.id} className="flex h-full scroll-mt-32 flex-col rounded-lg border border-soot/15 bg-white/50 p-6 sm:p-8" color="rgba(126,42,23,0.08)">
                    <div className="flex items-baseline justify-between gap-4">
                      <p className="text-step--1 font-medium text-laterite">{p.ages}</p>
                      <p className="text-step--1 text-soot/60">{p.frequency}</p>
                    </div>
                    <h2 className="mt-3 text-step-2">{p.title}</h2>
                    <p className="mt-4 text-soot/75">{p.summary}</p>
                    <ul className="mt-6 space-y-2">
                      {p.points.map((pt) => (
                        <li key={pt} className="flex gap-3 text-step--1 text-soot/80"><Check className="mt-0.5 h-4 w-4 shrink-0 text-zari-dark" />{pt}</li>
                      ))}
                    </ul>
                  </SpotlightCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Syllabus */}
      <section className="bg-kadu py-24 text-kasavu grain sm:py-28">
        <div className="shell">
          <h2 className="max-w-2xl text-step-3 sm:text-step-4">The syllabus</h2>
          <p className="mt-4 max-w-measure text-kasavu/70">All programmes follow the same path. Children and beginners spend most of their time in the first stage.</p>
          <ol className="mt-14 grid gap-px overflow-hidden rounded-lg bg-kasavu/15 sm:grid-cols-2 lg:grid-cols-4">
            {stages.map((s, i) => (
              <li key={s.id} className="bg-kadu p-7">
                <p className="text-step--1 text-zari-light">Stage {i + 1}</p>
                <p className="mt-4 font-mal text-step-2 text-flame">{s.mal}</p>
                <h3 className="mt-1 text-step-2">{s.name}</h3>
                <p className="mt-1 text-step--1 text-kasavu/65">{s.gloss}</p>
                <ul className="mt-5 space-y-1.5 text-step--1 text-kasavu/80">
                  {s.learns.map((l) => <li key={l}>{l}</li>)}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* First class */}
      <section className="py-24 sm:py-28">
        <div className="shell grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="text-step-3 text-laterite sm:text-step-4">Your first class</h2>
            <Photo folder="training" index={3} caption="Vandanam, the opening salutation" tone="soot" className="mt-10 aspect-[4/3] rounded-lg" />
          </div>
          <ol className="lg:col-span-6 lg:col-start-7">
            {firstClass.map((f, i) => (
              <li key={f.title} className="grid grid-cols-[3rem_1fr] gap-4 border-t border-soot/15 py-7">
                <span className="font-display text-step-2 text-zari-dark">{i + 1}</span>
                <div>
                  <h3 className="font-body text-step-1 font-semibold">{f.title}</h3>
                  <p className="mt-2 text-soot/75">{f.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Timings */}
      <section className="bg-kasavu-deep py-24 sm:py-28">
        <div className="shell">
          <h2 className="text-step-3 text-laterite sm:text-step-4">Batch timings</h2>
          <p className="mt-4 max-w-measure text-soot/70">Timings can change by term. Call the centre to confirm the batch that suits you.</p>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {locations.map((l) => (
              <div key={l.id} className="rounded-lg bg-kasavu p-7">
                <h3 className="text-step-2 md:text-step-1 lg:text-step-2">{l.name}</h3>
                <p className="text-step--1 text-soot/60">{l.area}</p>
                <dl className="mt-6 space-y-4">
                  {l.hours.map((h) => (
                    <div key={h.days}>
                      <dt className="text-step--1 font-semibold">{h.days}</dt>
                      {h.time.map((t) => <dd key={t} className="text-soot/75">{t}</dd>)}
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 sm:py-28">
        <div className="shell grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="text-step-3 text-laterite sm:text-step-4">Questions parents and students ask</h2>
            <MagneticButton to="/contact" className="btn-laterite mt-8">Ask us something else</MagneticButton>
          </div>
          <div className="lg:col-span-7 lg:col-start-6"><Accordion items={faqs} /></div>
        </div>
      </section>
    </>
  )
}
