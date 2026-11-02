import { AnimatePresence, motion } from 'framer-motion'
import { Expand } from 'lucide-react'
import { useMemo, useState } from 'react'
import PageHeader from '@/components/layout/PageHeader'
import AnimatedTabs from '@/components/ui/AnimatedTabs'
import Lightbox from '@/components/ui/Lightbox'
import Photo from '@/components/ui/Photo'
import { galleryCategories } from '@/data/content'
import { imagesIn } from '@/lib/images'

// Captions for artwork slots shown until real photos are added to a folder
const placeholders = {
  training: ['Meythari warm-up', 'Kettukari staff drill', 'Children’s batch', 'Leg swings', 'Otta practice', 'Partner sparring'],
  events: ['Annual demonstration', 'Lighting the lamp', 'Urumi display', 'Festival performance'],
  kasavanahalli: ['Kasavanahalli centre', 'Evening batch', 'Weekend class'],
  'sg-palaya': ['S.G. Palaya centre', 'Morning batch', 'Weapons class'],
  udayanagar: ['Udayanagar centre', 'Kids’ class', 'Training floor'],
}
const tones = ['laterite', 'kadu', 'soot', 'sand']
const shapes = ['aspect-[4/5]', 'aspect-square', 'aspect-[3/4]', 'aspect-[4/3]', 'aspect-[2/3]']
const label = Object.fromEntries(galleryCategories.map((c) => [c.id, c.label]))

function buildItems() {
  let n = 0
  return Object.keys(placeholders).flatMap((folder) => {
    const real = imagesIn(folder)
    const list = real.length
      ? real.map((img) => ({ image: img, caption: img.alt }))
      : placeholders[folder].map((caption) => ({ image: null, caption }))
    return list.map((it, i) => ({ ...it, folder, key: `${folder}-${i}`, tone: tones[n % 4], shape: shapes[n++ % shapes.length], place: label[folder] }))
  })
}

// The same photo can sit in several folders; show it once per view
function uniquePhotos(list) {
  const seen = new Set()
  return list.filter((it) => {
    if (!it.image) return true
    if (seen.has(it.image.alt)) return false
    seen.add(it.image.alt)
    return true
  })
}

export default function Gallery() {
  const all = useMemo(buildItems, [])
  const [filter, setFilter] = useState('all')
  const [index, setIndex] = useState(null)
  const [active, setActive] = useState(null) // hovered photo; the others soften around it
  const items = uniquePhotos(filter === 'all' ? all : all.filter((i) => i.folder === filter))
  const hasReal = all.some((i) => i.image)

  return (
    <>
      <PageHeader mal="ചിത്രങ്ങൾ" title="Gallery" intro="Training sessions, demonstrations and everyday life at our three kalaris." />
      <section className="py-20 sm:py-24">
        <div className="shell">
          <AnimatedTabs label="Filter photos" tabs={galleryCategories} value={filter} onChange={(f) => { setActive(null); setFilter(f) }} />
          {!hasReal && (
            <p className="mt-6 max-w-measure text-step--1 text-soot/60">Photos from our centres are being added. The panels below show where each one will appear.</p>
          )}
          <motion.ul layout className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>li]:mb-4">
            <AnimatePresence mode="popLayout">
              {items.map((it, i) => (
                <motion.li key={it.key} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="break-inside-avoid" onPointerEnter={(e) => e.pointerType === 'mouse' && setActive(it.key)} onPointerLeave={() => setActive(null)}>
                  <motion.button
                    layoutId={`g-${it.key}`}
                    onClick={() => setIndex(i)}
                    className={`group relative block w-full overflow-hidden rounded-md text-left transition-[filter] duration-300 ${active && active !== it.key ? 'blur-[2px] brightness-75' : ''}`}
                    aria-label={`Open ${it.caption}`}
                  >
                    <Photo image={it.image} folder={it.folder} tone={it.tone} className={it.image ? 'w-full' : `${it.shape} w-full`} imgClassName="transition-transform duration-700 group-hover:scale-105" />
                    <span className="absolute inset-0 flex items-end justify-between bg-gradient-to-t from-soot/80 via-soot/0 to-transparent p-4 text-kasavu opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                      <span>
                        <span className="block text-step-0 font-medium">{it.caption}</span>
                        <span className="text-step--1 text-kasavu/70">{it.place}</span>
                      </span>
                      <Expand className="h-5 w-5" />
                    </span>
                  </motion.button>
                </motion.li>
              ))}
            </AnimatePresence>
          </motion.ul>
        </div>
      </section>
      <Lightbox items={items} index={index} onClose={() => setIndex(null)} onIndex={setIndex} />
    </>
  )
}
