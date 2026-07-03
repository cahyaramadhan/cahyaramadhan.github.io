import useReveal from '../hooks/useReveal'
import SectionHeading from './SectionHeading'
import { skills } from '../data/portfolio'

export default function Skills() {
  const [ref, visible] = useReveal()
  const featured = skills.filter((s) => s.featured)
  const rest = skills.filter((s) => !s.featured)

  return (
    <section id="skills" className="section-container py-24">
      <div ref={ref} className={visible ? 'animate-fade-in-up' : 'opacity-0'}>
        <SectionHeading kicker="Toolbox" title="Skills" />

        <p className="mb-8 max-w-xl text-stone-400">
          Most-used tools, front and center — no arbitrary proficiency bars.
        </p>

        <div className="flex flex-wrap gap-3">
          {featured.map((s) => (
            <span
              key={s.name}
              className="rounded-lg border border-accent/40 bg-accent/10 px-4 py-2 text-sm font-medium text-accent-light transition-transform hover:-translate-y-0.5"
            >
              {s.name}
            </span>
          ))}
        </div>

        {rest.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {rest.map((s) => (
              <span
                key={s.name}
                className="rounded-md border border-white/10 px-3 py-1.5 text-xs text-stone-400 transition-colors hover:border-white/30 hover:text-stone-200"
              >
                {s.name}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
