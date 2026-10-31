// Editorial content for the site. Copy is written to be accurate to
// Kalaripayattu tradition in general; anything specific to CSK Kalari Sangham
// (history, founders, achievements) is marked TODO for the team to fill in.

export const stages = [
  {
    id: 'meythari',
    mal: 'മെയ്ത്താരി',
    name: 'Meythari',
    gloss: 'Training of the body',
    text:
      'Every student begins here. Kicks, jumps, lunges and the animal postures called vadivu build strength, balance and the flexibility of the hips and spine. The body is oiled, warmed and taught to move as one piece.',
    learns: ['Chuvadu footwork', 'Kaal etupp leg swings', 'Vadivu animal stances', 'Meippayattu body sequences'],
  },
  {
    id: 'kolthari',
    mal: 'കോൽത്താരി',
    name: 'Kolthari',
    gloss: 'Wooden weapons',
    text:
      'Once the body is ready, the stick arrives. Students learn the long staff, the short stick and the curved otta, which teaches the vital points of the body. Distance, timing and control come from here.',
    learns: ['Kettukari long staff', 'Cheruvadi short stick', 'Otta curved stick', 'Paired sparring drills'],
  },
  {
    id: 'ankathari',
    mal: 'അങ്കത്താരി',
    name: 'Ankathari',
    gloss: 'Metal weapons',
    text:
      'For advanced students, the sword and shield, dagger, spear and the flexible urumi. Training is slow and supervised, and is taken up only after years of practice and with the gurukkal’s permission.',
    learns: ['Val and paricha, sword and shield', 'Kadhara dagger', 'Kuntham spear', 'Urumi flexible sword'],
  },
  {
    id: 'verumkai',
    mal: 'വെറുംകൈ',
    name: 'Verumkai',
    gloss: 'The empty hand',
    text:
      'The final stage returns to the bare hands: locks, throws, disarming and defence against weapons. Knowledge of the marma points, the body’s vital spots, is passed on carefully at this level.',
    learns: ['Locks and throws', 'Disarming techniques', 'Defence against weapons', 'Marma awareness'],
  },
]

export const programmes = [
  {
    id: 'children',
    audience: 'Children',
    title: 'Kalari for children',
    ages: 'Ages 6 to 14',
    summary:
      'Playful, structured classes that build posture, focus and confidence. Children learn the foundation sequences and the respect the kalari asks of everyone who enters.',
    points: ['Small batches, grouped by age', 'Meythari body training and footwork', 'Annual demonstration for parents', 'Progress reviewed every term'],
    frequency: '3 classes a week',
    featured: true,
  },
  {
    id: 'adults',
    audience: 'Adults',
    title: 'Foundation for teens and adults',
    ages: 'Ages 15 and above',
    summary:
      'A complete conditioning practice. Expect deep flexibility work, cardiovascular endurance and a steady path from body training into the wooden weapons.',
    points: ['Morning and evening batches', 'No prior fitness needed', 'Progression into Kolthari', 'Breath and focus practice'],
    frequency: '3 to 5 classes a week',
    featured: true,
  },
  {
    id: 'weapons',
    audience: 'Adults',
    title: 'Weapons training',
    ages: 'For continuing students',
    summary:
      'Staff, short stick and otta for students who have completed the foundation, with sword and shield introduced at the gurukkal’s discretion.',
    points: ['Kettukari, cheruvadi and otta', 'Partner drills and forms', 'Taught under close supervision'],
    frequency: 'Weekend batches',
  },
  {
    id: 'women',
    audience: 'Women',
    title: 'Self-defence for women',
    ages: 'Ages 15 and above',
    summary:
      'Practical escapes, strikes and awareness drawn from Verumkai bare-hand techniques, taught in a supportive batch.',
    points: ['Short-format course', 'Escapes, strikes and distance', 'Builds real-world confidence'],
    frequency: '8-week course',
  },
  {
    id: 'schools',
    audience: 'Schools & teams',
    title: 'Schools, corporates and workshops',
    ages: 'Groups of 10 or more',
    summary:
      'On-site sessions for schools, residential communities and companies, from a one-day introduction to a term-long programme.',
    points: ['Introductory workshops', 'Term-long school programmes', 'Team wellness sessions'],
    frequency: 'On request',
  },
  {
    id: 'performance',
    audience: 'Schools & teams',
    title: 'Demonstrations and performances',
    ages: 'For events',
    summary:
      'Our students perform traditional Kalaripayattu demonstrations for cultural festivals, school days and corporate events.',
    points: ['Choreographed weapon sequences', 'Suited to stage or open ground', 'Talk and Q&A available'],
    frequency: 'Book in advance',
  },
]

export const firstClass = [
  { title: 'Book a trial', text: 'Call, message on WhatsApp or send the form. Tell us the student’s age and the centre nearest you.' },
  { title: 'Come ten minutes early', text: 'Wear loose cotton clothes you can stretch in. Training is barefoot. Bring water and a small towel.' },
  { title: 'Salute the kalari', text: 'Every class begins with the vandanam, a salutation to the kalari, the guru and the poothara altar.' },
  { title: 'Train and talk', text: 'Join a beginner batch for a full session. Afterwards the instructor will suggest a batch and schedule.' },
]

export const faqs = [
  { q: 'Is there a minimum age?', a: 'Children can begin from around 6 years old. There is no upper age limit for adults; the instructor adapts the training to each student’s body.' },
  { q: 'Do I need to be fit or flexible to start?', a: 'No. Flexibility is what Meythari builds. Most students cannot touch their toes on the first day.' },
  { q: 'What should I wear?', a: 'Loose, comfortable cotton clothes. Training is barefoot. Regular students wear the traditional kacha, which we can help you get.' },
  { q: 'How long until I train with weapons?', a: 'It depends on the student. Wooden weapons usually begin after several months of steady body training, once the gurukkal feels the student is ready.' },
  { q: 'Can I switch between centres?', a: 'Yes. All three centres follow the same syllabus, so students can attend at a different centre when it suits them. Let your instructor know first.' },
  { q: 'What are the fees?', a: 'Fees depend on the programme and number of classes a week. Call or message the centre and we will share the current fee structure.' },
]

export const heritage = [
  { period: 'Ancient roots', title: 'A training ground called kalari', text: 'The word kalari means the place where training happens; payattu means practice. Martial training in Kerala is described in Tamil Sangam literature, and the art took the shape we know in the medieval period.' },
  { period: 'Medieval Kerala', title: 'Ballads of the Chekavar', text: 'The Vadakkan Pattukal, the northern ballads of Malabar, sing of warriors trained in the kalari who fought duels on behalf of local rulers. Their names are still remembered in the art today.' },
  { period: 'Colonial era', title: 'Driven underground', text: 'Under colonial rule the practice was restricted and carrying weapons was banned. Families kept the art alive quietly, in small kalaris attached to homes and temples.' },
  { period: '20th century', title: 'The revival', text: 'From the 1920s, a generation of gurukkals brought Kalaripayattu back into public view through demonstrations and new kalaris across Kerala.' },
  { period: 'Today', title: 'From Kerala to the world', text: 'Kalaripayattu is now practised across India and abroad, and is part of the Khelo India Youth Games. CSK Kalari Sangham brings the same tradition to Bengaluru.' },
]

export const values = [
  { mal: 'ഗുരു', name: 'Guru', text: 'Knowledge passes from teacher to student in person. The gurukkal decides when a student is ready for the next stage.' },
  { mal: 'അച്ചടക്കം', name: 'Discipline', text: 'Regular practice, punctuality and care for the space. The kalari is cleaned and the lamp lit before every class.' },
  { mal: 'ആരോഗ്യം', name: 'Health', text: 'The aim is a strong, supple body and a calm mind. Fighting skill is a result of that, not the purpose.' },
]

// Gallery captions used when a folder has no photos yet
export const galleryCategories = [
  { id: 'all', label: 'All' },
  { id: 'training', label: 'Training' },
  { id: 'events', label: 'Events' },
  { id: 'kasavanahalli', label: 'Kasavanahalli' },
  { id: 'sg-palaya', label: 'S.G. Palaya' },
  { id: 'udayanagar', label: 'Udayanagar' },
]
