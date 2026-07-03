// ---------------------------------------------------------------------------
// ALL portfolio content lives in this one file. Edit this to update the site
// — no need to touch any component. See CLAUDE.md for the full guide.
//
// Adding a project image:
//   1. Drop the image file in src/assets/projects/ (e.g. fico.png)
//   2. import it below (e.g. `import ficoImg from '../assets/projects/fico.png'`)
//   3. set it as the `image` field on that project entry
// Leave `image: null` to show an auto-generated placeholder instead.
// ---------------------------------------------------------------------------

// Sample project banners (generated placeholders, not real product
// screenshots) — swap these for actual screenshots whenever you have them,
// following the same 3-step pattern described above.
import muvrPaymentsImg from '../assets/projects/muvr-payments.svg'
import ficoImg from '../assets/projects/fico.svg'
import akreditasikuImg from '../assets/projects/akreditasiku.svg'
import digitalBootcampImg from '../assets/projects/digital-bootcamp.svg'
import oripayImg from '../assets/projects/oripay.svg'

export const profile = {
  name: 'Cahya Ramadhan',
  title: 'Backend Engineer',
  location: 'Bandung, West Java, Indonesia',
  email: 'cahya.ramadhan.work@gmail.com',
  linkedin: 'https://www.linkedin.com/in/cahyaramadhan',
  github: 'https://github.com/cahyaramadhan',
  resumeUrl: '/resume/Cahya_Ramadhan_Resume.pdf',
  tagline: 'Backend Engineer building reliable, high-throughput services.',
  summary:
    "I design and ship backend systems — APIs, payment flows, and data pipelines — using Go, Node.js, and SQL/NoSQL databases. Recent work spans a real-time logistics platform, a finance & accounting core processing journal entries, and caching layers that cut response times in half under load.",
  // Shown as quick-glance stats in the hero section.
  highlights: [
    { label: 'Years of experience', value: '4+' },
    { label: 'Backend services shipped', value: '10+' },
    { label: 'Response time cut via caching', value: '50%' },
  ],
}

// Skills you want visitors to notice first. No proficiency bars/percentages —
// just what you actually reach for most. `featured: true` renders larger.
export const skills = [
  { name: 'Go', category: 'Language', featured: true },
  { name: 'Node.js', category: 'Runtime', featured: true },
  { name: 'JavaScript', category: 'Language', featured: true },
  { name: 'PostgreSQL', category: 'Database', featured: true },
  { name: 'MongoDB', category: 'Database', featured: true },
  { name: 'Redis', category: 'Cache', featured: true },
  { name: 'Docker', category: 'Infra', featured: false },
  { name: 'MySQL', category: 'Database', featured: false },
  { name: 'RabbitMQ', category: 'Messaging', featured: false },
  { name: 'gRPC', category: 'API', featured: false },
  { name: 'Express.js', category: 'Framework', featured: false },
  { name: 'Python', category: 'Language', featured: false },
  { name: 'Git', category: 'Tooling', featured: false },
  { name: 'Auth0', category: 'Auth', featured: false },
  { name: 'Stripe', category: 'Payments', featured: false },
]

// Ordered most-recent first — this is what recruiters scan hardest.
// `id` is a stable key used to link a project card back to the job it came
// from (see `projects[].experienceId` below) — keep it stable even if you
// reword `company`/`role`.
export const experience = [
  {
    id: 'muvr',
    company: 'Muvr Technologies, Inc.',
    role: 'Backend Engineer',
    period: 'September 2025 – Present',
    location: 'Remote, United States',
    blurb:
      'On-demand logistics platform connecting customers with movers, haulers, and couriers — real-time tracking, transparent pricing, flexible scheduling.',
    achievements: [
      'Developed backend APIs including CRUD operations and business logic calculations, along with unit tests, using Node.js, Go, MySQL, and Redis, improving system reliability and performance.',
      'Implemented a payment system supporting referral and promo codes using Stripe Payment Intents, integrated with Express.js backend services for secure and flexible transactions.',
      'Developed role-based access control using Auth0, enabling secure authentication and efficient admin user management.',
    ],
    tech: ['Node.js', 'Go', 'MySQL', 'Redis', 'Stripe', 'Express.js', 'Auth0'],
  },
  {
    id: 'edot-fico',
    company: 'PT Harmoni Mitra Jayandra',
    tabLabel: 'PT Harmoni Mitra Jayandra (eDOT)',
    roleDetail: 'onsite placement at PT Elektronik Distribusi Otomatisasi Terkemuka (eDOT)',
    role: 'Backend Engineer',
    period: 'November 2023 – September 2025',
    location: 'Remote, Indonesia',
    blurb:
      'eDOT is a Nabati Group subsidiary empowering businesses with integrated digital solutions across sales, distribution, logistics, marketing, and enterprise systems.',
    achievements: [
      'Developed backend APIs (CRUD, calculation, journal item generation) and unit tests for the Finance and Accounting (FICO) project using Go, MongoDB, Redis, and RabbitMQ, enabling seamless generation of journal entries tied to core financial transactions.',
      'Led the FICO team for 3 months through multiple sprints — creating tasks, monitoring progress, and conducting merge request reviews in GitLab — resulting in a successful release and deployment.',
      'Implemented caching with Redis Index and Redis Query; optimized invoice final price calculation API using Go singleflight, Redis, and MongoDB, reducing response time from 500ms to 250ms for 50 concurrent users.',
    ],
    tech: ['Go', 'MongoDB', 'Redis', 'RabbitMQ', 'GitLab'],
  },
  {
    id: 'hmj-2021',
    company: 'PT Harmoni Mitra Jayandra',
    role: 'Backend Engineer',
    period: 'September 2021 – November 2023',
    location: 'Bandung, Indonesia',
    blurb:
      'IT software solutions company providing web, mobile, and desktop-based software development services.',
    achievements: [
      'Developed backend services and RESTful APIs for the Akreditasiku project using Go, Go-kit, and PostgreSQL, enabling multiple campuses to simulate and manage accreditation scores more efficiently.',
      'Created backend services for the Digital Bootcamp project using Go, Go-kit, Docker, and PostgreSQL, enabling PT Padepokan Tujuh Sembilan to train and manage technical talent effectively.',
      'Implemented QRIS payment integration using DANA QRIS for the Oripay project with Node.js and PostgreSQL, enabling seamless digital transactions.',
    ],
    tech: ['Go', 'Go-kit', 'PostgreSQL', 'Docker', 'Node.js'],
  },
  {
    id: 'kazee',
    company: 'PT Kazee Digital Indonesia',
    role: 'Backend Engineer Intern',
    period: 'August 2020 – December 2020',
    location: 'Remote, Indonesia',
    blurb:
      'Technology company specializing in data-driven and AI-powered insights for digital transformation.',
    achievements: [
      'Developed services to migrate news data from MongoDB to Elasticsearch using Node.js, enhancing search functionality and enabling more effective data analytics.',
      'Conducted research and built proof-of-concepts on Neo4j and video conferencing libraries in Node.js.',
      'Built multiple backend services for scraping and crawling data from social media and review platforms using Python, RabbitMQ, and MongoDB, enabling deeper user profiling and content analysis.',
    ],
    tech: ['Node.js', 'MongoDB', 'Elasticsearch', 'Python', 'RabbitMQ'],
  },
]

// Named projects pulled out of the work above so recruiters can see concrete
// deliverables at a glance. Add new ones by copying an entry below.
//
// - `slug` powers the project's detail-page URL (/projects/<slug>) — keep it
//   short, unique, and URL-safe.
// - `experienceId` must match an `id` in the `experience` array above — it's
//   how the project card's company badge links back to the right job.
// - `details` is the longer write-up shown on the project's detail page
//   (array of paragraphs). The card on the homepage only shows `description`.
export const projects = [
  {
    slug: 'muvr-payments',
    title: 'Muvr Payments — Referral & Promo Engine',
    company: 'Muvr Technologies, Inc.',
    experienceId: 'muvr',
    period: '2025',
    description:
      'Payment flows supporting referral and promo codes for an on-demand logistics platform, built on Stripe Payment Intents and integrated into an Express.js service layer for secure, flexible transactions.',
    details: [
      'Muvr connects customers with movers, haulers, and couriers for on-demand moving, delivery, and junk removal. Growth was pushing the team to reward repeat customers and word-of-mouth referrals without bolting on a fragile discount system.',
      'I built the referral and promo code flows on top of Stripe Payment Intents, wiring the calculation logic and code redemption rules into the existing Express.js service layer so pricing, discounts, and payment capture stay consistent across the booking flow.',
      'Alongside payments, I implemented role-based access control with Auth0 for the admin side, so internal teams can manage users and permissions without engineering involvement for every access change.',
    ],
    tech: ['Node.js', 'Express.js', 'Stripe', 'MySQL', 'Redis', 'Auth0'],
    image: muvrPaymentsImg,
    link: null,
  },
  {
    slug: 'fico-finance-core',
    title: 'FICO — Finance & Accounting Core',
    company: 'eDOT (Nabati Group)',
    experienceId: 'edot-fico',
    period: '2023 – 2025',
    description:
      'Backend services generating journal entries tied to core financial transactions. Led the team through sprints and shipped a Redis + singleflight caching layer that cut invoice pricing latency from 500ms to 250ms under 50 concurrent users.',
    details: [
      'FICO is the Finance and Accounting core behind eDOT, a Nabati Group subsidiary that runs integrated digital solutions across sales, distribution, logistics, marketing, and enterprise systems for its business customers. Every sale, invoice, and adjustment upstream eventually has to land as a correct journal entry.',
      'I built the CRUD and calculation APIs that generate journal items tied to core financial transactions, using Go, MongoDB, Redis, and RabbitMQ — with unit tests covering the calculation logic, since a wrong journal entry is a finance problem, not just a bug.',
      'The invoice final-price calculation endpoint was a bottleneck under concurrent load. I optimized it with Go singleflight (to collapse duplicate in-flight calculations) plus Redis Index/Query caching, cutting response time from 500ms to 250ms for 50 concurrent users.',
      'For about three months I also led the FICO team through its sprints — breaking down tasks, tracking progress, and reviewing merge requests in GitLab — through to a successful release and deployment.',
    ],
    tech: ['Go', 'MongoDB', 'Redis', 'RabbitMQ'],
    image: ficoImg,
    link: null,
  },
  {
    slug: 'akreditasiku',
    title: 'Akreditasiku — Accreditation Management',
    company: 'PT Harmoni Mitra Jayandra',
    experienceId: 'hmj-2021',
    period: '2021 – 2023',
    description:
      'RESTful backend enabling multiple campuses to simulate and manage accreditation scores efficiently.',
    details: [
      'Akreditasiku helps Indonesian higher-education campuses manage and simulate their institutional accreditation scores — a process that otherwise means manually tracking dozens of scoring criteria across spreadsheets per campus.',
      'I built the backend services and RESTful APIs using Go, Go-kit, and PostgreSQL, structuring the data model so multiple campuses could simulate different scoring scenarios and manage their accreditation data independently through the same platform.',
    ],
    tech: ['Go', 'Go-kit', 'PostgreSQL'],
    image: akreditasikuImg,
    link: null,
  },
  {
    slug: 'digital-bootcamp',
    title: 'Digital Bootcamp Platform',
    company: 'PT Padepokan Tujuh Sembilan',
    experienceId: 'hmj-2021',
    period: '2021 – 2023',
    description:
      'Backend services for training and managing technical talent through a structured bootcamp program.',
    details: [
      'Built for PT Padepokan Tujuh Sembilan, this platform supports a structured digital bootcamp — tracking cohorts of trainees through a technical training program from enrollment to graduation.',
      'I developed the backend services with Go, Go-kit, Docker, and PostgreSQL, containerizing the services so the client could deploy and manage the platform predictably alongside their existing infrastructure.',
    ],
    tech: ['Go', 'Go-kit', 'Docker', 'PostgreSQL'],
    image: digitalBootcampImg,
    link: null,
  },
  {
    slug: 'oripay-qris',
    title: 'Oripay — QRIS Payment Integration',
    company: 'PT Harmoni Mitra Jayandra',
    experienceId: 'hmj-2021',
    period: '2021 – 2023',
    description:
      'Integrated DANA QRIS into the Oripay platform, enabling seamless digital transactions for merchants.',
    details: [
      'Oripay needed to support QRIS (the Indonesian national QR payment standard) so merchants on the platform could accept digital payments without extra hardware.',
      'I integrated DANA QRIS into Oripay using Node.js and PostgreSQL, handling the payment flow end-to-end from QR generation through transaction confirmation, so merchants get a seamless digital transaction experience.',
    ],
    tech: ['Node.js', 'PostgreSQL'],
    image: oripayImg,
    link: null,
  },
]

export const education = [
  {
    school: 'Politeknik Negeri Bandung',
    degree: 'Bachelor of Applied Science (S.Tr.), Informatics Engineering',
    period: '2017 – 2021',
    location: 'Bandung, Indonesia',
  },
]

export const socials = [
  { label: 'Email', href: `mailto:${profile.email}`, icon: 'mail' },
  { label: 'LinkedIn', href: profile.linkedin, icon: 'linkedin' },
  { label: 'GitHub', href: profile.github, icon: 'github' },
]
