// ---------------------------------------------------------------------------
// Business details. Everything a non-developer may need to change lives here.
// Items marked TODO could not be verified when the site was built — please
// confirm them against the Google Business listings before going live.
// ---------------------------------------------------------------------------

export const site = {
  name: 'CSK Kalari Sangham',
  shortName: 'CSK Kalari',
  url: 'https://cskkalari.com',
  tagline: 'Traditional Kalaripayattu in Bengaluru',
  phone: '+91 90000 00000', // TODO: real phone number
  whatsapp: '919000000000', // TODO: WhatsApp number, digits only with country code
  email: 'info@cskkalari.com', // TODO: confirm inbox
  social: {
    instagram: 'https://www.instagram.com/', // TODO
    youtube: 'https://www.youtube.com/', // TODO
    facebook: 'https://www.facebook.com/', // TODO
  },
  // Optional: set VITE_FORM_ENDPOINT in .env (e.g. a Formspree URL) to receive
  // enquiries by email. Without it the form hands the enquiry to WhatsApp.
  formEndpoint: import.meta.env.VITE_FORM_ENDPOINT || '',
}

export const locations = [
  {
    id: 'kasavanahalli',
    name: 'Kasavanahalli',
    area: 'Off Sarjapur Road',
    address: 'Kasavanahalli, Off Sarjapur Road, Bengaluru, Karnataka 560035', // TODO: full street address
    mapQuery: 'CSK Kalari Sangham - Kasavanahalli',
    phone: '+91 90000 00000', // TODO
    hours: [
      { days: 'Mon – Fri', time: ['6:00 – 8:00 AM', '5:30 – 8:30 PM'] }, // TODO
      { days: 'Sat – Sun', time: ['7:00 – 11:00 AM'] }, // TODO
    ],
    near: 'Sarjapur Road, HSR Layout, Haralur, Bellandur',
  },
  {
    id: 'sg-palaya',
    name: 'S.G. Palaya',
    area: 'Near Hosur Road',
    address: 'S.G. Palaya, Bengaluru, Karnataka 560029', // TODO: full street address
    mapQuery: 'CSK Kalari Sangham S.G. Palaya',
    phone: '+91 90000 00000', // TODO
    hours: [
      { days: 'Mon – Fri', time: ['6:00 – 8:00 AM', '5:30 – 8:30 PM'] }, // TODO
      { days: 'Sat – Sun', time: ['7:00 – 11:00 AM'] }, // TODO
    ],
    near: 'BTM Layout, Koramangala, Adugodi, Tavarekere',
  },
  {
    id: 'udayanagar',
    name: 'Udayanagar',
    area: 'Near K.R. Puram',
    address: 'Udayanagar, Bengaluru, Karnataka 560016', // TODO: full street address
    mapQuery: 'CSK Kalari Sangham - Udayanagar',
    phone: '+91 90000 00000', // TODO
    hours: [
      { days: 'Mon – Fri', time: ['6:00 – 8:00 AM', '5:30 – 8:30 PM'] }, // TODO
      { days: 'Sat – Sun', time: ['7:00 – 11:00 AM'] }, // TODO
    ],
    near: 'Mahadevapura, K.R. Puram, Ramamurthy Nagar, Hoodi',
  },
]

export const nav = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Programmes' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
]

export const mapEmbed = (query) =>
  `https://maps.google.com/maps?q=${encodeURIComponent(query + ', Bengaluru')}&z=15&output=embed`
export const mapLink = (query) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query + ', Bengaluru')}`
