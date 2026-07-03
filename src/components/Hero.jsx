import Icon from './Icon'
import { profile, socials } from '../data/portfolio'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-0 top-0 h-[28rem] w-[28rem] rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[20rem] w-[20rem] rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="section-container animate-fade-in-up">
        <span className="inline-flex items-center gap-2 rounded-full border border-stone-700 px-3.5 py-1.5 text-xs text-stone-400">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          {profile.title} · {profile.location}
        </span>

        <h1 className="mt-6 text-4xl font-bold tracking-tight text-stone-50 sm:text-6xl">
          {profile.name}
        </h1>
        <p className="mt-3 max-w-xl text-xl font-medium text-accent-light sm:text-2xl">
          {profile.tagline}
        </p>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-stone-400 sm:text-lg">
          {profile.summary}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="rounded-md bg-accent px-5 py-3 text-sm font-medium text-stone-950 transition-transform hover:scale-[1.03] hover:bg-accent-light"
          >
            View my work
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="rounded-md border border-stone-700 px-5 py-3 text-sm font-medium text-stone-200 transition-colors hover:border-accent hover:text-accent"
          >
            Get in touch
          </a>
        </div>

        <div className="mt-10 flex items-center gap-5">
          {socials.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="text-stone-500 transition-colors hover:text-accent"
            >
              <Icon name={icon} className="h-6 w-6" />
            </a>
          ))}
        </div>

        {profile.highlights?.length > 0 && (
          <dl className="mt-14 grid max-w-xl grid-cols-3 gap-6 border-t border-white/10 pt-8">
            {profile.highlights.map((h) => (
              <div key={h.label}>
                <dt className="text-2xl font-bold text-stone-50 sm:text-3xl">{h.value}</dt>
                <dd className="mt-1 text-xs text-stone-500 sm:text-sm">{h.label}</dd>
              </div>
            ))}
          </dl>
        )}
      </div>

      <button
        onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-stone-600 hover:text-accent transition-colors animate-bounce"
      >
        <Icon name="arrowDown" className="h-6 w-6" />
      </button>
    </section>
  )
}
