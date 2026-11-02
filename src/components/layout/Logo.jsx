import { Link } from 'react-router-dom'
import { Emblem } from '@/components/motifs/Motifs'
import { cn } from '@/lib/utils'

export default function Logo({ light, className }) {
  return (
    <Link to="/" className={cn('flex items-center gap-3', className)} aria-label="CSK Kalari Sangham, home">
      <Emblem badge lit={false} className="h-12 w-12 shrink-0" />
      <span className="flex flex-col leading-none">
        <span className={cn('font-display text-[1.6rem] leading-none', light ? 'text-kasavu' : 'text-laterite')}>CSK Kalari</span>
        <span className={cn('mt-1 font-mal text-[0.8rem]', light ? 'text-zari-light' : 'text-zari-dark')}>കളരി സംഘം</span>
      </span>
    </Link>
  )
}
