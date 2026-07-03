import Icon from './Icon'

export default function ProjectCard({ project }) {
  const { title, company, period, description, tech, image, link } = project

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5">
      <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
        {image ? (
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900">
            <Icon name="code" className="h-10 w-10 text-slate-700" />
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-slate-100">{title}</h3>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${title}`}
              className="shrink-0 text-slate-500 hover:text-accent"
            >
              <Icon name="external" className="h-4 w-4" />
            </a>
          )}
        </div>
        <p className="mt-0.5 font-mono text-xs text-slate-500">
          {company} · {period}
        </p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tech.map((t) => (
            <span key={t} className="rounded-md bg-white/5 px-2 py-1 font-mono text-xs text-slate-400">
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}
