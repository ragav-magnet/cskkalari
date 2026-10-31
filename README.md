# CSK Kalari Sangham — website

React (Vite) site for CSK Kalari Sangham: Home, About, Programmes, Gallery and Contact.

## Run it

```bash
npm install
npm run dev       # local dev server at http://localhost:5173
npm run build     # production build in dist/
npm run preview   # serve the production build
```

Deploying: `dist/` is a static single-page app. `public/_redirects` (Netlify) and
`vercel.json` (Vercel) route every path to `index.html` so deep links work. On
Apache/cPanel hosting, add an `.htaccess` rewrite to `index.html`.

## Where things live

```
src/
├── assets/images/         Photos, one folder per use (see README inside)
│   ├── kasavanahalli/  sg-palaya/  udayanagar/
│   ├── training/  events/  hero/
├── components/
│   ├── layout/            Navbar, Footer, Logo, PageHeader, Layout (route transitions)
│   ├── motifs/            SVG line art: nilavilakku lamp, poothara, weapons, social icons
│   ├── sections/home/     Home page sections (Hero, Intro, Stages, Programmes, Locations, Closing)
│   └── ui/                Reusable interactive components (see below)
├── data/
│   ├── site.js            Phone, email, WhatsApp, socials, centre addresses & hours
│   └── content.js         Stages, programmes, FAQs, heritage timeline, values
├── lib/                   cn() helper, image auto-loader
├── pages/                 Home, About, Services, Gallery, Contact, NotFound
└── styles/index.css       Tailwind layers, kasavu border, buttons, form fields
```

Most edits need only `src/data/site.js` and `src/data/content.js`. Search for
`TODO` to find details that must be confirmed before launch (phone numbers,
street addresses, batch timings, social links, and the About page story).

## Photos

Drop images into the folders under `src/assets/images/` and rebuild. They are
picked up automatically; the file name becomes the caption. Until a folder has
photos, the site shows woven artwork panels in their place.

## Enquiry form

Without configuration, the form validates the enquiry and opens WhatsApp with
the message pre-filled to `site.whatsapp`. To receive enquiries by email
instead, copy `.env.example` to `.env` and set `VITE_FORM_ENDPOINT` to a
Formspree (or similar) URL.

## Interactive components (`src/components/ui`)

Built with Framer Motion + Tailwind, following patterns from 21st.dev:

| Component         | Pattern                                           | Used on |
|-------------------|---------------------------------------------------|---------|
| `LampGlow`        | Aceternity "Lamp" light cone, re-cast as lamplight | Home hero |
| `SpotlightCard`   | Pointer-following spotlight card                   | Home, Programmes |
| `AnimatedTabs`    | Tabs with sliding shared-layout indicator          | Programmes, Gallery, Contact |
| `MagneticButton`  | Magnetic hover button                              | Calls to action |
| `Lightbox`        | Shared-layout image zoom with keyboard navigation  | Gallery |
| `Accordion`       | Animated height FAQ                                | Programmes |
| `ScrollProgress`  | Reading progress bar                               | All pages |
| Locations list    | Hover image-reveal list                            | Home |
| Stages            | Sticky scroll storytelling                         | Home |

All motion respects the visitor's "reduce motion" setting.

## Design notes

- Palette from the kalari itself: laterite red earth, lamp brass and kasavu
  gold, deep Kerala green, lamp soot, and kasavu off-white.
- Type: Rozha One (display), Hind (text), Manjari (Malayalam). All self-hosted.
- The double gold band (`.kasavu-band`) echoes the border of a kasavu mundu and
  marks the thresholds between sections.
