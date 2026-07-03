import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Education from '../components/Education'
import Contact from '../components/Contact'

export default function Home() {
  const location = useLocation()

  // Arriving here from another route (e.g. a project detail page) via
  // useSectionNav — finish the scroll/tab-focus it asked for once mounted.
  useEffect(() => {
    const { scrollTo, experienceId } = location.state || {}
    if (!scrollTo) return
    document.getElementById(scrollTo)?.scrollIntoView({ behavior: 'smooth' })
    if (experienceId) {
      window.dispatchEvent(new CustomEvent('portfolio:focus-experience', { detail: experienceId }))
    }
  }, [location.state])

  return (
    <main>
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </main>
  )
}
