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
export const experience = [
  {
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
    company: 'PT Harmoni Mitra Jayandra',
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
export const projects = [
  {
    title: 'Muvr Payments — Referral & Promo Engine',
    company: 'Muvr Technologies, Inc.',
    period: '2025',
    description:
      'Payment flows supporting referral and promo codes for an on-demand logistics platform, built on Stripe Payment Intents and integrated into an Express.js service layer for secure, flexible transactions.',
    tech: ['Node.js', 'Express.js', 'Stripe', 'MySQL', 'Redis'],
    image: null,
    link: null,
  },
  {
    title: 'FICO — Finance & Accounting Core',
    company: 'eDOT (Nabati Group)',
    period: '2023 – 2025',
    description:
      'Backend services generating journal entries tied to core financial transactions. Led the team through sprints and shipped a Redis + singleflight caching layer that cut invoice pricing latency from 500ms to 250ms under 50 concurrent users.',
    tech: ['Go', 'MongoDB', 'Redis', 'RabbitMQ'],
    image: null,
    link: null,
  },
  {
    title: 'Akreditasiku — Accreditation Management',
    company: 'PT Harmoni Mitra Jayandra',
    period: '2021 – 2023',
    description:
      'RESTful backend enabling multiple campuses to simulate and manage accreditation scores efficiently.',
    tech: ['Go', 'Go-kit', 'PostgreSQL'],
    image: null,
    link: null,
  },
  {
    title: 'Digital Bootcamp Platform',
    company: 'PT Padepokan Tujuh Sembilan',
    period: '2021 – 2023',
    description:
      'Backend services for training and managing technical talent through a structured bootcamp program.',
    tech: ['Go', 'Go-kit', 'Docker', 'PostgreSQL'],
    image: null,
    link: null,
  },
  {
    title: 'Oripay — QRIS Payment Integration',
    company: 'PT Harmoni Mitra Jayandra',
    period: '2021 – 2023',
    description:
      'Integrated DANA QRIS into the Oripay platform, enabling seamless digital transactions for merchants.',
    tech: ['Node.js', 'PostgreSQL'],
    image: null,
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
