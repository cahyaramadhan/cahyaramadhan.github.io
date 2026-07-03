import useReveal from '../hooks/useReveal'
import SectionHeading from './SectionHeading'
import { education } from '../data/portfolio'

export default function Education() {
  const [ref, visible] = useReveal()

  return (
    <section id="education" className="section-container py-24">
      <div ref={ref} className={visible ? 'animate-fade-in-up' : 'opacity-0'}>
        <SectionHeading kicker="Background" title="Education" />

        <div className="space-y-6">
          {education.map((edu) => (
            <div
              key={edu.school}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-accent/30"
            >
              <h3 className="font-semibold text-stone-100">{edu.school}</h3>
              <p className="mt-1 text-sm text-stone-400">{edu.degree}</p>
              <p className="mt-1 font-mono text-xs text-stone-500">
                {edu.period} · {edu.location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
