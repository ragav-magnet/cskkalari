import { Link } from 'react-router-dom'
import Photo from '@/components/ui/Photo'
import { Poothara } from '@/components/motifs/Motifs'

export default function Intro() {
  return (
    <section className="py-24 sm:py-32">
      <div className="shell grid items-center gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Poothara className="h-12 w-14 text-zari" />
          <h2 className="mt-6 text-step-3 text-laterite sm:text-step-4">More than a martial art</h2>
          <div className="mt-6 max-w-measure space-y-4 text-soot/80">
            <p>Kalaripayattu is the martial tradition of Kerala, often called one of the oldest fighting systems in the world. In the kalari, students train the body first: balance, breath and flexibility come long before any weapon is lifted.</p>
            <p>At CSK Kalari Sangham we teach that tradition as a complete practice, with the same respect for the guru, the lamp and the training ground that you would find in a kalari in Kerala.</p>
          </div>
          <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-soot/15 pt-6">
            {[['3', 'centres in Bengaluru'], ['6+', 'starting age'], ['4', 'stages of training']].map(([n, l]) => (
              <div key={l}>
                <dt className="sr-only">{l}</dt>
                <dd className="font-display text-step-3 text-laterite">{n}</dd>
                <dd className="text-step--1 text-soot/60">{l}</dd>
              </div>
            ))}
          </dl>
          <Link to="/about" className="btn-ghost-dark mt-10">Read our story</Link>
        </div>
        <div className="relative lg:col-span-7">
          <div className="grid grid-cols-6 grid-rows-6 gap-3 sm:gap-4" style={{ aspectRatio: '7 / 6' }}>
            <Photo folder="training" index={0} caption="Morning batch" tone="laterite" className="col-span-4 row-span-6 rounded-t-[999px]" loading="eager" />
            <Photo folder="training" index={1} caption="Kettukari practice" tone="kadu" className="col-span-2 row-span-3" />
            <Photo folder="events" index={0} caption="Lighting the lamp" tone="soot" className="col-span-2 row-span-3" />
          </div>
        </div>
      </div>
    </section>
  )
}
