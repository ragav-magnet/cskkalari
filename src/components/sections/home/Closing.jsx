import { Link } from 'react-router-dom'
import KasavuBand from '@/components/ui/KasavuBand'
import MagneticButton from '@/components/ui/MagneticButton'
import ScrollText from '@/components/ui/ScrollText'
import { site } from '@/data/site'

export default function Closing() {
  return (
    <section className="relative overflow-hidden bg-laterite text-kasavu grain">
      <KasavuBand />
      <div className="shell py-24 sm:py-32">
        <blockquote className="max-w-4xl">
          <p className="font-mal text-step-2 text-zari-light sm:text-step-3">മെയ്യ് കണ്ണാകണം</p>
          <p className="mt-4 font-display text-step-3 leading-tight sm:text-step-4"><ScrollText text="“Let the body become all eyes.”" /></p>
          <footer className="mt-4 text-kasavu/70">A saying of the kalari: train until the whole body is aware.</footer>
        </blockquote>
        <div className="mt-16 flex flex-col gap-8 border-t border-kasavu/20 pt-10 md:flex-row md:items-center md:justify-between">
          <p className="max-w-md text-step-1">Your first class is a trial. Come, train with a beginner batch and decide afterwards.</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <MagneticButton to="/contact" className="btn-flame px-8 py-4 text-step-0">Book a trial class</MagneticButton>
            <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer" className="btn-ghost-light px-8 py-4 text-step-0">Message on WhatsApp</a>
          </div>
        </div>
      </div>
    </section>
  )
}
