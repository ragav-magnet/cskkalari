import { Mail, Phone } from 'lucide-react'
import { Instagram, Facebook, Youtube } from '@/components/motifs/SocialIcons'
import { Link } from 'react-router-dom'
import { locations, nav, site, mapLink } from '@/data/site'
import KasavuBand from '@/components/ui/KasavuBand'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="bg-soot text-kasavu">
      <KasavuBand />
      <div className="shell grid gap-12 py-16 md:grid-cols-12 md:gap-8 lg:gap-12">
        <div className="md:col-span-4">
          <Logo light />
          <p className="mt-6 max-w-xs text-kasavu/65">Traditional Kalaripayattu for children and adults, taught at three centres across Bengaluru.</p>
          <div className="mt-6 flex gap-2">
            {[[Instagram, site.social.instagram, 'Instagram'], [Youtube, site.social.youtube, 'YouTube'], [Facebook, site.social.facebook, 'Facebook']].map(([Icon, href, label]) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="flex h-11 w-11 items-center justify-center rounded-full border border-kasavu/20 text-kasavu/80 transition-colors hover:border-flame hover:text-flame"><Icon className="h-4 w-4" /></a>
            ))}
          </div>
        </div>
        <div className="md:col-span-4 lg:col-span-5">
          <h2 className="font-body text-step--1 font-semibold text-zari-light">Our centres</h2>
          <ul className="mt-4 space-y-4">
            {locations.map((l) => (
              <li key={l.id}>
                <a href={mapLink(l.mapQuery)} target="_blank" rel="noreferrer" className="group block">
                  <span className="font-display text-step-1 group-hover:text-flame">{l.name}</span>
                  <span className="block text-step--1 text-kasavu/55">{l.address}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-4 lg:col-span-3">
          <h2 className="font-body text-step--1 font-semibold text-zari-light">Visit</h2>
          <ul className="mt-4 lg:space-y-2">
            {nav.map((n) => <li key={n.to}><Link to={n.to} className="tap link-underline text-kasavu/80 hover:text-kasavu">{n.label}</Link></li>)}
          </ul>
          <div className="mt-6 text-step--1 lg:space-y-2">
            <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="tap flex gap-2 text-kasavu/80 hover:text-flame"><Phone className="h-4 w-4" />{site.phone}</a>
            <a href={`mailto:${site.email}`} className="tap flex gap-2 text-kasavu/80 hover:text-flame"><Mail className="h-4 w-4" />{site.email}</a>
          </div>
        </div>
      </div>
      <div className="border-t border-kasavu/10">
        <div className="shell flex flex-col gap-2 py-6 text-step--1 text-kasavu/45 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}</p>
          <p>Kalaripayattu classes in Kasavanahalli, S.G. Palaya and Udayanagar</p>
        </div>
      </div>
    </footer>
  )
}
