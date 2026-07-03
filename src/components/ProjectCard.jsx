import { Link } from 'react-router-dom'
import Icon from './Icon'
import useSectionNav from '../hooks/useSectionNav'

export default function ProjectCard({ project }) {
  const { slug, title, company, experienceId, period, description, tech, image, link } = project
  const goToSection = useSectionNav()

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5">
      <Link to={`/projects/${slug}`} className="relative aspect-video w-full overflow-hidden bg-stone-900">
        {image ? (
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-stone-800 to-stone-900">
            <Icon name="code" className="h-10 w-10 text-stone-700" />
          </div>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-2">
          <Link to={`/projects/${slug}`} className="font-semibold text-stone-100 hover:text-accent">
            {title}
          </Link>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${title}`}
              className="shrink-0 text-stone-500 hover:text-accent"
            >
              <Icon name="external" className="h-4 w-4" />
            </a>
          )}
        </div>

        <p className="mt-0.5 font-mono text-xs text-stone-500">
          <button
            onClick={() => goToSection('experience', { experienceId })}
            className="hover:text-accent hover:underline"
          >
            {company}
          </button>{' '}
          · {period}
        </p>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-stone-400">{description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {tech.map((t) => (
            <span key={t} className="rounded-md bg-white/5 px-2 py-1 font-mono text-xs text-stone-400">
              {t}
            </span>
          ))}
        </div>

        <Link
          to={`/projects/${slug}`}
          className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-accent-light"
        >
          View details
          <Icon name="external" className="h-3.5 w-3.5" />
        </Link>
      </div>
    </article>
  )
}
