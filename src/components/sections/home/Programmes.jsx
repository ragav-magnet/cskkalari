import { Link } from 'react-router-dom'
import SpotlightCard from '@/components/ui/SpotlightCard'
import { programmes } from '@/data/content'
import { Staff, Otta, ShieldSword, Urumi } from '@/components/motifs/Motifs'
import { cn } from '@/lib/utils'

const icons = [null, null, Staff, ShieldSword, Otta, Urumi]

export default function Programmes() {
  return (
    <section className="py-24 sm:py-32">
      <div className="shell">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="max-w-xl text-step-3 text-laterite sm:text-step-4">Classes for every age and every body</h2>
          <Link to="/services" className="btn-ghost-dark self-start md:self-auto">All programmes and timings</Link>
        </div>
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {programmes.map((p, i) => {
            const Icon = icons[i]
            const featured = p.featured
            return (
              <SpotlightCard
                key={p.id}
                as={Link}
                to={`/services#${p.id}`}
                color={featured ? 'rgba(242,179,61,0.22)' : 'rgba(126,42,23,0.10)'}
                className={cn(
                  'flex flex-col rounded-lg p-7 transition-transform duration-300 hover:-translate-y-1',
                  featured ? 'min-h-[22rem] lg:col-span-2' : 'min-h-[16rem] border border-soot/15 bg-white/40',
                  i === 0 && 'bg-laterite text-kasavu',
                  i === 1 && 'bg-kadu text-kasavu',
                )}
              >
                <p className={cn('text-step--1', featured ? 'text-zari-light' : 'text-laterite')}>{p.ages}</p>
                <h3 className={cn('mt-2', featured ? 'text-step-3' : 'text-step-2')}>{p.title}</h3>
                <p className={cn('mt-4 max-w-md', featured ? 'text-kasavu/80' : 'text-step--1 text-soot/70')}>{p.summary}</p>
                <div className="mt-auto flex items-end justify-between pt-6">
                  <span className={cn('text-step--1 font-medium', featured ? 'text-flame' : 'text-soot')}>{p.frequency}</span>
                  {Icon && <Icon className="h-10 w-10 text-zari" />}
                </div>
              </SpotlightCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}
