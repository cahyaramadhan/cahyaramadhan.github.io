import { useEffect } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import Icon from '../components/Icon'
import useSectionNav from '../hooks/useSectionNav'
import { projects } from '../data/portfolio'

export default function ProjectDetail() {
  const { slug } = useParams()
  const goToSection = useSectionNav()
  const project = projects.find((p) => p.slug === slug)

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [slug])

  if (!project) return <Navigate to="/" replace />

  const { title, company, experienceId, period, description, details, tech, image, link } = project

  return (
    <main className="pt-16">
      <div className="section-container py-16">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm text-stone-400 transition-colors hover:text-accent"
        >
          <Icon name="arrowDown" className="h-4 w-4 rotate-90" />
          Back to all projects
        </Link>

        <div className="mt-6 aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-stone-900">
          {image ? (
            <img src={image} alt={title} className="h-full w-full object-cover" />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-stone-800 to-stone-900">
              <Icon name="code" className="h-12 w-12 text-stone-700" />
            </div>
          )}
        </div>

        <div className="mt-8 flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-stone-50 sm:text-4xl">{title}</h1>
            <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-stone-400">
              <span>Built at</span>
              <button
                onClick={() => goToSection('experience', { experienceId })}
                className="font-medium text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:text-accent-light"
              >
                {company}
              </button>
              <span className="text-stone-600">·</span>
              <span className="font-mono text-xs">{period}</span>
            </div>
          </div>

          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-stone-700 px-4 py-2 text-sm text-stone-200 transition-colors hover:border-accent hover:text-accent"
            >
              View live
              <Icon name="external" className="h-4 w-4" />
            </a>
          )}
        </div>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-stone-300">{description}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {tech.map((t) => (
            <span
              key={t}
              className="rounded-md bg-white/5 px-2.5 py-1 font-mono text-xs text-stone-400"
            >
              {t}
            </span>
          ))}
        </div>

        {details?.length > 0 && (
          <div className="mt-10 max-w-2xl space-y-4 border-t border-white/10 pt-8">
            {details.map((paragraph, i) => (
              <p key={i} className="text-sm leading-relaxed text-stone-400">
                {paragraph}
              </p>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
