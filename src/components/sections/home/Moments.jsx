import { useState } from 'react'
import { Link } from 'react-router-dom'
import Photo from '@/components/ui/Photo'
import Reveal from '@/components/ui/Reveal'
import { pick } from '@/lib/images'
import { cn } from '@/lib/utils'

// [folder, photo number in that folder, grid placement, optional focal point]
const tiles = [
  ['events', 1, 'col-span-2 aspect-video lg:col-span-8 lg:row-span-2 lg:aspect-auto'],
  ['training', 9, 'aspect-square lg:col-span-4 lg:row-span-2 lg:aspect-auto'],
  ['training', 4, 'aspect-square lg:col-span-4 lg:aspect-auto'],
  ['training', 8, 'aspect-square lg:col-span-4 lg:aspect-auto'],
  ['training', 2, 'aspect-square lg:col-span-4 lg:aspect-auto'],
  ['training', 3, 'col-span-2 aspect-video lg:col-span-7 lg:aspect-auto', 'object-[35%_50%]'],
  ['training', 6, 'col-span-2 aspect-video lg:col-span-5 lg:aspect-auto'],
]

// Hovering a photo sharpens it and softens the rest, after the Aceternity "Focus Cards"
export default function Moments() {
  const [active, setActive] = useState(null)
  return (
    <section className="pb-24 sm:pb-32">
      <div className="shell">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-step-3 text-laterite sm:text-step-4">Life at the kalari</h2>
            <p className="mt-4 max-w-measure text-soot/70">Classes, performances and the traditional weapons students train towards.</p>
          </div>
          <Link to="/gallery" className="btn-ghost-dark shrink-0 self-start md:self-auto">See the full gallery</Link>
        </div>
        <Reveal className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:auto-rows-[16rem] lg:grid-cols-12">
          {tiles.map(([folder, index, placement, focus], i) => (
            <div
              key={`${folder}-${index}`}
              onPointerEnter={(e) => e.pointerType === 'mouse' && setActive(i)}
              onPointerLeave={() => setActive(null)}
              className={cn('group relative overflow-hidden rounded-md transition-[filter,transform] duration-300', placement, active !== null && active !== i && 'scale-[0.98] blur-[2px] brightness-75')}
            >
              <Photo folder={folder} index={index} className="h-full w-full" imgClassName={cn('transition-transform duration-700 group-hover:scale-105', focus)} />
              <span aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-soot/80 to-transparent p-4 pt-10 text-step--1 font-medium text-kasavu opacity-0 transition-opacity duration-300 first-letter:uppercase group-hover:opacity-100">
                {pick(folder, index)?.alt}
              </span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
