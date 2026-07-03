import useReveal from '../hooks/useReveal'
import SectionHeading from './SectionHeading'
import ProjectCard from './ProjectCard'
import { projects } from '../data/portfolio'

export default function Projects() {
  const [ref, visible] = useReveal()

  return (
    <section id="projects" className="section-container py-24">
      <div ref={ref} className={visible ? 'animate-fade-in-up' : 'opacity-0'}>
        <SectionHeading kicker="Selected work" title="Projects" />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
