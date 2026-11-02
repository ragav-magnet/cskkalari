import { Link } from 'react-router-dom'
import NumberTicker from '@/components/ui/NumberTicker'
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
            {[[3, '', 'centres in Bengaluru'], [6, '+', 'starting age'], [4, '', 'stages of training']].map(([n, suffix, l]) => (
              <div key={l}>
                <dt className="sr-only">{l}</dt>
                <dd className="font-display text-step-3 text-laterite"><NumberTicker value={n} suffix={suffix} /></dd>
                <dd className="text-step--1 text-soot/60">{l}</dd>
              </div>
            ))}
          </dl>
          <Link to="/about" className="btn-ghost-dark mt-10">Read our story</Link>
        </div>
        <div className="relative lg:col-span-7">
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {/* aspect matches the photo so all of it shows, uncropped */}
            <Photo folder="training" index={5} caption="Morning batch" tone="laterite" className="col-span-2 aspect-[1241/824] rounded-lg" loading="eager" />
            <Photo folder="events" index={2} caption="Kettukari practice" tone="kadu" className="aspect-square rounded-lg" imgClassName="object-[55%_50%]" />
            <Photo folder="sg-palaya" caption="S.G. Palaya centre" tone="soot" className="aspect-square rounded-lg" imgClassName="object-top" />
          </div>
        </div>
      </div>
    </section>
  )
}
