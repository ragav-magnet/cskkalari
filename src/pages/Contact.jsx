import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle2, Clock, Mail, MapPin, Phone } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import PageHeader from '@/components/layout/PageHeader'
import AnimatedTabs from '@/components/ui/AnimatedTabs'
import Photo from '@/components/ui/Photo'
import { programmes } from '@/data/content'
import { locations, mapEmbed, mapLink, site } from '@/data/site'

const empty = { name: '', phone: '', email: '', centre: '', programme: '', age: '', message: '', website: '' }

function validate(v) {
  const e = {}
  if (!v.name.trim()) e.name = 'Enter your name.'
  if (!/^[+\d][\d\s-]{8,}$/.test(v.phone.trim())) e.phone = 'Enter a phone number with at least 9 digits.'
  if (!/^\S+@\S+\.\S+$/.test(v.email.trim())) e.email = 'Enter an email like name@example.com.'
  if (!v.centre) e.centre = 'Choose the centre you’d like to attend.'
  return e
}

function Field({ label, error, children, id, optional }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-step--1 font-medium">
        {label} {optional && <span className="font-normal text-soot/50">(optional)</span>}
      </label>
      {children}
      {error && <p id={`${id}-err`} className="mt-1.5 text-step--1 text-laterite">{error}</p>}
    </div>
  )
}

function EnquiryForm({ centre }) {
  const [v, setV] = useState({ ...empty, centre })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent | failed
  const confirmation = useRef(null)
  useEffect(() => setV((o) => ({ ...o, centre })), [centre])
  // The form is taller than the confirmation that replaces it, so bring it into view
  useEffect(() => { if (status === 'sent') confirmation.current?.scrollIntoView({ block: 'start' }) }, [status])
  const set = (k) => (e) => setV({ ...v, [k]: e.target.value })
  const a11y = (k) => ({ id: k, 'aria-invalid': !!errors[k], 'aria-describedby': errors[k] ? `${k}-err` : undefined })
  const centreLoc = locations.find((l) => l.id === v.centre)

  const submit = async (e) => {
    e.preventDefault()
    const errs = validate(v)
    setErrors(errs)
    if (Object.keys(errs).length) {
      document.getElementById(Object.keys(errs)[0])?.focus()
      return
    }
    setStatus('sending')
    try {
      const res = await fetch(site.formEndpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify({ ...v, centre: centreLoc?.name }) })
      if (!res.ok) throw new Error()
      setStatus('sent')
    } catch {
      setStatus('failed')
    }
  }

  // If email fails, the same enquiry can still be sent by WhatsApp, pre-filled
  const whatsappFallback = () => {
    const text = [`Enquiry from the website`, `Name: ${v.name}`, `Phone: ${v.phone}`, `Email: ${v.email}`, `Centre: ${centreLoc?.name}`, v.programme && `Programme: ${v.programme}`, v.age && `Student age: ${v.age}`, v.message && `Message: ${v.message}`].filter(Boolean).join('\n')
    return `https://wa.me/${centreLoc?.whatsapp ?? site.whatsapp}?text=${encodeURIComponent(text)}`
  }

  if (status === 'sent') {
    return (
      <motion.div ref={confirmation} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="scroll-mt-28 rounded-lg bg-kadu p-10 text-kasavu" role="status">
        <CheckCircle2 className="h-10 w-10 text-flame" />
        <h3 className="mt-6 text-step-2">Enquiry sent</h3>
        <p className="mt-3 max-w-md text-kasavu/75">Thank you, {v.name.split(' ')[0]}. Our team will call you within a day to fix a time for your trial class.</p>
        <button className="btn-ghost-light mt-8" onClick={() => { setV({ ...empty, centre }); setStatus('idle') }}>Send another enquiry</button>
      </motion.div>
    )
  }

  return (
    <form noValidate onSubmit={submit} className="grid gap-5 sm:grid-cols-2">
      {/* Spam trap: hidden from people, filled in by bots, checked in api/contact.js */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" value={v.website} onChange={set('website')} className="absolute left-[-9999px] h-px w-px opacity-0" />
      <div className="sm:col-span-2"><Field label="Your name" id="name" error={errors.name}><input className="field" autoComplete="name" value={v.name} onChange={set('name')} {...a11y('name')} /></Field></div>
      <Field label="Phone" id="phone" error={errors.phone}><input className="field" type="tel" autoComplete="tel" inputMode="tel" placeholder="+91" value={v.phone} onChange={set('phone')} {...a11y('phone')} /></Field>
      <Field label="Email" id="email" error={errors.email}><input className="field" type="email" required autoComplete="email" value={v.email} onChange={set('email')} {...a11y('email')} /></Field>
      <Field label="Centre" id="centre" error={errors.centre}>
        <select className="field" value={v.centre} onChange={set('centre')} {...a11y('centre')}>
          <option value="">Choose a centre</option>
          {locations.map((l) => <option key={l.id} value={l.id}>{l.name}</option>)}
        </select>
      </Field>
      <Field label="Programme" id="programme" optional>
        <select className="field" value={v.programme} onChange={set('programme')} id="programme">
          <option value="">Not sure yet</option>
          {programmes.map((p) => <option key={p.id}>{p.title}</option>)}
        </select>
      </Field>
      <div className="sm:col-span-2"><Field label="Student’s age" id="age" optional><input className="field" inputMode="numeric" value={v.age} onChange={set('age')} id="age" /></Field></div>
      <div className="sm:col-span-2"><Field label="Message" id="message" optional><textarea className="field min-h-32" value={v.message} onChange={set('message')} id="message" placeholder="Anything we should know, like injuries or preferred batch times" /></Field></div>
      <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center">
        <button type="submit" className="btn-laterite px-8 py-4 text-step-0" disabled={status === 'sending'}>{status === 'sending' ? 'Sending enquiry…' : 'Send enquiry'}</button>
      </div>
      {status === 'failed' && (
        <div className="sm:col-span-2" role="alert">
          <p className="text-laterite">We couldn’t send your enquiry by email. Tap the button to send the same details on WhatsApp, or call {site.phone}.</p>
          <a href={whatsappFallback()} target="_blank" rel="noreferrer" className="btn-flame mt-4">Send on WhatsApp</a>
        </div>
      )}
    </form>
  )
}

export default function Contact() {
  const { hash } = useLocation()
  const initial = locations.find((l) => `#${l.id}` === hash)?.id ?? locations[0].id
  const [active, setActive] = useState(initial)
  useEffect(() => {
    if (!hash) return
    setActive(locations.find((l) => `#${l.id}` === hash)?.id ?? active)
    const t = setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView({ block: 'start' }), 350)
    return () => clearTimeout(t)
  }, [hash]) // eslint-disable-line
  const loc = locations.find((l) => l.id === active)

  return (
    <>
      <PageHeader mal="സ്വാഗതം" title="Visit a kalari near you" intro="Book a trial class, ask about fees or bring a group. Choose a centre to see its address, timings and map.">
        <div className="mt-10 flex flex-wrap gap-x-10 gap-y-3 text-kasavu/85">
          <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="tap flex gap-2 hover:text-flame"><Phone className="h-4 w-4 text-flame" />{site.phone}</a>
          <a href={`mailto:${site.email}`} className="tap flex gap-2 hover:text-flame"><Mail className="h-4 w-4 text-flame" />{site.email}</a>
        </div>
      </PageHeader>

      <section className="pt-20 sm:pt-24">
        <div className="shell">
          <h2 className="text-step-3 text-laterite sm:text-step-4">Our three centres</h2>
          <ul className="mt-10 grid gap-5 md:grid-cols-3">
            {locations.map((l) => (
              <li key={l.id} id={l.id} className="flex scroll-mt-28 flex-col overflow-hidden rounded-lg border border-soot/15 bg-white/40">
                <Photo folder={l.id} caption={`${l.name} centre`} className="aspect-[4/3] w-full" />
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-step-2 md:text-step-1 lg:text-step-2">{l.name}</h3>
                  <p className="mt-3 flex-1 text-step--1 text-soot/70">{l.address}</p>
                  <a href={`tel:${l.phone.replace(/\s/g, '')}`} className="tap mt-4 gap-2 font-medium hover:text-laterite"><Phone className="h-4 w-4 text-zari-dark" />{l.phone}</a>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <a href={mapLink(l.mapQuery)} target="_blank" rel="noreferrer" className="btn-ghost-dark px-4 py-2"><MapPin className="h-4 w-4" />Directions</a>
                    <button type="button" onClick={() => { setActive(l.id); document.getElementById('centre-details')?.scrollIntoView({ block: 'start' }) }} aria-pressed={active === l.id} className="btn-laterite px-4 py-2">Timings and map</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="shell">
          <AnimatedTabs label="Choose a centre" tabs={locations.map((l) => ({ id: l.id, label: l.name }))} value={active} onChange={setActive} />
          <div id="centre-details" className="mt-10 grid scroll-mt-28 overflow-hidden rounded-lg border border-soot/15 bg-white/40 lg:grid-cols-5">
            <AnimatePresence mode="wait">
              <motion.div key={loc.id} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 12 }} transition={{ duration: 0.3 }} className="p-8 lg:col-span-2 lg:p-10" role="tabpanel">
                <h2 className="text-step-3 text-laterite">{loc.name}</h2>
                <ul className="mt-8 space-y-6">
                  <li className="flex gap-4"><MapPin className="mt-1 h-5 w-5 shrink-0 text-zari-dark" /><span>{loc.address}<span className="mt-1 block text-step--1 text-soot/60">Near {loc.near}</span></span></li>
                  <li className="flex gap-4"><Clock className="mt-1 h-5 w-5 shrink-0 text-zari-dark" />
                    <span className="space-y-2">{loc.hours.map((h) => <span key={h.days} className="block"><span className="font-medium">{h.days}</span><span className="block text-soot/70">{h.time.join(', ')}</span></span>)}</span>
                  </li>
                  <li className="flex gap-4"><Phone className="mt-1 h-5 w-5 shrink-0 text-zari-dark" /><a href={`tel:${loc.phone.replace(/\s/g, '')}`} className="tap -mt-2.5 hover:text-laterite lg:mt-0">{loc.phone}</a></li>
                </ul>
                <a href={mapLink(loc.mapQuery)} target="_blank" rel="noreferrer" className="btn-ghost-dark mt-10">Open in Google Maps</a>
              </motion.div>
            </AnimatePresence>
            <div className="relative min-h-[22rem] bg-kasavu-deep lg:col-span-3">
              <a href={mapLink(loc.mapQuery)} target="_blank" rel="noreferrer" className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-soot/60">
                <MapPin className="h-8 w-8 text-laterite" />
                <span className="text-step--1">View {loc.name} on Google Maps</span>
              </a>
              <iframe key={loc.id} title={`Map of ${site.name}, ${loc.name}`} src={mapEmbed(loc.mapQuery)} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="absolute inset-0 h-full w-full border-0 grayscale-[35%] sepia-[15%]" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-kasavu-deep py-24 sm:py-28">
        <div className="shell grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="text-step-3 text-laterite sm:text-step-4">Send an enquiry</h2>
            <p className="mt-4 max-w-sm text-soot/70">Tell us who will be training and where. We’ll call back to fix a trial class.</p>
            <a href={`https://wa.me/${loc.whatsapp}`} target="_blank" rel="noreferrer" className="btn-ghost-dark mt-8">Or message us on WhatsApp</a>
          </div>
          <div className="lg:col-span-7 lg:col-start-6"><EnquiryForm centre={active} /></div>
        </div>
      </section>
    </>
  )
}
