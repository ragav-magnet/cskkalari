import { cn } from '@/lib/utils'
export default function KasavuBand({ thin, className }) {
  return <div aria-hidden="true" className={cn(thin ? 'kasavu-band-thin' : 'kasavu-band', className)} />
}
