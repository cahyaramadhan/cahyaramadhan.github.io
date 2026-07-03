import Icon from './Icon'
import useReveal from '../hooks/useReveal'
import { profile, socials } from '../data/portfolio'

export default function Contact() {
  const [ref, visible] = useReveal()

  return (
    <section id="contact" className="section-container py-24 text-center">
      <div ref={ref} className={visible ? 'animate-fade-in-up' : 'opacity-0'}>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Let's talk</p>
        <h2 className="mt-3 text-3xl font-bold text-stone-100 sm:text-4xl">Get in touch</h2>
        <p className="mx-auto mt-4 max-w-md text-stone-400">
          I'm currently open to new opportunities. Whether you have a question
          or just want to say hi, my inbox is always open.
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="mt-8 inline-flex items-center gap-2 rounded-md border border-accent px-6 py-3 text-sm font-medium text-accent transition-colors hover:bg-accent/10"
        >
          <Icon name="mail" className="h-4 w-4" />
          Say hello
        </a>

        <div className="mt-10 flex items-center justify-center gap-5">
          {socials.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="text-stone-500 transition-colors hover:text-accent"
            >
              <Icon name={icon} className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
