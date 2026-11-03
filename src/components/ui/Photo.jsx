import { pick } from '@/lib/images'
import { motifFor, Poothara } from '@/components/motifs/Motifs'
import { cn } from '@/lib/utils'

const tones = {
  laterite: 'bg-laterite text-zari-light',
  kadu: 'bg-kadu text-zari-light',
  soot: 'bg-soot text-zari',
  sand: 'bg-kasavu-deep text-laterite',
}

/**
 * Shows the nth photo from src/assets/images/<folder>. Until real photos are
 * added it renders a woven artwork panel with a caption, so layouts never
 * break and it is obvious where each photo will go.
 */
export default function Photo({ folder, index = 0, image, caption, tone = 'laterite', className, imgClassName, loading = 'lazy' }) {
  const img = image ?? pick(folder, index)
  if (img) {
    return (
      <div className={cn('relative overflow-hidden bg-soot', className)}>
        <img src={img.src} alt={img.alt || caption} loading={loading} decoding="async" className={cn('h-full w-full object-cover', imgClassName)} />
      </div>
    )
  }
  const Motif = motifFor[folder] ?? Poothara
  return (
    <div role="img" aria-label={caption ? `${caption} (photo coming soon)` : 'Photo coming soon'} className={cn('relative overflow-hidden grain', tones[tone], className)}>
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{ backgroundImage: 'repeating-linear-gradient(90deg, currentColor 0 1px, transparent 1px 9px), repeating-linear-gradient(0deg, currentColor 0 1px, transparent 1px 9px)' }}
      />
      <Motif className="absolute left-1/2 top-1/2 h-1/2 max-h-48 w-1/2 max-w-48 -translate-x-1/2 -translate-y-1/2 opacity-70" />
      {caption && (
        <span className="absolute bottom-3 left-4 right-4 text-step--1 font-medium opacity-80">{caption}</span>
      )}
    </div>
  )
}
