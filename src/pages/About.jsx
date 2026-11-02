import PageHeader from '@/components/layout/PageHeader'
import Photo from '@/components/ui/Photo'
import Reveal from '@/components/ui/Reveal'
import KasavuBand from '@/components/ui/KasavuBand'
import { Poothara, Emblem } from '@/components/motifs/Motifs'
import { heritage, values } from '@/data/content'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <>
      <PageHeader
        mal="പാരമ്പര്യം"
        title="Keeping an old art alive in a new city"
        intro="CSK Kalari Sangham teaches Kalaripayattu in Bengaluru with the discipline, rituals and patience of a traditional Kerala kalari."
      />

      {/* Story — TODO: replace with the Sangham's own history, founders and milestones */}
      <section className="py-24 sm:py-32">
        <div className="shell grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-6 lg:col-start-1">
            <h2 className="text-step-3 text-laterite sm:text-step-4">Our story</h2>
            <div className="mt-6 max-w-measure space-y-4 text-soot/80">
              <p>CSK Kalari Sangham began with a simple idea: that families in Bengaluru should not have to travel to Kerala to learn Kalaripayattu properly. The Sangham was founded by practitioners trained in the traditional way, under a gurukkal, over many years.</p>
              <p>What started as a single batch has grown into three centres, in Kasavanahalli, S.G. Palaya and Udayanagar. Each one is run as a kalari, not a gym. The lamp is lit before training, students salute the space as they enter, and the syllabus moves at the pace of the student.</p>
              <p>Today our students range from six-year-olds learning their first footwork to working adults rediscovering strength and flexibility, and senior students who perform at cultural events across the city.</p>
            </div>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <Photo folder="events" index={0} caption="Students at a demonstration" tone="kadu" className="aspect-[4/5] rounded-t-[999px]" />
          </div>
        </div>
      </section>

      {/* Mission & vision */}
      <section className="bg-kasavu-deep py-24 sm:py-28">
        <div className="shell grid gap-12 md:grid-cols-2">
          <div>
            <Emblem badge lit={false} className="h-16 w-16" />
            <h2 className="mt-6 text-step-2 text-laterite sm:text-step-3">Our mission</h2>
            <p className="mt-4 max-w-measure text-soot/80">To teach authentic Kalaripayattu to anyone willing to practise, building strong bodies, calm minds and respect for the tradition, in classes that are safe, structured and close to home.</p>
          </div>
          <div>
            <Poothara className="h-16 w-16 text-zari-dark" />
            <h2 className="mt-6 text-step-2 text-laterite sm:text-step-3">Our vision</h2>
            <p className="mt-4 max-w-measure text-soot/80">A city where Kalaripayattu is part of everyday life, practised in neighbourhoods and schools, and passed on to the next generation with its knowledge and values intact.</p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 sm:py-32">
        <div className="shell">
          <h2 className="max-w-2xl text-step-3 text-laterite sm:text-step-4">What we hold to</h2>
          <div className="mt-14 grid gap-px overflow-hidden rounded-lg bg-soot/15 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.name} className="bg-kasavu p-8">
                <p className="font-mal text-step-2 text-zari-dark">{v.mal}</p>
                <h3 className="mt-2 text-step-2">{v.name}</h3>
                <p className="mt-4 text-soot/75">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Heritage timeline */}
      <section className="bg-soot text-kasavu grain">
        <KasavuBand />
        <div className="shell grid gap-12 py-24 sm:py-32 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <h2 className="text-step-3 sm:text-step-4 lg:text-[2.5rem] xl:text-step-4">The heritage of Kalaripayattu</h2>
              <p className="mt-6 max-w-sm text-kasavu/70">How a training ground in medieval Kerala became a practice followed around the world.</p>
            </div>
          </div>
          <ol className="relative border-l border-zari/40 lg:col-span-7 lg:col-start-6">
            {heritage.map((h, i) => (
              <Reveal as="li" key={h.title} delay={0.05} className="relative pb-14 pl-10 last:pb-0">
                <span className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full bg-flame shadow-[0_0_16px_rgba(242,179,61,.7)]" />
                <p className="text-step--1 text-zari-light">{h.period}</p>
                <h3 className="mt-1 text-step-2">{h.title}</h3>
                <p className="mt-3 max-w-measure text-kasavu/75">{h.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* The kalari space */}
      <section className="py-24 sm:py-32">
        <div className="shell grid items-center gap-14 lg:grid-cols-2">
          <Photo folder="training" index={2} caption="Inside the kalari" tone="laterite" className="aspect-[4/3] rounded-lg" />
          <div>
            <h2 className="text-step-3 text-laterite sm:text-step-4">Inside a kalari</h2>
            <div className="mt-6 max-w-measure space-y-4 text-soot/80">
              <p>A traditional kuzhi kalari is a pit dug into the earth, about 42 feet long and 21 feet wide, with a floor of beaten red clay. Being below ground keeps it cool and protects students from the wind.</p>
              <p>In the south-west corner stands the poothara, a seven-tiered altar to the guardian deity of the kalari. Students touch the floor and salute it at the start and end of every session, and a lamp is kept burning while training goes on.</p>
            </div>
            <Link to="/services" className="btn-laterite mt-10">See how we train</Link>
          </div>
        </div>
      </section>
    </>
  )
}
