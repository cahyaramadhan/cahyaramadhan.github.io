import { useState } from 'react'
import useReveal from '../hooks/useReveal'
import SectionHeading from './SectionHeading'
import { experience } from '../data/portfolio'

export default function Experience() {
  const [ref, visible] = useReveal()
  const [activeIdx, setActiveIdx] = useState(0)
  const job = experience[activeIdx]

  return (
    <section id="experience" className="section-container py-24">
      <div ref={ref} className={visible ? 'animate-fade-in-up' : 'opacity-0'}>
        <SectionHeading index="02" title="Experience" />

        <div className="flex flex-col gap-6 sm:flex-row">
          {/* Tab list */}
          <div
            role="tablist"
            aria-orientation="vertical"
            className="flex shrink-0 gap-1 overflow-x-auto border-b border-white/10 sm:w-56 sm:flex-col sm:overflow-visible sm:border-b-0 sm:border-l"
          >
            {experience.map((job, i) => (
              <button
                key={`${job.company}-${job.period}`}
                role="tab"
                aria-selected={activeIdx === i}
                onClick={() => setActiveIdx(i)}
                className={`whitespace-nowrap px-4 py-3 text-left text-sm transition-colors sm:border-l-2 sm:-ml-px ${
                  activeIdx === i
                    ? 'border-b-2 border-accent text-accent sm:border-b-0 sm:border-l-2'
                    : 'border-transparent text-slate-400 hover:bg-white/5 hover:text-slate-200'
                }`}
              >
                {job.company}
              </button>
            ))}
          </div>

          {/* Panel */}
          <div key={activeIdx} className="flex-1 animate-fade-in">
            <h3 className="text-lg font-semibold text-slate-100">
              {job.role} <span className="text-accent">@ {job.company}</span>
            </h3>
            {job.roleDetail && (
              <p className="mt-0.5 text-sm italic text-slate-500">{job.roleDetail}</p>
            )}
            <p className="mt-1 font-mono text-xs text-slate-500">
              {job.period} · {job.location}
            </p>
            <p className="mt-4 text-sm text-slate-400">{job.blurb}</p>

            <ul className="mt-4 space-y-3">
              {job.achievements.map((a, i) => (
                <li key={i} className="flex gap-3 text-sm leading-relaxed text-slate-300">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-2">
              {job.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-md bg-white/5 px-2.5 py-1 font-mono text-xs text-slate-400"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
