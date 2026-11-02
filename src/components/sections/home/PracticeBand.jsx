import Marquee from '@/components/ui/Marquee'
import { stages } from '@/data/content'

// The four stages, repeating. Decorative: the Stages section below has the full text.
export default function PracticeBand() {
  return (
    <section aria-hidden="true" className="bg-laterite py-5 text-kasavu">
      <Marquee>
        {stages.map((s) => (
          <span key={s.id} className="flex items-center gap-4 whitespace-nowrap px-8">
            <span className="font-mal text-step-2 text-zari-light">{s.mal}</span>
            <span className="font-display text-step-1">{s.name}</span>
            <span className="ml-8 h-1.5 w-1.5 rotate-45 bg-flame" />
          </span>
        ))}
      </Marquee>
    </section>
  )
}
